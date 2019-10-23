import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-movie-rec",
  templateUrl: "./movie-rec.component.html",
  styleUrls: ["./movie-rec.component.css"]
})
export class MovieRecComponent implements OnInit {
  ngOnInit() {}

  Movies: [];
  title: string;
  constructor(private http: HttpClient, private actroute: ActivatedRoute) {
    this.actroute.params.subscribe(params => (this.title = params["mid"]));
    // console.log(this.title);
    this.http
      .post("http://localhost:8080/movies/recommendMovies", {
        movie: this.title
      })
      .subscribe((res: any) => {
        // console.log(res);
        // this.recfinder.find.emit({rectype: 0, title: })
        this.Movies = res;
        console.log(this.Movies);
      });
  }
}
