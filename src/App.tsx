import { useMemo, useState } from 'react';

import { copyByLocale, type Locale } from './content/site-content';
import { useLatestArticle } from './hooks/use-latest-article';
import { DigitalBrutalismLanding } from './versions/digital-brutalism-landing';

const App = (): JSX.Element => {
  const [locale, setLocale] = useState<Locale>('en');

  const copy = useMemo(() => copyByLocale[locale], [locale]);
  const { article, loading } = useLatestArticle(locale, copy);

  return (
    <div className="app-shell">
      <DigitalBrutalismLanding copy={copy} article={article} loading={loading} locale={locale} onLocaleChange={setLocale} />
    </div>
  );
};

export default App;
