import axios from "axios";
import { AnimeFilters, AnimeGenre, AnimeResponse } from "../entities/home.entities";

export const fetchAnime = (params: AnimeFilters): Promise<AnimeResponse> => {
  return axios.get('/anime', { params: { ...params, genres: params.genres?.join(',') } }).then(r => r.data);
};

export const fetchAnimeGenres = (): Promise<AnimeGenre[]> => {
  return axios.get('/genres/anime', { params: { filter: 'genres' }}).then(r => {
    const uniqueGenres = r.data.data.filter((value: AnimeGenre, index: number, self: AnimeGenre[]) =>
      index === self.findIndex((t) => (t.mal_id === value.mal_id))
    );
    return uniqueGenres;
  });
};
