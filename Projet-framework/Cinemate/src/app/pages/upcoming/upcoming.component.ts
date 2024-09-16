import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsService } from '../../services/films.service';
import { FilmListed } from '../../type';
import { RouterModule } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-upcoming',
  standalone: true,
  imports: [CommonModule, RouterModule, MovieCardComponent],
  templateUrl: './upcoming.component.html',
  styleUrl: './upcoming.component.css',
})
export class UpcomingComponent {
  Films: FilmListed[] = [];

  constructor(private filmService: FilmsService, private titleService: Title) {}

  ngOnInit() {
    this.filmService.fetchUpcomingMovies().then((res) => {
      this.Films = res.results;
      this.titleService.setTitle(`Upcoming / Cinemate`);
    });
  }
}
