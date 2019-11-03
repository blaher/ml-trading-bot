import sys
import json
import pandas as pd
import tensorflow as tf
from collections import OrderedDict
from joblib import load

#Read data from stdin
def read_in():
    lines = sys.stdin.readlines()

    #Since our input would only be having one line, parse our JSON data from that
    return json.loads(lines[0], object_pairs_hook=OrderedDict)

#get our data as an array from read_in()
lines = read_in()

data = lines.copy()
data.pop('minute')

data_copy = data.copy()
for element in data_copy:
    if element.startswith('stock_'):
        data.pop(element)
    else:
        if data[element]:
            data[element] = float(data[element])
        else:
            #TODO: Fix the null in data collecting
            data[element] = 0

stock_data = lines.copy()
stock_data.pop('minute')
stock_data.pop('open')
stock_data.pop('high')
stock_data.pop('low')
stock_data.pop('close')

stock_data_copy = stock_data.copy()
for element in stock_data_copy:
    if element.startswith('indicator_'):
        stock_data.pop(element)
    else:
        stock_data[element] = float(stock_data[element])

#TODO: modulularize this so it's not repetitive in trainings
n_stocks = len(stock_data)

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
config = tf.ConfigProto()
config.gpu_options.allow_growth = True
with tf.Session(config=config) as net:
    saver.restore(net, 'models/neural')
    df = pd.DataFrame(stock_data, columns=stock_data.keys(), index=[0])
    data['neural_prediction'] = net.run(out, feed_dict={X: df})[0][0]

clf = load('models/tree.joblib')
df = pd.DataFrame(data, columns=data.keys(), index=[0])

prediction = clf.predict(df)[0]
if prediction >= 0.5:
    print('1')
else:
    print('0')
print(prediction)
print(data['neural_prediction'])
#TODO: Figure out why 0 is NaN or empty
#TODO: Send risk factor
