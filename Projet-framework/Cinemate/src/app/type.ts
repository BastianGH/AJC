export type Films = FilmListed[];

export type FilmListed = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
};

export type FilmDetails = {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string;
  genre_ids: number[];
  vote_average: number;
  vote_count: number;
  release_date: string;
};

export type Film = {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  genres: any[];
  vote_average: number;
  vote_count: number;
  runtime: number;
  budget: number;
  revenue: number;
  release_date: string;
  imdb_id: number;
};
