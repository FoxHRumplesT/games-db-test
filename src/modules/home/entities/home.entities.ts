import { AnimeStatus, AnimeType } from "../enums/home.enums";

export interface AnimeResponse {
  pagination: Pagination;
  data: Anime[];
}

export interface Pagination {
  last_visible_page: number;
  has_next_page: boolean;
  current_page: number;
  items: PaginationItems;
}

export interface PaginationItems {
  count: number;
  total: number;
  per_page: number;
}

export interface Anime {
  mal_id: number;
  images: AnimeImages;
  title: string;
  type: string;
  source: string;
  episodes: number;
  status: string;
  airing: boolean;
  duration: string;
  rating: string;
  score: number;
  rank: number;
  synopsis: string;
  year: number;
  genres: AnimeGenre[];
}

export interface AnimeGenre {
  mal_id: number;
  type?: string;
  name: string;
  url: string;
  count?: number;
}

export interface AnimeImages {
  jpg: Jpg;
}

export interface Jpg {
  image_url: string;
  small_image_url: string;
  large_image_url: string;
}

export interface AnimeFilters {
  q?: string;
  page?: number;
  limit?: number;
  type?: AnimeType;
  status?: AnimeStatus;
  genres?: number[];
}
