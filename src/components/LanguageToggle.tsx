import React from 'react';
import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'ru' : 'en';
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/10"
      aria-label="Toggle language"
    >
      <Globe className="h-4 w-4" />
      <span className="text-sm font-medium">
        {i18n.language === 'en' ? 'RU' : 'EN'}
      </span>
    </button>
  );
};

export default LanguageToggle;