import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-song-rec",
  templateUrl: "./song-rec.component.html",
  styleUrls: ["./song-rec.component.css"]
})
export class SongRecComponent implements OnInit {
  Song: [];
  title: string;
  constructor(
    private http: HttpClient,
    private actroute: ActivatedRoute,
    private router: Router
  ) {
    this.actroute.params.subscribe(params => (this.title = params["sid"]));
    console.log(this.title);
    this.http
      .post("http://localhost:8080/songs/recommendSongs", {
        song: this.title
      })
      .subscribe((res: any) => {
        // console.log(res);
        // this.recfinder.find.emit({rectype: 0, title: })
        this.Song = res;
        console.log(this.Song);
      });
  }

  ngOnInit() {}

  recommend(title: string) {
    this.Song = [];
    this.http
      .post("http://localhost:8080/songs/recommendSongs", {
        book: this.title
      })
      .subscribe((res: any) => {
        this.Song = res;
        console.log(this.Song);
      });
    this.router.navigate(["bookrecommendation", title]);
  }
}
