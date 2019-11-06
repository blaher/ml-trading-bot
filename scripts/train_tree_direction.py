import threading
import time
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
  'open',
  'high',
  'low',
  'close',
  'indicator_SMA_value1',
  'indicator_EMA_value1',
  'indicator_WMA_value1',
  'indicator_DEMA_value1',
  'indicator_TEMA_value1',
  'indicator_TRIMA_value1',
  'indicator_KAMA_value1',
  'indicator_MAMA_value1',
  'indicator_MAMA_value2',
  'indicator_VWAP_value1',
  'indicator_T3_value1',
  'indicator_MACD_value1',
  'indicator_MACD_value2',
  'indicator_MACD_value3',
  'indicator_MACDEXT_value1',
  'indicator_MACDEXT_value2',
  'indicator_MACDEXT_value3',
  'indicator_STOCH_value1',
  'indicator_STOCH_value2',
  'indicator_STOCHF_value1',
  'indicator_STOCHF_value2',
  'indicator_RSI_value1',
  'indicator_STOCHRSI_value1',
  'indicator_STOCHRSI_value2',
  'indicator_WILLR_value1',
  'indicator_ADX_value1',
  'indicator_ADXR_value1',
  'indicator_APO_value1',
  'indicator_PPO_value1',
  'indicator_MOM_value1',
  'indicator_BOP_value1',
  'indicator_CCI_value1',
  'indicator_CMO_value1',
  'indicator_ROC_value1',
  'indicator_ROCR_value1',
  'indicator_AROON_value1',
  'indicator_AROON_value2',
  'indicator_AROONOSC_value1',
  'indicator_MFI_value1',
  'indicator_TRIX_value1',
  'indicator_ULTOSC_value1',
  'indicator_DX_value1',
  'indicator_MINUS_DI_value1',
  'indicator_PLUS_DI_value1',
  'indicator_MINUS_DM_value1',
  'indicator_PLUS_DM_value1',
  'indicator_BBANDS_value1',
  'indicator_BBANDS_value2',
  'indicator_BBANDS_value3',
  'indicator_MIDPOINT_value1',
  'indicator_MIDPRICE_value1',
  'indicator_SAR_value1',
  'indicator_TRANGE_value1',
  'indicator_ATR_value1',
  'indicator_NATR_value1',
  'indicator_AD_value1',
  'indicator_ADOSC_value1',
  'indicator_OBV_value1',
  'indicator_HT_TRENDLINE_value1',
  'indicator_HT_SINE_value1',
  'indicator_HT_SINE_value2',
  'indicator_HT_TRENDMODE_value1',
  'indicator_HT_DCPERIOD_value1',
  'indicator_HT_DCPHASE_value1',
  'indicator_HT_PHASOR_value1',
  'indicator_HT_PHASOR_value2'
]

def predict(out, row):
    return net.run(out, feed_dict={X: row})[0][0]

#TODO: Thread this
#TODO: Setup Multi-GPU
def insert_neural(data, net, out):
    data_transform = data.drop(['minute', 'trade'], axis=1)
    data_transform = data_transform.drop(features, axis=1)
    data_len = len(data)
    neural_predictions = list()
    print(data_transform)

    start = time.process_time()
    for i in range(data_len):
        print(i)
        row = data_transform.loc[[i]]
        #print(row)
        prediction = predict(out, row)
        print(prediction)
        neural_predictions.append(prediction)
    print('Time Taken:')
    print(time.process_time()-start)

    #TODO: Add Prediciton Delta against close
    data['neural_prediction'] = neural_predictions

    return data

file_path = 'data/SPY_tree_direction.csv'
data = pandas.read_csv(file_path, skipinitialspace=True)

stock_data = data.drop(features, axis=1)
stock_data = stock_data.drop(['minute', 'trade'], axis=1)

#TODO: modulularize this so it's not repetitive in trainings
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
    saver.restore(net, 'algorithms/neural-indicator')
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
min_nodes = 2
max_nodes = 2048
nodes = min_nodes
lowest_error_nodes = 0
lowest_error_predictions = list()

def predict_thread(nodes, train_x, test_x, train_y, test_y):
    global lowest_errors

    def get_errors(leaf_nodes, train_x, test_x, train_y, test_y):
        start = time.process_time()

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

        #print('Prediction values:')
        #print(preds_val)

        errors = 0
        for i in range(length):
            if (preds_val[i] != test_y[i]):
                errors += 1

        print("Leaf nodes: %d  \t Errors:  %d out of %d" %(leaf_nodes, errors, length))
        #print(time.process_time()-start)
        return(errors, model, preds_val)

    errors, model, predictions = get_errors(nodes, train_x, test_x, train_y, test_y)

    if errors < lowest_errors:
        lowest_errors = errors

        dump(model, 'algorithms/tree-direction.joblib')

        #print("Current Lowest Errors: ", errors)
        #print("Current Lowest Error Nodes: ", nodes)
        #print("Current Lowest Error Predicitions:")
        #print(predictions)
    else:
        print('Not lowest errors')

lowest_errors = test_len
max_threads = 32
max_runs = 10240

start = time.process_time()
while lowest_errors/test_len > 0.2 and i <= max_runs:
    print("Run:  %d" %(i+1))

    thread_instance = threading.Thread(target=predict_thread, args=(nodes, train_x, test_x, train_y, test_y))

    while threading.active_count() >= max_threads:
        pass
    thread_instance.start()

    print('Lowest errors: ', lowest_errors)

    nodes += 1
    if nodes > max_nodes:
        nodes = min_nodes

    i += 1

while threading.active_count() > 1:
    pass

print("Absolute Lowest Errors:  %d" %(lowest_errors))
print(time.process_time()-start)
