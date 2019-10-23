import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-artist-rec",
  templateUrl: "./artist-rec.component.html",
  styleUrls: ["./artist-rec.component.css"]
})
export class ArtistRecComponent implements OnInit {
  ngOnInit() {}

  Artists: [];
  title: string;
  constructor(
    private http: HttpClient,
    private actroute: ActivatedRoute,
    private router: Router
  ) {
    this.actroute.params.subscribe(params => (this.title = params["aid"]));
    console.log(this.title);
    this.http
      .post("http://localhost:8080/songs/recommendArtists", {
        artist: this.title
      })
      .subscribe((res: any) => {
        this.Artists = res;
        console.log(this.Artists);
      });
  }

  recommend(title: string) {
    this.Artists = [];
    this.http
      .post("http://localhost:8080/songs/recommendArtists", {
        artist: this.title
      })
      .subscribe((res: any) => {
        this.Artists = res;
        console.log(this.Artists);
      });
    this.router.navigate(["artistrecommendation", title]);
  }
}
