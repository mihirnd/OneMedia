import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  Artists;
  Songs;
  Movies;
  Books;

  ngOnInit() {
  }

  findbooks(form: NgForm) {
    console.log(form.value.book_title);
    this.http.post("", {}).subscribe(res => {

    });
  }

  findsongs(form: NgForm) {
    console.log(form.value.song_title);
    this.http.post("http://localhost:8080/songs/recommendSongs", { song: form.value.song_title }).subscribe(res => {
      this.Songs = res;
    });
  }

  findartists(form: NgForm) {
    console.log(form.value.artist_title);
    this.http.post("http://localhost:8080/songs/recommendArtists", { artist: form.value.artist_title }).subscribe(res => {
      this.Artists = res;
    });
  }

  findmovies(form: NgForm) {
    console.log(form.value.movie_title);
    this.http.post("http://localhost:8080/movies/recommendMovies", { movie: form.value.movie_title }).subscribe(res => {
      this.Movies = res;
    });
  }
}
