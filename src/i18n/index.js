import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import pt from './locales/default.json';
import en from './locales/default.en.json';
import homePt from '../components/Home/locales/default.json';
import homeEn from '../components/Home/locales/default.en.json';
import augustinePt from '../components/lighthouses/Augustine/locales/default.json';
import augustineEn from '../components/lighthouses/Augustine/locales/default.en.json';
import herculesPt from '../components/lighthouses/Hercules/locales/default.json';
import herculesEn from '../components/lighthouses/Hercules/locales/default.en.json';
import lindauPt from '../components/lighthouses/Lindau/locales/default.json';
import lindauEn from '../components/lighthouses/Lindau/locales/default.en.json';
import peggysPt from '../components/lighthouses/Peggys/locales/default.json';
import peggysEn from '../components/lighthouses/Peggys/locales/default.en.json';

pt['pt-BR'].home = homePt['pt-BR'];
pt['pt-BR'].lighthouses.augustine = augustinePt;
pt['pt-BR'].lighthouses.hercules = herculesPt;
pt['pt-BR'].lighthouses.lindau = lindauPt;
pt['pt-BR'].lighthouses.peggys = peggysPt;
en['en'].home = homeEn['en'];
en['en'].lighthouses.augustine = augustineEn;
en['en'].lighthouses.hercules = herculesEn;
en['en'].lighthouses.lindau = lindauEn;
en['en'].lighthouses.peggys = peggysEn;

const options = {
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
  
  // lng: 'en',

  debug: true,

  resources: {
    pt: {
      common: pt['pt-BR'],
    },
    en: {
      common: en.en,
    },
  },

  fallbackLng: 'en',

  ns: ['common'],

  defaultNS: 'common',

  react: {
    wait: false,
    bindI18n: 'languageChanged loaded',
    bindStore: 'added removed',
    nsMode: 'default'
  },
};

i18n
  .use(LanguageDetector)
  .init(options);


export default i18n;