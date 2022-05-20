import { FC } from "react";
import styles from './loader.module.sass';

interface LoaderProps {
  
}
 
const Loader: FC<LoaderProps> = () => {
  return (
    <div className={styles.loader}>
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
 
export default Loader;