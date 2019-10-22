import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  recbooks: boolean = false;
  recmovies: boolean = false;
  recsongs: boolean = false;

  constructor(private http: HttpClient, private router: Router

  ) { }

  home() {
    console.log("home");
    this.router.navigate(['']);
  }

}
