import { FC, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from './anime-detail.module.sass';
import { Anime } from "../../../home/entities/home.entities";
import { fetchAnimeById } from "../../services/anime.services";

interface AnimeDetailProps {
  
}
 
const AnimeDetail: FC<AnimeDetailProps> = () => {

  const { id } = useParams();
  const [anime, setAnime] = useState<Anime>();

  useEffect(() => {
    if (id && !isNaN(Number(id))) {
    fetchAnimeById(+id)
      .then(r => {
        setAnime(r);
      })
      .catch(() => {});
    }
  }, [id]);

  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={anime?.images.jpg.large_image_url} alt={anime?.title} />
      <h2>Más cositas del api</h2>
    </div>
  );
}
 
export default AnimeDetail;