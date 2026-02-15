import { useEffect, useMemo, useState, type CSSProperties } from "react";
import { profile } from "../data/profile";
import { fetchLatestSubstackPost, type LatestSubstackPost } from "../services/substack";

type Locale = "pt-BR" | "es" | "en";
type DesignMode = "brutalist" | "signal" | "paper";
type ThemeVars = CSSProperties & Record<`--${string}`, string>;

type TranslationSet = {
  languageLabel: string;
  designLabel: string;
  heroTitle: string;
  currentTitle: string;
  currentRolePrefix: string;
  companyLabel: string;
  currentDescription: string;
  latestTitle: string;
  latestLoading: string;
  latestUnavailable: string;
  latestRead: string;
  socialTitle: string;
  socialVisit: string;
  tickerLead: string;
  aiNote: string;
};

const copyByLocale: Record<Locale, TranslationSet> = {
  "pt-BR": {
    languageLabel: "Idioma",
    designLabel: "Modo visual",
    heroTitle: "ENZO BONOMI",
    currentTitle: "Onde estou agora",
    currentRolePrefix: "Analista de Projetos na ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "Atuo em ideação, definição de escopo e estratégia de desenvolvimento para clientes de diferentes setores, com repertório em indústria, varejo e financeiro.",
    latestTitle: "Último artigo no Substack",
    latestLoading: "Carregando artigo mais recente...",
    latestUnavailable: "Não foi possível carregar o artigo agora.",
    latestRead: "Ler artigo",
    socialTitle: "Canais de contato",
    socialVisit: "Acessar",
    tickerLead: "Produto, estratégia, execução e comunicação sem ruído.",
    aiNote: "Layout experimental: três direções visuais disruptivas no mesmo portfolio."
  },
  es: {
    languageLabel: "Idioma",
    designLabel: "Modo visual",
    heroTitle: "ENZO BONOMI",
    currentTitle: "Dónde estoy ahora",
    currentRolePrefix: "Analista de Proyectos en ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "Actúo en ideación, alcance y estrategia de desarrollo para clientes de distintos sectores, con experiencia en industria, retail y finanzas.",
    latestTitle: "Último artículo en Substack",
    latestLoading: "Cargando el artículo más reciente...",
    latestUnavailable: "No se pudo cargar el artículo ahora.",
    latestRead: "Leer artículo",
    socialTitle: "Canales de contacto",
    socialVisit: "Abrir",
    tickerLead: "Producto, estrategia, ejecución y comunicación sin ruido.",
    aiNote: "Layout experimental: tres direcciones visuales disruptivas en el mismo portfolio."
  },
  en: {
    languageLabel: "Language",
    designLabel: "Visual mode",
    heroTitle: "ENZO BONOMI",
    currentTitle: "Where I am now",
    currentRolePrefix: "Project Analyst at ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "I work on ideation, scope definition, and delivery strategy for clients across multiple industries, with experience in industrial, retail, and financial sectors.",
    latestTitle: "Latest Substack article",
    latestLoading: "Loading the latest article...",
    latestUnavailable: "Could not load the article right now.",
    latestRead: "Read article",
    socialTitle: "Contact channels",
    socialVisit: "Visit",
    tickerLead: "Product, strategy, execution, and communication with zero noise.",
    aiNote: "Experimental layout: three disruptive visual directions in one portfolio."
  }
};

const localeButtons: Array<{ key: Locale; label: string; flag: string }> = [
  { key: "pt-BR", label: "PT", flag: "BR" },
  { key: "es", label: "ES", flag: "ES" },
  { key: "en", label: "EN", flag: "US" }
];

const modeButtons: Array<{ key: DesignMode; label: string }> = [
  { key: "brutalist", label: "Brutalist Grid" },
  { key: "signal", label: "Signal Room" },
  { key: "paper", label: "Paper Clash" }
];

const themeByMode: Record<DesignMode, ThemeVars> = {
  brutalist: {
    "--page-bg": "#070707",
    "--panel-bg": "#101010",
    "--text-main": "#f8f8f3",
    "--text-muted": "#cfcec4",
    "--line": "#f4eb41",
    "--line-soft": "#333333",
    "--accent": "#ff4d1f",
    "--accent-soft": "#243fff",
    "--chip-bg": "#141414",
    "--chip-active-bg": "#f4eb41",
    "--chip-active-text": "#0b0b0b",
    "--hero-shadow": "#ff4d1f"
  },
  signal: {
    "--page-bg": "#030d12",
    "--panel-bg": "#071923",
    "--text-main": "#e7feff",
    "--text-muted": "#a3c0cb",
    "--line": "#31ffb7",
    "--line-soft": "#17506a",
    "--accent": "#49d1ff",
    "--accent-soft": "#beff23",
    "--chip-bg": "#0d2431",
    "--chip-active-bg": "#31ffb7",
    "--chip-active-text": "#01271b",
    "--hero-shadow": "#31ffb7"
  },
  paper: {
    "--page-bg": "#f8f0de",
    "--panel-bg": "#fff9ed",
    "--text-main": "#18110f",
    "--text-muted": "#5b4a43",
    "--line": "#2f3dbf",
    "--line-soft": "#b58f7f",
    "--accent": "#ff6b2c",
    "--accent-soft": "#1e8f64",
    "--chip-bg": "#f2e7d0",
    "--chip-active-bg": "#2f3dbf",
    "--chip-active-text": "#f4f2ff",
    "--hero-shadow": "#ff6b2c"
  }
};

