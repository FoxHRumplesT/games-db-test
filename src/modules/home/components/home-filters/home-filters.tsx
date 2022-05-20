import { FC, memo, useCallback } from "react";
import styles from './home-filters.module.sass';
import { ANIME_STATUSES, ANIME_TYPES } from "../../constants/home.constants";
import { AnimeFilters, AnimeGenre } from "../../entities/home.entities";
import { AnimeStatus, AnimeType } from "../../enums/home.enums";
import { useTranslation } from "react-i18next";

interface HomeFiltersProps {
  animeFilters: AnimeFilters;
  genres: AnimeGenre[];
  onSearchChange: (value: string) => void;
  onAnimeTypeChange: (type: AnimeType) => void;
  onAnimeStatusChange: (status: AnimeStatus) => void;
  onGenreClick: (genre: number) => void;
}
 
const HomeFilters: FC<HomeFiltersProps> = ({
  animeFilters,
  genres,
  onSearchChange,
  onAnimeTypeChange,
  onAnimeStatusChange,
  onGenreClick
}) => {

  const { t } = useTranslation();
  const isTagActive = useCallback((genre: number) => animeFilters?.genres?.includes(genre), [animeFilters?.genres]);

  return (
    <div className={styles.filters}>
      <div className={styles.searchInput}>
        <input 
          type="text" 
          className="form-control" 
          placeholder={t('home.filters.search_input_placeholder')}
          onChange={e => onSearchChange(e.target.value)}
        />
      </div>
      <div className={styles.typeSelector}>
        <select 
          className={`form-select ${styles.formSelect}`} 
          onChange={e => onAnimeTypeChange(e.target.value as AnimeType)}>
          <option value={undefined}>{t('home.filters.type_selector_default')}</option>
          {ANIME_TYPES.map(type => <option value={type}>{t(`home.filters.types.${type}`)}</option>)}
        </select>
      </div>
      <div className={styles.statusSelector}>
        <select 
          className={`form-select ${styles.formSelect}`}
          onChange={e => onAnimeStatusChange(e.target.value as AnimeStatus)}>
          <option value={undefined}>{t('home.filters.status_selector_default')}</option>
          {ANIME_STATUSES.map(status => <option value={status}>{t(`home.filters.status.${status}`)}</option>)}
        </select>
      </div>
      <div className={styles.genreSelector}>
        {genres.map(g => (
          <div 
            className={`${styles.genreTag} ${isTagActive(g.mal_id) && styles.active}`}
            onClick={() => onGenreClick(g.mal_id)}>{g.name}</div>
        ))}
      </div>
    </div>
  );
}
 
export default memo(HomeFilters);