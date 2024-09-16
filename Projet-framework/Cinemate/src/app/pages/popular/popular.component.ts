import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../services/films.service';
import { FilmListed } from '../../type';
import { Title } from '@angular/platform-browser';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css',
})
export class PopularComponent {
  Films: FilmListed[] = [];

  constructor(private filmService: FilmsService, private titleService: Title) {}

  ngOnInit() {
    this.filmService.fetchPopularMovies().then((res) => {
      this.Films = res.results;
      this.titleService.setTitle(`Popular / Cinemate`);
    });
  }
}
