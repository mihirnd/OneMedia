const express = require('express')
var cors = require('cors');
// var conn = require('./dbConn')
// var mongoose = require('mongoose')
// var mongoURI = "mongodb+srv://mihir:mihir@cluster0-rfpzz.gcp.mongodb.net/BEProject?retryWrites=true&w=majority"
const bodyParser = require('body-parser');
const app = express();

const songsRouter = require('./routes/songs.routes')
const moviesRouter = require('./routes/movies.routes')
const booksRouter = require('./routes/books.routes')

// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log('Server running at port ' + port);
})

app.get('/', function (req, res) {
    console.log('/');
    res.json('Connected');
})

app.use('/songs', songsRouter)
app.use('/movies', moviesRouter)
app.use('/books', booksRouter)
