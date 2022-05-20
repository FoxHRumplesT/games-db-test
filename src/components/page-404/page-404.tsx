import { FC } from "react";
import styles from './page-404.module.sass';
import bg404Img from '../../assets/img/404.jpg';

interface Page404Props {
  
}
 
const Page404: FC<Page404Props> = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.img} src={bg404Img} alt="404" />
    </div>
  );
}
 
export default Page404;