import { useEffect, useMemo, useState } from "react";
import { profile } from "../data/profile";
import { fetchLatestSubstackPost, type LatestSubstackPost } from "../services/substack";

type Locale = "pt-BR" | "es" | "en";

type TranslationSet = {
  languageLabel: string;
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
  aiNote: string;
};

const copyByLocale: Record<Locale, TranslationSet> = {
  "pt-BR": {
    languageLabel: "Idioma",
    heroTitle: "ENZO BONOMI",
    // heroBody:
    //   "Sou o Enzo. Gosto de pegar ideia baguncada, transformar em produto que funciona e compartilhar o que aprendo no caminho. Curto conversa direta, sem personagem e sem formula pronta.",
    currentTitle: "Onde estou agora",
    currentRolePrefix: "Analista de Projetos na ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "Atuo na concepcao e discovery de projetos digitais, alinhando requisitos, estimativas e direcionamento de produto com apoio de IA.",
    latestTitle: "Ultimo artigo no Substack",
    latestLoading: "Carregando artigo mais recente...",
    latestUnavailable: "Nao foi possivel carregar o artigo agora.",
    latestRead: "Ler artigo",
    socialTitle: "Canais de contato",
    socialVisit: "Acessar",
    aiNote: "Pagina criada com IA Codex GPT-5.3."
  },
  es: {
    languageLabel: "Idioma",
    heroTitle: "ENZO BONOMI",
    // heroBody:
    //   "Soy Enzo. Me gusta tomar ideas desordenadas, convertirlas en productos que funcionan y compartir lo que aprendo en el camino. Prefiero una conversacion directa, sin personaje y sin formulas vacias.",
    currentTitle: "Donde estoy ahora",
    currentRolePrefix: "Analista de Proyectos en ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "Trabajo en la concepcion y discovery de proyectos digitales, alineando requisitos, estimaciones y direccion de producto con apoyo de IA.",
    latestTitle: "Ultimo articulo en Substack",
    latestLoading: "Cargando el articulo mas reciente...",
    latestUnavailable: "No se pudo cargar el articulo ahora.",
    latestRead: "Leer articulo",
    socialTitle: "Canales de contacto",
    socialVisit: "Abrir",
    aiNote: "Pagina criada com IA Codex GPT-5.3."
  },
  en: {
    languageLabel: "Language",
    heroTitle: "ENZO BONOMI",
    // heroBody:
    //   "I am Enzo. I like taking messy ideas, turning them into products that actually work, and sharing what I learn along the way. I prefer direct communication, no persona, no empty frameworks.",
    currentTitle: "Where I am now",
    currentRolePrefix: "Project Analyst at ",
    companyLabel: "UDS Tecnologia",
    currentDescription:
      "I work on conception and discovery for digital projects, aligning requirements, estimates, and product direction with AI support.",
    latestTitle: "Latest Substack article",
    latestLoading: "Loading the latest article...",
    latestUnavailable: "Could not load the article right now.",
    latestRead: "Read article",
    socialTitle: "Contact channels",
    socialVisit: "Visit",
    aiNote: "Pagina criada com IA Codex GPT-5.3."
  }
};

