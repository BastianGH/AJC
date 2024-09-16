import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { FilmsService } from '../../services/films.service';
import { FilmListed } from '../../type';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './search-result.component.html',
  styleUrl: './search-result.component.css',
})
export class SearchResultComponent {
  query: string | null = '';
  Films: FilmListed[] = [];

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmsService,
    private titleService: Title
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params) => {
      this.query = params.get('q');

      if (this.query) {
        this.filmService.searchMovieByName(this.query).then((res) => {
          this.titleService.setTitle(
            `Search result for ${this.query} / Cinemate`
          );
          return (this.Films = res.results);
        });
      }
    });
  }
}
