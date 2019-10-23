// var mongo = require('mongodb');
// var conn = require('../dbConn');

var ps = require("python-shell");
const path = require("path");
const pathToPython_song = path.join(__dirname, "../song_recommender.py");
const pathToPython_artists = path.join(__dirname, "../artists.py");

exports.getRecommendedArtists = async (req, res) => {
  // res.json("Hello");
  const artist = req.body.artist;
  console.log(artist);
  const options = {
    args: [artist]
  };
  await ps.PythonShell.run(
    pathToPython_artists,
    options,
    async (err, artists) => {
      if (err) {
        console.log(err);
      }
      console.log(artists.toString());
      var a = artists.toString().substring(1, artists.toString().length - 1);
      console.log(a);
      var arr = a.split(", ");
      console.log(arr);
      const obj = [];
      var i = 0;
      for (i = 0; i < arr.length; i++) {
        var str1 = arr[i].substring(1, arr[i].length - 1);
        var temp = {
          artist: str1
        };
        obj.push(temp);
      }

      // console.log(movies[0] + movies[1]);
      // console.log(artists.length)
      // var len = artists.length
      // var i = 0;
      // var str = ""
      // for(i=0;i<len;i++) {
      //     str+=artists[i]

      // }
      // console.log(str)
      // var arr = str.split("' '")
      // console.log(arr)
      // var obj = []
      // var i = 0
      // for(i=0;i<40;i=i+4) {
      //     // song_id,title,release,artist_name

      //     var temp = {
      //         "song_id": songs[i],
      //         "title": songs[i+1],
      //         "release": songs[i+2],
      //         "artist_name": songs[i+3]

      //     }

      //     obj.push(temp);
      // }
      // console.log(obj)
      // res.json(obj)
      res.json(obj);
    }
  );
};

exports.getArtists = async (req, res) => {};

exports.getRecommendedSongs = async (req, res) => {
  // res.json("Hello");
  const song = req.body.song;
  const options = {
    args: [song]
  };
  await ps.PythonShell.run(pathToPython_song, options, async (err, songs) => {
    if (err) {
      console.log(err);
    }
    // console.log(movies[0] + movies[1]);
    console.log(songs.length);
    var len = songs.length;

    console.log(songs);
    var obj = [];
    var i = 0;
    for (i = 0; i < 40; i = i + 4) {
      // song_id,title,release,artist_name

      var temp = {
        song_id: songs[i],
        title: songs[i + 1],
        release: songs[i + 2],
        artist_name: songs[i + 3]
      };

      obj.push(temp);
    }
    console.log(obj);
    res.json(obj);
    // res.json("done")
  });
};
