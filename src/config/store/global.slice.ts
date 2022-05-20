import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Anime, AnimeFilters, AnimeGenre, AnimeResponse } from '../../modules/home/entities/home.entities';
import { initialState } from './global.state';

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    setAnimesData: (state, { payload }: PayloadAction<AnimeResponse>) => {
      state.data.animes = payload.data;
      state.data.animesPagination = payload.pagination;
    },
    setLoadMoreAnimesData: (state, { payload }: PayloadAction<AnimeResponse>) => {
      state.data.animes = [...state.data.animes, ...payload.data];
      state.data.animesPagination = payload.pagination;
    },
    setMoreAnimes: (state, { payload }: PayloadAction<Anime[]>) => {
      state.data.animes = [...state.data.animes, ...payload];
    },
    setAnimeGenres: (state, { payload }: PayloadAction<AnimeGenre[]>) => {
      state.data.genres = payload;
    },
    setAnimeFilters: (state, { payload }: PayloadAction<AnimeFilters>) => {
      state.ui.animeFilters = { ...state.ui.animeFilters, ...payload };
    },
    setIsLoadingAnimes: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isLoadingAnimes = payload;
    },
    setIsLoadingMoreAnimes: (state, { payload }: PayloadAction<boolean>) => {
      state.ui.isLoadingMoreAnimes = payload;
    }
  },
});

export const globalActions = globalSlice.actions;
export default globalSlice.reducer;
