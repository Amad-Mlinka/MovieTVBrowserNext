/*MediaGenre interface */
export interface genreInterface {
  id: number;
  name: string;
}

/*Media Interface*/
interface mediaInterface {
  id: number;
  poster_path: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  overview: string;
  original_language: string;
  genres: genreInterface[];
}

export interface movieInterface extends mediaInterface {
  adult: boolean;
  original_title: string;
  title: string;
  release_date: string;
  video: boolean;
}

export interface tvInterface extends mediaInterface {
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}

/*Media Images Interface*/
export interface imagesInterface {
  backdrops: imageInterface[];
  logos: imageInterface[];
  posters: imageInterface[];
  id: number;
}

export interface imageInterface {
  aspect_ratio: number;
  height: number;
  file_path: string;
  vote_average: number;
  vote_count: number;
  width: number;
}

/*Media Video Interface*/
export interface videoInterface {
  name: string;
  key: string;
  site: string;
  size: number;
  type: string;
  official: boolean;
  published_at: string;
  id: string;
}

/*Media reviews interface */
export interface reviewInterface{
  author:string,
  content:string,
  created_at:string,
  id:string;
  updated_at:string,
  url:string
}
