import { FC, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import styles from './header.module.sass';

interface HeaderProps {
  
}
 
const Header: FC<HeaderProps> = () => {

  const { i18n } = useTranslation();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLanguageChange = useCallback((language: string) => {
    i18n.changeLanguage(language);
  }, [i18n]);

  return (
    <div className={styles.header}>
      <div className={styles.logo} onClick={() => navigate('/')}>
        <img className={styles.img} src="https://houm.com/static/brandImage/houmLogo.svg" alt="Houm logo" />
        <span className={styles.text}>{t(`shared.title`)}</span>
      </div>
      <div className={styles.languageSelector}>
        <select 
          className={`form-select ${styles.formSelect}`} 
          value={i18n.language} 
          onChange={(e) => handleLanguageChange(e.target.value)}>
          <option value="en">EN</option>
          <option value="es">ES</option>
        </select>
      </div>
    </div>
  );
}
 
export default Header;