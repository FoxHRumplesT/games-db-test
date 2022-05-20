import { Anime, AnimeFilters, AnimeGenre, Pagination } from "../../modules/home/entities/home.entities";

export interface GlobalState {
  ui: GlobalUiState;
  data: GlobalDataState;
}

export interface GlobalUiState {
  isLoadingAnimes: boolean;
  isLoadingMoreAnimes: boolean;
  animeFilters: AnimeFilters;
}
export interface GlobalDataState {
  animes: Anime[];
  animesPagination: Pagination;
  genres: AnimeGenre[];
}

export const initialState: GlobalState = {
  ui: {
    isLoadingAnimes: false,
    isLoadingMoreAnimes: false,
    animeFilters: {
      page: 1,
      limit: 5
    },
  },
  data: {
    animes: [],
    animesPagination: {} as Pagination,
    genres: [],
  },
}
