import pandas
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
import tensorflow as tf
from joblib import dump

from warnings import simplefilter
simplefilter(action='ignore', category=FutureWarning)

#TODO: Autoload these
features = [
    'open', 'high', 'low', 'close', 'indicator_MAMA_value1',
    'indicator_MAMA_value2', 'indicator_MACD_value1', 'indicator_MACD_value2',
    'indicator_MACD_value3', 'indicator_MACDEXT_value1',
    'indicator_MACDEXT_value2', 'indicator_MACDEXT_value3',
    'indicator_STOCH_value1', 'indicator_STOCH_value2',
    'indicator_STOCHF_value1', 'indicator_STOCHF_value2',
    'indicator_STOCHRSI_value1', 'indicator_STOCHRSI_value2',
    'indicator_AROON_value1', 'indicator_AROON_value2',
    'indicator_BBANDS_value1', 'indicator_BBANDS_value2',
    'indicator_BBANDS_value3', 'indicator_MIDPRICE_value1',
    'indicator_MIDPRICE_value2', 'indicator_HT_SINE_value1',
    'indicator_HT_SINE_value2', 'indicator_HT_PHASOR_value1',
    'indicator_HT_PHASOR_value2'
]

def insert_neural(data, net, out):
    data_trasnform = data.drop(['minute', 'trade'], axis=1)
    data_trasnform = data_trasnform.drop(features, axis=1)
    data_len = len(data)
    neural_predictions = list()
    print(data_trasnform)

    for i in range(data_len):
        row = data_trasnform.loc[[i]]
        print(row)
        prediction = net.run(out, feed_dict={X: row})
        neural_predictions.append(prediction)

    #TODO: Add Prediciton Delta against close
    data['neural_prediction'] = neural_predictions

    return data

def get_errors(leaf_nodes, train_x, test_x, train_y, test_y):
    model = RandomForestRegressor(max_leaf_nodes=leaf_nodes)
    model.fit(train_x, train_y)

    preds_val = model.predict(test_x)
    length = len(preds_val)
    for i in range(length):
        if preds_val[i] >= 0.5:
            preds_val[i] = 1
        else:
            preds_val[i] = 0
    preds_val = [int(round(x)) for x in list(preds_val)]

    errors = 0
    for i in range(length):
        if (preds_val[i] != test_y[i]):
            errors += 1

    print("Leaf nodes: %d  \t Errors:  %d out of %d" %(leaf_nodes, errors, length))
    return(errors, model)

file_path = 'data/SPY_tree.csv'
data = pandas.read_csv(file_path, skipinitialspace=True)

stock_data = data.drop(features, axis=1)
stock_data = stock_data.drop(['minute', 'trade'], axis=1)

#modulularize this so it's not repetitive in trainings
n_stocks = stock_data.shape[1]

# Neurons
n_neurons_1 = 1024
n_neurons_2 = 512
n_neurons_3 = 256
n_neurons_4 = 128

# Initializers
sigma = 1
weight_initializer = tf.variance_scaling_initializer(mode="fan_avg", distribution="uniform", scale=sigma)
bias_initializer = tf.zeros_initializer()

# Placeholder
X = tf.placeholder(dtype=tf.float32, shape=[None, n_stocks])
Y = tf.placeholder(dtype=tf.float32, shape=[None])

# Hidden weights
W_hidden_1 = tf.Variable(weight_initializer([n_stocks, n_neurons_1]))
bias_hidden_1 = tf.Variable(bias_initializer([n_neurons_1]))
W_hidden_2 = tf.Variable(weight_initializer([n_neurons_1, n_neurons_2]))
bias_hidden_2 = tf.Variable(bias_initializer([n_neurons_2]))
W_hidden_3 = tf.Variable(weight_initializer([n_neurons_2, n_neurons_3]))
bias_hidden_3 = tf.Variable(bias_initializer([n_neurons_3]))
W_hidden_4 = tf.Variable(weight_initializer([n_neurons_3, n_neurons_4]))
bias_hidden_4 = tf.Variable(bias_initializer([n_neurons_4]))

# Output weights
W_out = tf.Variable(weight_initializer([n_neurons_4, 1]))
bias_out = tf.Variable(bias_initializer([1]))

# Hidden layer
hidden_1 = tf.nn.relu(tf.add(tf.matmul(X, W_hidden_1), bias_hidden_1))
hidden_2 = tf.nn.relu(tf.add(tf.matmul(hidden_1, W_hidden_2), bias_hidden_2))
hidden_3 = tf.nn.relu(tf.add(tf.matmul(hidden_2, W_hidden_3), bias_hidden_3))
hidden_4 = tf.nn.relu(tf.add(tf.matmul(hidden_3, W_hidden_4), bias_hidden_4))

# Output layer (transpose!)
out = tf.transpose(tf.add(tf.matmul(hidden_4, W_out), bias_out))

tf.global_variables_initializer()
saver = tf.compat.v1.train.Saver()
with tf.Session() as net:
    saver.restore(net, 'models/neural')
    data = insert_neural(data, net, out)

data = data.dropna(axis=0)

print(data)

y = list(data.trade)
features.append('neural_prediction')
x = data[features]

train_x, test_x, train_y, test_y = train_test_split(x, y, random_state = 0)

i = 0
first = 1
test_len = len(test_y)
errors = test_len
lowest_errors = errors
nodes = 2
while lowest_errors/test_len > 0.2:
    print("Run:  %d" %(i+1))
    errors, model = get_errors(nodes, train_x, test_x, train_y, test_y)

    if first == 1 or errors < lowest_errors:
        lowest_errors = errors
        lowest_model = model

        dump(lowest_model, 'models/tree.joblib')

        first = 0
    print("Lowest Errors: ", lowest_errors)

    nodes += 1
    i += 1

print("Absolute Lowest Mean Absolute Error:  %d" %(lowest_errors))
