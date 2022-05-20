import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { EN } from "./en";
import { ES } from "./es";

export default i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: EN,
      es: ES
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: true
    }
  });
