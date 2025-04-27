'use client';
import { Select, SelectItem } from '@heroui/react';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  const languages = [
    { code: 'en', label: 'English' },
    { code: 'ml', label: 'Malayalam' },
  ];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
  };

  return (
    <div>
      <Select
        className="w-[130px] mx-auto mt-6 text-white"
        variant='underlined'
        onChange={(e) => handleLanguageChange(e.target.value)}
        defaultSelectedKeys={[i18n.language]}
      >
        {languages.map((language) => (
          <SelectItem variant='underlined' key={language.code} value={language.code} style={{ color: '#000' }}>
            {language.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
