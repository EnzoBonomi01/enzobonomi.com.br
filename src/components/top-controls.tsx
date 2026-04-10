import type { ChangeEvent } from 'react';

import { localeOptions, type Locale, type LocalizedCopy } from '../content/site-content';

interface TopControlsProps {
  locale: Locale;
  copy: LocalizedCopy;
  onLocaleChange: (locale: Locale) => void;
}

export const TopControls = ({ locale, copy, onLocaleChange }: TopControlsProps): JSX.Element => {
  const handleLocaleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onLocaleChange(event.target.value as Locale);
  };

  return (
    <div className="language-controls" aria-label="Landing controls">
      <div className="control-group">
        <label htmlFor="language-select">{copy.ui.language}</label>
        <select id="language-select" value={locale} onChange={handleLocaleChange}>
          {localeOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
