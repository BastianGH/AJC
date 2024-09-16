import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../services/films.service';
import { FilmListed } from '../../type';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-top-rated',
  standalone: true,
  imports: [CommonModule, RouterModule, MovieCardComponent],
  templateUrl: './top-rated.component.html',
  styleUrl: './top-rated.component.css',
})
export class TopRatedComponent {
  Films: FilmListed[] = [];

  constructor(private filmService: FilmsService, private titleService: Title) {}

  ngOnInit() {
    this.filmService.fetchTopMovies().then((res) => {
      this.Films = res.results;
      this.titleService.setTitle(`Top Rated / Cinemate`);
    });
  }
}
