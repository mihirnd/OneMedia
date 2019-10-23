import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { RecsComponent } from "./recs/recs.component";
import { BookRecComponent } from "./book-rec/book-rec.component";
import { SongRecComponent } from "./song-rec/song-rec.component";
import { ArtistRecComponent } from "./artist-rec/artist-rec.component";
import { MovieRecComponent } from "./movie-rec/movie-rec.component";

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "bookrecommendation/:bid", component: BookRecComponent },
  { path: "songrecommendation/:sid", component: SongRecComponent },
  { path: "artistrecommendation/:aid", component: ArtistRecComponent },
  { path: "movierecommendation/:mid", component: MovieRecComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
