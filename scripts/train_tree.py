import pandas
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_absolute_error
from joblib import dump

from warnings import simplefilter
simplefilter(action='ignore', category=FutureWarning)

runs = 100
features = ['Rooms', 'Bathroom', 'Landsize', 'Lattitude', 'Longtitude']

def get_mae(leaf_nodes, train_x, test_x, train_y, test_y):
    model = RandomForestRegressor(max_leaf_nodes=leaf_nodes)
    model.fit(train_x, train_y)

    preds_val = model.predict(test_x)
    mae = mean_absolute_error(test_y, preds_val)

    print("Leaf nodes: %d  \t\t\t Mean Absolute Error:  %d" %(leaf_nodes, mae))
    return(mae, model)

def recurse_nodes(min_nodes, max_nodes, train_x, x, train_y, y):
    increment = (max_nodes-min_nodes)/10

    i = 0
    first = 1
    previous_nodes = 0
    while i < 10:
        nodes = round(min_nodes+(i*increment))

        if previous_nodes < nodes:
            mae, model = get_mae(nodes, train_x, x, train_y, y)

            if first == 1 or mae < lowest_mae:
                lowest_mae = mae
                lowest_model = model

                if i == 0:
                    range_min = min_nodes
                else:
                    range_min = min_nodes+((i-1)*increment)

                range_max = min_nodes+((i+1)*increment)
                if range_max > max_nodes:
                    range_max = max_nodes

                first = 0

        previous_nodes = nodes
        i += 1

    if increment <= 0.1:
        print("Lowest Mean Absolute Error:  %d" %(lowest_mae))
        return(lowest_model, mae)
    else:
        return(recurse_nodes(range_min, range_max, train_x, x, train_y, y))

file_path = 'data/train.csv'
data = pandas.read_csv(file_path)
data = data.dropna(axis=0)
y = data.Price
x = data[features]

train_x, test_x, train_y, test_y = train_test_split(x, y, random_state = 0)

i = 0
first = 1
while i < runs:
    print("Run:  %d out of %d" %(i+1, runs))
    model, mae = recurse_nodes(2, len(train_x), train_x, test_x, train_y, test_y)

    if first == 1 or mae < lowest_mae:
        lowest_mae = mae
        lowest_model = model

        first = 0

    i += 1

print("Absolute Lowest Mean Absolute Error:  %d" %(lowest_mae))

dump(lowest_model, 'models/tree.joblib')
