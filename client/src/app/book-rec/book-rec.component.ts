import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-book-rec",
  templateUrl: "./book-rec.component.html",
  styleUrls: ["./book-rec.component.css"]
})
export class BookRecComponent implements OnInit {
  Books: [];
  title: string;
  constructor(
    private http: HttpClient,
    private actroute: ActivatedRoute,
    private router: Router
  ) {
    this.actroute.params.subscribe(params => (this.title = params["bid"]));
    console.log(this.title);
    this.http
      .post("http://localhost:8080/books/recommendBooks", {
        book: this.title
      })
      .subscribe((res: any) => {
        // console.log(res);
        // this.recfinder.find.emit({rectype: 0, title: })
        this.Books = res;
        console.log(this.Books);
      });
  }

  ngOnInit() {}

  recommend(title: string) {
    this.Books = [];
    this.http
      .post("http://localhost:8080/books/recommendBooks", {
        book: this.title
      })
      .subscribe((res: any) => {
        this.Books = res;
        console.log(this.Books);
      });
    this.router.navigate(["bookrecommendation", title]);
  }
}
