import { FC, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import styles from './home.module.sass';
import { fetchAnime, fetchAnimeGenres } from "../../services/home.services";
import { globalActions } from "../../../../config/store/global.slice";
import { animesPaginationSelector, animesSelector, genresSelector, globalUiSelector } from "../../../../config/store/global.selectors";
import { AnimeStatus, AnimeType } from "../../enums/home.enums";
import { debounce } from "../../../../utils/debounce";
import Loader from "../../../../components/loader/loader";
import HomeFilters from "../../components/home-filters/home-filters";
import HomeAnimeList from "../../components/home-anime-list/home-anime-list";

interface HomeProps {}
 
const Home: FC<HomeProps> = () => {

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { isLoadingAnimes, isLoadingMoreAnimes, animeFilters } = useSelector(globalUiSelector);
  const animes = useSelector(animesSelector);
  const animesPagination = useSelector(animesPaginationSelector);
  const genres = useSelector(genresSelector);

  const handleSelectGenreTag = useCallback((genre: number) => {
    const genres = animeFilters?.genres ? [...animeFilters.genres]: [];
    if (genres.includes(genre)) {
      const indexToRemove = genres.findIndex(t => t === genre);
      genres.splice(indexToRemove, 1);
    } else {
      genres.push(genre);
    }
    dispatch(globalActions.setAnimeFilters({ genres }));
  }, [dispatch, animeFilters?.genres]);

  const handleSearchInput = debounce((query: string) => {
    dispatch(globalActions.setAnimeFilters({ q: query }));
  }, 1000);

  const handleAnimeTypeChange = useCallback((type: AnimeType) => {
    dispatch(globalActions.setAnimeFilters({ type }));
  }, [dispatch]);

  const handleAnimeStatusChange = useCallback((status: AnimeStatus) => {
    dispatch(globalActions.setAnimeFilters({ status }));
  }, [dispatch]);

  const handleChangePageSize = useCallback((pageSize: number) => {
    dispatch(globalActions.setAnimeFilters({ limit: pageSize }));
  }, [dispatch]);

  const handleLoadMoreAnimes = () => {
    dispatch(globalActions.setIsLoadingMoreAnimes(true));
    fetchAnime({ ...animeFilters, page: animesPagination.current_page + 1 })
      .then((animesResponse) => {
        dispatch(globalActions.setLoadMoreAnimesData(animesResponse));
      })
      .catch(error => {}) //Show notification or something
      .finally(() => dispatch(globalActions.setIsLoadingMoreAnimes(false)));
  }

  useEffect(() => {
    fetchAnimeGenres()
      .then(genresResponse => dispatch(globalActions.setAnimeGenres(genresResponse)))
      .catch(error => {}); //Show notification or something
  }, [dispatch]);

  useEffect(() => {
    dispatch(globalActions.setIsLoadingAnimes(true));
    fetchAnime({ ...animeFilters })
      .then((animesResponse) => {
        dispatch(globalActions.setAnimesData(animesResponse));
      })
      .catch(error => {}) //Show notification or something
      .finally(() => dispatch(globalActions.setIsLoadingAnimes(false)));
  }, [dispatch, animeFilters]);

  return (
    <div className={styles.wrapper}>
      <HomeFilters
        animeFilters={animeFilters}
        genres={genres}
        onGenreClick={handleSelectGenreTag}
        onSearchChange={handleSearchInput}
        onAnimeTypeChange={handleAnimeTypeChange}
        onAnimeStatusChange={handleAnimeStatusChange}
      />
      <div className={styles.content}>
        {isLoadingAnimes ? (
          <Loader />
        ) : (
          <>
            <HomeAnimeList animes={animes} />
            {animesPagination.has_next_page && (
              <div className={styles.footer}>
                <button 
                  type="button"
                  disabled={isLoadingMoreAnimes}
                  className={`btn btn-primary ${styles.button}`} 
                  onClick={handleLoadMoreAnimes}>
                    {!isLoadingMoreAnimes ? t(`home.load_button_text`) : t(`shared.loading`)}
                </button>
                <select 
                  value={animeFilters?.limit}
                  className={`form-select ${styles.limitSelector}`}
                  onChange={e => handleChangePageSize(+e.target.value)}>
                  <option value="5">5</option>
                  <option value="10">10</option>
                  <option value="15">15</option>
                  <option value="20">20</option>
                  <option value="25">25</option>
                </select>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
 
export default Home;