import pandas as pd
import numpy as np
from sklearn.feature_extraction.text import CountVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import sys

movie1 = sys.argv[1]
# movie1 = 'Avatar'

###### helper functions. Use them when needed #######
def get_title_from_index(index):
	return df1[df1.index == index].values[0]
def get_index_from_title(title):
	return df1[df1.title == title]["index"].values[0]
##################################################

##Step 1: Read CSV File
df = pd.read_csv("movie_dataset.csv")
df1 = df
#print df.columns
##Step 2: Select Features
# index		homepage		overview	tagline	title	

features = ['keywords','cast','genres','director','index','overview','tagline','title']
##Step 3: Create a column in DF which combines all selected features
for feature in features:
	df[feature] = df[feature].fillna('')

def combine_features(row):
	try:
		return row['keywords'] +" "+row['cast']+" "+row["genres"]+" "+row["director"]
	except:
		print ("Error:", row)

df["combined_features"] = df.apply(combine_features,axis=1)

#print "Combined Features:", df["combined_features"].head()

##Step 4: Create count matrix from this new combined column
cv = CountVectorizer()
 
count_matrix = cv.fit_transform(df["combined_features"])

##Step 5: Compute the Cosine Similarity based on the count_matrix
cosine_sim = cosine_similarity(count_matrix) 
# movie_user_likes = "Avatar"
movie_user_likes = movie1


## Step 6: Get index of this movie from its title
movie_index = get_index_from_title(movie_user_likes)

similar_movies =  list(enumerate(cosine_sim[movie_index]))

## Step 7: Get a list of similar movies in descending order of similarity score
sorted_similar_movies = sorted(similar_movies,key=lambda x:x[1],reverse=True)

## Step 8: Print titles of first 50 movies
i=0
for element in sorted_similar_movies:
		# print(get_title_from_index(element[0]))
		a = get_title_from_index(element[0])
		print(a[0])
		print(a[1])
		print(a[2])
		print(a[3])
		print(a[4])
		print(a[5])
		print(a[6])
		print(a[7])

		i=i+1
		if i>9:
			break
# sys.stdout.flush()
