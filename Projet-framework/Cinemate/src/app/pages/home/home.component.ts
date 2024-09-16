import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../services/films.service';
import { FilmListed } from '../../type';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  Films: FilmListed[] = [];

  constructor(private filmService: FilmsService, private titleService: Title) {}

  ngOnInit() {
    this.filmService.fetchMovies().then((res) => {
      this.Films = res.results;
      this.titleService.setTitle(`Home / Cinemate`);
    });
  }
}
