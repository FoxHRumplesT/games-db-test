import { FC, memo } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Anime } from "../../entities/home.entities";
import styles from './home-anime-list.module.sass';

interface HomeAnimeListProps {
  animes: Anime[];
}
 
const HomeAnimeList: FC<HomeAnimeListProps> = ({
  animes
}) => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleCardClick = (animeId: number) => {
    navigate(`/anime/${animeId}`);
  };

  return (
    <div className={styles.animeList}>
      {animes.length ? (
        animes.map(anime => (
          <div 
            key={`home-game-list-anime-${anime.mal_id}`} 
            className={styles.animeCard} 
            onClick={() => handleCardClick(anime.mal_id)}>
            <img className={styles.img} src={anime.images.jpg.image_url} alt={anime.title} />
            <div className={styles.info}>
              <div className={`${styles.name} h6`}>{anime.title}</div>
              <div className={styles.type}>{t(`home.filters.types.${anime.type.toLowerCase()}`)}</div>
              <div className={styles.score}>{t('home.score')} {anime.score}</div>
              <div className={styles.episodeDuration}>{t('home.duration')} {anime.duration}</div>
            </div>
          </div>
        ))
      ) : (
        <h2>{t('home.no_results')}</h2>
      )}
    </div>
  );
}
 
export default memo(HomeAnimeList);