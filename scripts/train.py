import pandas
from sklearn.tree import DecisionTreeRegressor
from joblib import dump

file_path = 'data/train.csv'
data = pandas.read_csv(file_path)

data = data.dropna(axis=0)

y = data.Cover_Type
features = ['Elevation', 'Aspect', 'Slope',
    'Horizontal_Distance_To_Hydrology', 'Vertical_Distance_To_Hydrology',
    'Horizontal_Distance_To_Roadways', 'Hillshade_9am', 'Hillshade_Noon',
    'Hillshade_3pm', 'Horizontal_Distance_To_Fire_Points',
    'Wilderness_Area1', 'Wilderness_Area2', 'Wilderness_Area3',
    'Wilderness_Area4', 'Soil_Type1', 'Soil_Type2', 'Soil_Type3',
    'Soil_Type4', 'Soil_Type5', 'Soil_Type6', 'Soil_Type7', 'Soil_Type8',
    'Soil_Type9', 'Soil_Type10', 'Soil_Type11', 'Soil_Type12',
    'Soil_Type13', 'Soil_Type14', 'Soil_Type15', 'Soil_Type16',
    'Soil_Type17', 'Soil_Type18', 'Soil_Type19', 'Soil_Type20',
    'Soil_Type21', 'Soil_Type22', 'Soil_Type23', 'Soil_Type24',
    'Soil_Type25', 'Soil_Type26', 'Soil_Type27', 'Soil_Type28',
    'Soil_Type29', 'Soil_Type30', 'Soil_Type31', 'Soil_Type32',
    'Soil_Type33', 'Soil_Type34', 'Soil_Type35', 'Soil_Type36',
    'Soil_Type37', 'Soil_Type38', 'Soil_Type39', 'Soil_Type40'
]
x = data[features]

model = DecisionTreeRegressor(random_state=1)
model.fit(x, y)

dump(model, 'models/tree.joblib')
