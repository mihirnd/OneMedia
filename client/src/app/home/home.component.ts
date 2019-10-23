import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { RecsService } from "../recs/recs.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private recfinder: RecsService,
    private router: Router
  ) {}
  Artists;
  Songs;
  Movies;
  Books;

  ngOnInit() {}

  findbooks(form: NgForm) {
    console.log(form.value.book_title);
    this.router.navigate(["bookrecommendation", form.value.book_title]);
  }

  findsongs(form: NgForm) {
    console.log(form.value.song_title);
    this.router.navigate(["songrecommendation", form.value.song_title]);
  }

  findartists(form: NgForm) {
    console.log(form.value.artist_title);
    this.router.navigate(["artistrecommendation", form.value.artist_title]);
  }

  findmovies(form: NgForm) {
    console.log(form.value.movie_title);
    this.router.navigate(["movierecommendation", form.value.movie_title]);
  }
}
