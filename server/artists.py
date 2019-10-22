import pandas as pd 
import sys

artist = sys.argv[1]
# artist = 'beyonce'
df = pd.read_csv('abc.csv')
# print(df.loc[df.artist==artist].values[0])
abc = df.loc[df.artist==artist].values[0]
s = []
for x in range(2,12):
    # s+=x
    # print(abc[x])
    s.append(abc[x])
print(s)