const allowedSocialLabels = new Set(["Substack", "LinkedIn", "Twitter / X", "YouTube"]);

const dateLocaleByLanguage: Record<Locale, string> = {
  "pt-BR": "pt-BR",
  es: "es-ES",
  en: "en-US"
};

function formatArticleDate(dateISO: string, locale: Locale): string {
  const date = new Date(dateISO);
  if (Number.isNaN(date.getTime())) {
    return dateISO;
  }

  return new Intl.DateTimeFormat(dateLocaleByLanguage[locale], {
    day: "2-digit",
    month: "long",
    year: "numeric"
  }).format(date);
}

export function FinalPortfolio() {
  const [locale, setLocale] = useState<Locale>("pt-BR");
  const [mode, setMode] = useState<DesignMode>("brutalist");
  const [latestPost, setLatestPost] = useState<LatestSubstackPost | null>(null);
  const [isLoadingPost, setIsLoadingPost] = useState<boolean>(true);
  const [postLoadFailed, setPostLoadFailed] = useState<boolean>(false);

  const t = useMemo(() => copyByLocale[locale], [locale]);
  const themeVars = useMemo(() => themeByMode[mode], [mode]);
  const tickerText = `${t.tickerLead} ${t.heroTitle} ${t.tickerLead}`;

  useEffect(() => {
    let isMounted = true;

    async function loadPost() {
      setIsLoadingPost(true);
      setPostLoadFailed(false);

      try {
        const post = await fetchLatestSubstackPost();
        if (!isMounted) {
          return;
        }

        if (!post) {
          setPostLoadFailed(true);
          return;
        }

        setLatestPost(post);
      } catch {
        if (isMounted) {
          setPostLoadFailed(true);
        }
      } finally {
        if (isMounted) {
          setIsLoadingPost(false);
        }
      }
    }

    void loadPost();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <main
      style={themeVars}
      className="relative min-h-screen overflow-hidden bg-[var(--page-bg)] text-[var(--text-main)] [transition:background-color_360ms_ease,color_360ms_ease]"
    >
      <style>{`
        @keyframes tickerX {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }

        @keyframes floatY {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute -left-16 top-10 h-56 w-56 rounded-full bg-[var(--accent)] blur-[80px]" />
        <div className="absolute -right-20 bottom-16 h-64 w-64 rounded-full bg-[var(--accent-soft)] blur-[90px]" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <header className="mb-10 grid gap-4 border-2 border-[var(--line)] bg-[var(--panel-bg)] p-4 shadow-[10px_10px_0_var(--line-soft)] lg:grid-cols-2">
          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">{t.languageLabel}</p>
            <div className="flex flex-wrap gap-2">
              {localeButtons.map((item) => {
                const active = locale === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setLocale(item.key)}
                    aria-pressed={active}
                    className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] transition ${
                      active
                        ? "border-[var(--line)] bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]"
                        : "border-[var(--line-soft)] bg-[var(--chip-bg)] text-[var(--text-main)] hover:border-[var(--line)]"
                    }`}
                  >
                    <span aria-hidden="true" className="mr-1.5">
                      {item.flag}
                    </span>
                    <span>{item.label}</span>
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <p className="mb-2 text-[10px] uppercase tracking-[0.24em] text-[var(--text-muted)]">{t.designLabel}</p>
            <div className="flex flex-wrap gap-2">
              {modeButtons.map((item) => {
                const active = mode === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setMode(item.key)}
                    aria-pressed={active}
                    className={`border px-3 py-1 text-xs font-semibold uppercase tracking-[0.11em] transition ${
                      active
                        ? "border-[var(--line)] bg-[var(--chip-active-bg)] text-[var(--chip-active-text)]"
                        : "border-[var(--line-soft)] bg-[var(--chip-bg)] text-[var(--text-main)] hover:border-[var(--line)]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="relative border-2 border-[var(--line)] bg-[var(--panel-bg)] p-5 shadow-[10px_10px_0_var(--line-soft)]">
            <p className="mb-3 inline-block border border-[var(--line-soft)] bg-[var(--chip-bg)] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[var(--text-muted)]">
              Product + Delivery + Communication
            </p>
            <h1 className="text-[clamp(2.2rem,10vw,6rem)] font-black uppercase leading-[0.86] tracking-tight [text-shadow:6px_6px_0_var(--hero-shadow)]">
              {t.heroTitle}
            </h1>
            <p className="mt-6 max-w-2xl border-l-4 border-[var(--accent)] pl-3 text-sm leading-relaxed text-[var(--text-muted)]">
              {t.currentDescription}
            </p>
          </div>

          <div className="relative border-2 border-[var(--line)] bg-[var(--panel-bg)] p-3 shadow-[10px_10px_0_var(--line-soft)] [animation:floatY_5s_ease-in-out_infinite]">
            <div className="-rotate-2 border border-[var(--accent)] bg-[var(--page-bg)] p-2 sm:-rotate-3">
              <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-[360px] w-full object-cover object-top" />
            </div>
            <span className="absolute -bottom-3 right-4 border border-[var(--line)] bg-[var(--chip-active-bg)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--chip-active-text)]">
              Live Profile
            </span>
          </div>
        </section>

        <section className="mt-8 overflow-hidden border-y-2 border-[var(--line)] bg-[var(--panel-bg)] py-2">
          <div className="flex w-[200%] [animation:tickerX_18s_linear_infinite]">
            <p className="w-1/2 whitespace-nowrap px-4 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{tickerText}</p>
            <p className="w-1/2 whitespace-nowrap px-4 text-xs uppercase tracking-[0.22em] text-[var(--accent)]">{tickerText}</p>
          </div>
        </section>

        <section className="mt-8 grid gap-6 lg:grid-cols-12">
          <article className="border-2 border-[var(--line)] bg-[var(--panel-bg)] p-5 shadow-[10px_10px_0_var(--line-soft)] lg:col-span-5">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">{t.currentTitle}</h2>
            <p className="mt-3 text-xl font-extrabold uppercase tracking-[0.05em]">
              {t.currentRolePrefix}
              <a
                href="https://uds.com.br"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-[3px] underline-offset-4 transition hover:text-[var(--accent)]"
              >
                {t.companyLabel}
              </a>
            </p>
          </article>

          <article className="border-2 border-[var(--line)] bg-[var(--panel-bg)] p-5 shadow-[10px_10px_0_var(--line-soft)] lg:col-span-7">
            <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">{t.latestTitle}</h2>

            {isLoadingPost && <p className="mt-3 text-sm text-[var(--text-muted)]">{t.latestLoading}</p>}

            {!isLoadingPost && postLoadFailed && <p className="mt-3 text-sm text-[var(--text-muted)]">{t.latestUnavailable}</p>}

            {!isLoadingPost && latestPost && (
              <article className="mt-4 border border-[var(--line-soft)] bg-[var(--page-bg)] p-4">
                <a
                  href={latestPost.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-lg font-extrabold uppercase tracking-[0.03em] transition hover:text-[var(--accent)]"
                >
                  {latestPost.title}
                </a>
                <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-[var(--text-muted)]">
                  {formatArticleDate(latestPost.dateISO, locale)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-muted)]">{latestPost.description}</p>
                <a
                  href={latestPost.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block border border-[var(--line)] bg-[var(--chip-bg)] px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em] transition hover:bg-[var(--chip-active-bg)] hover:text-[var(--chip-active-text)]"
                >
                  {t.latestRead}
                </a>
              </article>
            )}
          </article>
        </section>

        <section className="mt-8 border-2 border-[var(--line)] bg-[var(--panel-bg)] p-5 shadow-[10px_10px_0_var(--line-soft)]">
          <h2 className="text-xs uppercase tracking-[0.22em] text-[var(--text-muted)]">{t.socialTitle}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {profile.socials
              .filter((social) => allowedSocialLabels.has(social.label))
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[var(--line-soft)] bg-[var(--chip-bg)] px-3 py-2 text-sm font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-1 hover:border-[var(--line)] hover:bg-[var(--chip-active-bg)] hover:text-[var(--chip-active-text)]"
                >
                  <span>{social.label}</span>
                  <span className="opacity-70 transition group-hover:opacity-100">{t.socialVisit}</span>
                </a>
              ))}
          </div>
        </section>

        <footer className="mt-10 border-t-2 border-[var(--line-soft)] pt-5">
          <p className="text-sm uppercase tracking-[0.1em] text-[var(--text-muted)]">{t.aiNote}</p>
        </footer>
      </section>
    </main>
  );
}

