import axios from "axios"
import { Anime } from "../../home/entities/home.entities";

export const fetchAnimeById = (animeId: number): Promise<Anime> => {
  return axios.get(`/anime/${animeId}`).then(r => r.data.data);
}
