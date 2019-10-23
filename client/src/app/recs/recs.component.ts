import { Component, OnInit } from "@angular/core";
import { RecsService } from "./recs.service";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-recs",
  templateUrl: "./recs.component.html",
  styleUrls: ["./recs.component.css"]
})
export class RecsComponent implements OnInit {
  rectype: number;
  title: string;
  Recoms: [];
  constructor(private recfinder: RecsService, private http: HttpClient) {
    console.log("cons");
    this.rectype = this.recfinder.rectype;
    this.title = this.recfinder.title;
    console.log(this.recfinder.rectype, this.title);
    this.http
      .post("http://localhost:8080/books/recommendBooks", {
        book: this.title
      })
      .subscribe((res: any) => {
        // console.log(res);
        // this.recfinder.find.emit({rectype: 0, title: })
        this.Recoms = res;
        console.log(this.Recoms);
      });
  }

  ngOnInit() {
    console.log("init");
  }
}
