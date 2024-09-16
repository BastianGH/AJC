import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, Observable } from 'rxjs';
import { FilmListed, Films, Film } from '../type';

type FilmsApiResponse = {
  results: Films;
};

type FilmApiResponse = Film;

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiToken =
    'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OWQyNzE3NDBhZGRjYzc3NGNiOGFiMDhiZmFiMDQ1MSIsIm5iZiI6MTcyMjkyOTM5OS42NTI3NTMsInN1YiI6IjY2YjFjZWU0NjhjNGE1MTMyMGM2MWQxZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.y9ALJ2ctv-5gkULLKEvASaIgtRTIzbvfVr64dpyUSTM';
  private options = {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${this.apiToken}`,
    },
  };

  constructor(private http: HttpClient) {}

  async fetchMovies() {
    let observable = this.http.get(
      `${this.apiUrl}movie/now_playing?language=en-US&page=1`,
      this.options
    ) as Observable<FilmsApiResponse>;

    let result = await firstValueFrom(observable);
    // console.log(result);

    return result;
  }

  async fetchPopularMovies() {
    let observable = this.http.get(
      `${this.apiUrl}movie/popular?language=en-US&page=1`,
      this.options
    ) as Observable<FilmsApiResponse>;

    let result = await firstValueFrom(observable);

    return result;
  }

  async fetchTopMovies() {
    let observable = this.http.get(
      `${this.apiUrl}movie/top_rated?language=en-US&page=1`,
      this.options
    ) as Observable<FilmsApiResponse>;

    let result = await firstValueFrom(observable);

    return result;
  }

  async fetchUpcomingMovies() {
    let observable = this.http.get(
      `${this.apiUrl}movie/upcoming?language=en-US&page=1`,
      this.options
    ) as Observable<FilmsApiResponse>;

    let result = await firstValueFrom(observable);

    return result;
  }

  async getMovie(id: number) {
    let observable = this.http.get(
      `${this.apiUrl}movie/${id}?language=en-US`,
      this.options
    ) as Observable<FilmApiResponse>;

    let result = await firstValueFrom(observable);

    return result;
  }

  async searchMovieByName(title: string) {
    let observable = this.http.get(
      `${this.apiUrl}search/movie?query=${title}`,
      this.options
    ) as Observable<FilmsApiResponse>;

    let result = await firstValueFrom(observable);

    return result;
  }
}
