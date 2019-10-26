import csv

f = open('data/sp500.csv')
csv_f = csv.reader(f)

i = 0
for row in csv_f:
    if i > 0:
        print('      {')
        print('        id: '+str(i)+',')
        print('        symbol: \''+row[0]+'\',')
        print('        name: \''+row[1]+'\',')
        print('        createdAt: new Date(),')
        print('        updatedAt: new Date()')
        print('      },')

    i += 1
