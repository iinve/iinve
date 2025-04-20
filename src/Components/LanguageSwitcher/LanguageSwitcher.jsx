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
        className="w-[100px]"
        label="Language"
        style={{ colorScheme: 'dark' }}
        onChange={(e) => handleLanguageChange(e.target.value)}
        defaultSelectedKeys={[i18n.language]}
      >
        {languages.map((language) => (
          <SelectItem key={language.code} value={language.code}>
            {language.label}
          </SelectItem>
        ))}
      </Select>
    </div>
  );
}
