// var mongo = require('mongodb');
// var conn = require('../dbConn');

var ps = require('python-shell');
const path = require('path');
const pathToPython = path.join(__dirname, '../book_r.py');
const spawn = require("child_process").spawn;


exports.getRec = (req, res) => {
    res.json("Hello");
}



exports.getRecommendedBooks = async (req, res) => {

    const book = req.body.book;
    const options = {
        args: [
            book
        ]
    };
    await ps.PythonShell.run(pathToPython, options, async (err, books) => {

        if (err) {
            console.log(err);
        }
        // console.log(movies[0] + movies[1]);
        console.log(books.length)
        console.log(books)

        var len = books.length
        var i = 0;
        
        var obj = []
        var i = 0
        for(i=0;i<50;i=i+5) {

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
                "id": books[i],
                "title": books[i+1],
                "author": books[i+2],
                "year_of_publication": books[i+3],
                "publisher": books[i+4],
            }
// id,title,author,year_of_publication,publisher
// 


            obj.push(temp);
        }
        console.log(obj)
        res.json(obj)
    });
}