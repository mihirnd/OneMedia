import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HomeComponent } from "./home/home.component";
import { RecsComponent } from "./recs/recs.component";
import { BookRecComponent } from "./book-rec/book-rec.component";
import { SongRecComponent } from "./song-rec/song-rec.component";
import { ArtistRecComponent } from "./artist-rec/artist-rec.component";
import { MovieRecComponent } from "./movie-rec/movie-rec.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RecsComponent,
    BookRecComponent,
    SongRecComponent,
    ArtistRecComponent,
    MovieRecComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
