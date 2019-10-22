import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import sys

song1 = sys.argv[1]
# song1 = 'Immigrant Song (Album Version)'
###### helper functions. Use them when needed #######
def get_title_from_song_id(index):
	return df1.loc[df1.index == index].values[0]
def get_song_id_from_title(title):
	return df1.loc[df1.title == title]["song_id"].values[0]
##################################################

##Step 1: Read CSV File
df = pd.read_csv("song_data1.csv")
df1 = df
#print df.columns
##Step 2: Select Features

features = ['release','artist_name']
##Step 3: Create a column in DF which combines all selected features
for feature in features:
	df[feature] = df[feature].fillna('')
# print(df.head())

def combine_features(row):
	try:
		return row['release'] +" "+row['artist_name']
	except:
		print ("Error:", row)

df["combined_features"] = df.apply(combine_features,axis=1)
# print(df["combined_features"].head())
# print("Combined Features:", df["combined_features"].head())

##Step 4: Create count matrix from this new combined column
cv = CountVectorizer()
 
count_matrix = cv.fit_transform(df["combined_features"])

##Step 5: Compute the Cosine Similarity based on the count_matrix
cosine_sim = cosine_similarity(count_matrix) 
# song_user_likes = "Avatar"
song_user_likes = song1


## Step 6: Get index of this song from its title
song_index = get_song_id_from_title(song_user_likes)
# print(song_index)
similar_songs =  list(enumerate(cosine_sim[song_index]))

## Step 7: Get a list of similar songs in descending order of similarity score
sorted_similar_songs = sorted(similar_songs,key=lambda x:x[1],reverse=True)

## Step 8: Print titles of first 50 songs
i=0
for element in sorted_similar_songs:
		# print(get_title_from_song_id(element[0]))
		a = get_title_from_song_id(element[0])
		print(a[0])
		print(a[1])
		print(a[2])
		print(a[3])
		# print(a[4])
		# print(a[5])
		# print(a[6])
		# print(a[7])

		i=i+1
		if i>9:
			break
# sys.stdout.flush()
