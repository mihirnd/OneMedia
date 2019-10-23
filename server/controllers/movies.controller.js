// var mongo = require('mongodb');
// var conn = require('../dbConn');

var ps = require("python-shell");
const path = require("path");
const pathToPython = path.join(__dirname, "../movie_recommender.py");
const spawn = require("child_process").spawn;

exports.getRec = (req, res) => {
  res.json("Hello");
};

exports.getRecommendedMovies = async (req, res) => {
  const movie = req.body.movie;
  console.log(movie);

  const options = {
    args: [movie]
  };
  await ps.PythonShell.run(pathToPython, options, async (err, movies) => {
    if (err) {
      console.log(err);
    }
    // console.log(movies[0] + movies[1]);
    console.log(movies.length);
    var len = movies.length;
    // var i = 0;

    console.log(movies);
    // res.json(movies.length);
    var obj = [];
    var i = 0;
    for (i = 0; i < 80; i = i + 8) {
      // var str = movies[i].toString().split(" '")
      // var id = str[0].substring(1, str[0].length)
      // var genre = str[1].substring(0, str[1].length-1)
      // var keywords = movies[i+1].toString().substring(2, movies[i+1].length-1).split(" ")
      // var summary = movies[i+2].toString().substring(2, movies[i+2].length-1)
      // var temp = movies[i+3].toString().substring(1, movies[i+3].length)
      // // console.log(temp.split(" '"))
      // var t1 = temp.split(" '")
      // var tagline = t1[0].substring(1, t1[0].length-1)
      // var title = t1[1].substring(0,t1[1].length-1)
      // var cast = movies[i+4].toString().substring(2, movies[i+4].length-1)
      // // console.log(movies[5])
      // var yyy = movies[i+5].substring(2, movies[i+5].length)
      // y1 = yyy.split("' ")
      // director = y1[0]

      // console.log(id)
      // console.log(genre)
      // console.log(keywords)
      // console.log(summary)
      // console.log(tagline)
      // console.log(title)
      // console.log(cast)
      // console.log(director)
      // i=i*7
      var temp = {
        id: movies[i],
        genre: movies[i + 1],
        keywords: movies[i + 2].toString().split(" "),
        summary: movies[i + 3],
        tagline: movies[i + 4],
        title: movies[i + 5],
        cast: movies[i + 6],
        director: movies[i + 7]
      };

      obj.push(temp);
    }
    console.log(obj);
    res.json(obj);
  });

  // const pythonProcess = spawn('python3', ["./python/movie_recommender.py", movie]);
  // pythonProcess.stdout.on('data', (data) => {
  //     console.log(data);
  //     res.json("done");
  // });
};
