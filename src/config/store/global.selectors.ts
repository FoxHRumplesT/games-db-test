import { createSelector } from "@reduxjs/toolkit";
import { GlobalDataState, GlobalUiState } from "./global.state";
import { RootState } from "./store";

export const globalUiSelector = createSelector(
  (state: RootState) => state.global.ui,
  (state: GlobalUiState) => state
);

export const animesSelector = createSelector(
  (state: RootState) => state.global.data,
  (state: GlobalDataState) => state.animes
);

export const animesPaginationSelector = createSelector(
  (state: RootState) => state.global.data,
  (state: GlobalDataState) => state.animesPagination
);

export const genresSelector = createSelector(
  (state: RootState) => state.global.data,
  (state: GlobalDataState) => state.genres
);