// var mongo = require('mongodb');
// var conn = require('../dbConn');

var ps = require('python-shell');
const path = require('path');
const pathToPython_song = path.join(__dirname, '../song_recommender.py');

exports.getRecommendedArtists = (req, res) => {
    res.json("Hello");
}

exports.getArtists = (req, res) => {
    
}

exports.getRecommendedSongs = (req, res) => {
    res.json("Hello");
    const movie = req.body.song;
    const options = {
        args: [
            song
        ]
    };
    await ps.PythonShell.run(pathToPython, options, async (err, songs) => {

        if (err) {
            console.log(err);
        }
        // console.log(movies[0] + movies[1]);
        console.log(songs.length)
        var len = songs.length
        
        console.log(movies)
        var obj = []
        var i = 0
        for(i=0;i<80;i=i+8) {

            var temp = {
                "id": movies[i],
                "genre": movies[i+1],
                "keywords": movies[i+2].toString().split(" "),
                "summary": movies[i+3],
                "tagline": movies[i+4],
                "title": movies[i+5],
                "cast": movies[i+6],
                "director": movies[i+7]

            }


            obj.push(temp);
        }
        console.log(obj)
        res.json(obj)
    });

}

