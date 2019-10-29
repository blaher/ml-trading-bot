import pandas
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
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
data = data.dropna(axis=0)
y = list(data.trade)
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
