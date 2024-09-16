import { Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { PopularComponent } from './pages/popular/popular.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { MovieDetailsComponent } from './pages/movie-details/movie-details.component';
import { SearchResultComponent } from './pages/search-result/search-result.component';

export const routes: Routes = [
  { path: 'movies', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'movies/popular', component: PopularComponent },
  { path: 'movies/top', component: TopRatedComponent },
  { path: 'movies/upcoming', component: UpcomingComponent },
  { path: 'movie/:id', component: MovieDetailsComponent },
  { path: 'search', component: SearchResultComponent },
];