const localeButtons: Array<{ key: Locale; label: string }> = [
  { key: "pt-BR", label: "PT-BR" },
  { key: "es", label: "ES" },
  { key: "en", label: "EN" }
];

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
  const [latestPost, setLatestPost] = useState<LatestSubstackPost | null>(null);
  const [isLoadingPost, setIsLoadingPost] = useState<boolean>(true);
  const [postLoadFailed, setPostLoadFailed] = useState<boolean>(false);

  const t = useMemo(() => copyByLocale[locale], [locale]);

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
    <main className="final-paper min-h-screen bg-[#0c121d] text-[#f4efe6]">
      <section className="mx-auto w-full max-w-6xl px-4 pb-14 pt-8 sm:px-6 lg:px-8">
        <header className="mb-10 flex justify-end">
          <div className="rounded-2xl border border-[#f0c96f] bg-[#111a2b] p-2">
            <p className="mb-2 px-2 font-[Syne] text-[10px] uppercase tracking-[0.2em] text-[#d9bd87]">{t.languageLabel}</p>
            <div className="flex gap-2">
              {localeButtons.map((item) => {
                const active = locale === item.key;
                return (
                  <button
                    key={item.key}
                    type="button"
                    onClick={() => setLocale(item.key)}
                    aria-pressed={active}
                    className={`rounded-full border px-3 py-1 font-[Kanit] text-xs font-semibold uppercase tracking-[0.09em] transition ${
                      active
                        ? "border-[#f0c96f] bg-[#f0c96f] text-[#111a2b]"
                        : "border-[#3a4a66] bg-[#0f1829] text-[#d1d8e8] hover:border-[#f0c96f] hover:text-[#f0c96f]"
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </div>
        </header>

        <section className="grid items-center gap-7 border border-[#32415d] bg-[#0f1829] p-6 sm:p-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <h1 className="font-[Bodoni_Moda] text-[clamp(2.5rem,8vw,5.8rem)] leading-[0.9] tracking-tight text-[#f6efe2]">{t.heroTitle}</h1>
            {/* <p className="mt-5 max-w-4xl border-l-4 border-[#f0c96f] pl-4 font-[Epilogue] text-[1.02rem] leading-relaxed text-[#d8dfec]">{t.heroBody}</p> */}
          </div>
          <div className="mx-auto w-full max-w-xs lg:col-span-4 lg:max-w-none">
            <div className="border-2 border-[#f0c96f] bg-[#0b1322] p-2">
              <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-[320px] w-full object-cover" />
            </div>
          </div>
        </section>

        <section className="mt-8 border border-[#32415d] bg-[#101c31] p-6 sm:p-8">
          <h2 className="font-[Syne] text-xs uppercase tracking-[0.24em] text-[#d8bd89]">{t.currentTitle}</h2>
          <p className="mt-3 font-[Kanit] text-xl uppercase tracking-[0.04em] text-[#f4efe6]">
            {t.currentRolePrefix}
            <a
              href="https://uds.com.br"
              target="_blank"
              rel="noreferrer"
              className="underline decoration-2 underline-offset-4 transition hover:text-[#f0c96f]"
            >
              {t.companyLabel}
            </a>
          </p>
          <p className="mt-3 max-w-4xl font-[Epilogue] text-[0.98rem] leading-relaxed text-[#d2dbec]">{t.currentDescription}</p>
        </section>

        <section className="mt-8 border border-[#32415d] bg-[#101c31] p-6 sm:p-8">
          <h2 className="font-[Syne] text-xs uppercase tracking-[0.24em] text-[#d8bd89]">{t.latestTitle}</h2>

          {isLoadingPost && <p className="mt-3 font-[Epilogue] text-sm text-[#d2dbec]">{t.latestLoading}</p>}

          {!isLoadingPost && postLoadFailed && <p className="mt-3 font-[Epilogue] text-sm text-[#d2dbec]">{t.latestUnavailable}</p>}

          {!isLoadingPost && latestPost && (
            <article className="mt-4 border border-[#4b607f] bg-[#13203a] p-4">
              <a
                href={latestPost.url}
                target="_blank"
                rel="noreferrer"
                className="font-[Kanit] text-lg font-semibold uppercase tracking-[0.03em] text-[#f4efe6] transition hover:text-[#f0c96f]"
              >
                {latestPost.title}
              </a>
              <p className="mt-1 font-[Syne] text-[11px] uppercase tracking-[0.15em] text-[#b9c5db]">
                {formatArticleDate(latestPost.dateISO, locale)}
              </p>
              <p className="mt-3 font-[Epilogue] text-sm leading-relaxed text-[#dde4f1]">{latestPost.description}</p>
              <a
                href={latestPost.url}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block border border-[#f0c96f] px-3 py-1 font-[Kanit] text-xs font-semibold uppercase tracking-[0.08em] text-[#f0c96f] transition hover:bg-[#f0c96f] hover:text-[#111a2b]"
              >
                {t.latestRead}
              </a>
            </article>
          )}
        </section>

        <section className="mt-8 border border-[#32415d] bg-[#101c31] p-6 sm:p-8">
          <h2 className="font-[Syne] text-xs uppercase tracking-[0.24em] text-[#d8bd89]">{t.socialTitle}</h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {profile.socials
              .filter((social) => allowedSocialLabels.has(social.label))
              .map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#f0c96f] bg-[#13203a] px-3 py-2 font-[Kanit] text-sm font-semibold uppercase tracking-[0.07em] text-[#f4efe6] transition hover:bg-[#f0c96f] hover:text-[#111a2b]"
                >
                  <span>{social.label}</span>
                  <span>{t.socialVisit}</span>
                </a>
              ))}
          </div>
        </section>

        <footer className="mt-10 border-t border-[#32415d] pt-5">
          <p className="font-[Kanit] text-sm text-[#d2dbec]">{t.aiNote}</p>
        </footer>
      </section>
    </main>
  );
}
