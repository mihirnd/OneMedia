import pandas as pd 
df = pd.read_csv('abc.csv')
print(df.loc[df.artist=="beyonce"].values[0])