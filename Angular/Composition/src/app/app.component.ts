import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FilmDisplayComponent } from './film-display/film-display.component';
import { FilmEditComponent } from './film-edit/film-edit.component';
import { Film, movies as films } from '../assets/movie_dataset__394__0';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    FilmDisplayComponent,
    FilmEditComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Composition';
  movies: Film[] = films;

  editing = false;
  selectedFilm = {};

  selectedMovie(film: Film) {
    this.editing = true;
    this.selectedFilm = film;
  }
  editedMovie(movie: Partial<Film>) {
    console.log(movie);
  }
}
