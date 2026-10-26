import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { LanguageType } from '../types';
import { translations, TranslationDictionary } from './translations';

interface LanguageContextType {
  lang: LanguageType;
  setLang: (lang: LanguageType) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<LanguageType>(() => {
    const saved = localStorage.getItem('hn_preferred_language') as LanguageType;
    if (saved === 'vi' || saved === 'en' || saved === 'fr') return saved;
    return 'vi';
  });

  const setLang = (newLang: LanguageType) => {
    setLangState(newLang);
    localStorage.setItem('hn_preferred_language', newLang);
    document.documentElement.lang = newLang;
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value: LanguageContextType = {
    lang,
    setLang,
    t: translations[lang] || translations.vi
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
