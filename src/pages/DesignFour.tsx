import { profile } from "../data/profile";
import { allowedSocialLabels, siteCopy } from "../data/siteCopy";
import { formatArticleDate, useLatestSubstackPost } from "../hooks/useLatestSubstackPost";

export function DesignFour() {
  const { post, isLoading, hasError } = useLatestSubstackPost();
  const contacts = profile.socials.filter((social) => allowedSocialLabels.has(social.label));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8f8f6] text-[#090909]">
      <style>{`
        @keyframes monoTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section className="mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8" style={{ fontFamily: '"Unbounded", sans-serif' }}>
        <header className="grid gap-6 border-b border-black/20 pb-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.35em] text-black/60">Design 04 / Mono Rail</p>
            <h1 className="mt-5 text-[clamp(2.4rem,10vw,7.2rem)] font-bold uppercase leading-[0.8] tracking-[-0.03em]">{siteCopy.name}</h1>
          </div>
          <div className="lg:col-span-4">
            <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-72 w-full object-cover grayscale" />
          </div>
        </header>

        <section className="mt-5 overflow-hidden border-y border-black/20 py-2">
          <div className="flex w-[200%] [animation:monoTicker_14s_linear_infinite]">
            <p className="w-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-black/60">product strategy execution communication product strategy execution communication</p>
            <p className="w-1/2 whitespace-nowrap text-[10px] uppercase tracking-[0.3em] text-black/60">product strategy execution communication product strategy execution communication</p>
          </div>
        </section>

        <section className="mt-8 grid gap-7 lg:grid-cols-12">
          <article className="lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.3em] text-black/60">{siteCopy.whereTitle}</p>
            <p className="mt-4 text-[clamp(1.8rem,4vw,2.8rem)] uppercase leading-[1.05]">
              {siteCopy.whereRolePrefix}
              <a href="https://uds.com.br" target="_blank" rel="noreferrer" className="border-b border-black pb-1">
                {siteCopy.companyLabel}
              </a>
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-black/75" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              {siteCopy.whereDescription}
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {profile.stats.map((item) => (
                <div key={item.label} className="border border-black/20 p-3">
                  <p className="text-xl">{item.value}</p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.15em] text-black/60" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="border-l border-black/20 pl-5 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.3em] text-black/60">{siteCopy.latestTitle}</p>
            {isLoading && <p className="mt-4 text-sm text-black/70">{siteCopy.latestLoading}</p>}
            {!isLoading && hasError && <p className="mt-4 text-sm text-black/70">{siteCopy.latestUnavailable}</p>}
            {!isLoading && post && (
              <div className="mt-4">
                <a href={post.url} target="_blank" rel="noreferrer" className="text-2xl leading-tight">
                  {post.title}
                </a>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-black/55" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                  {formatArticleDate(post.dateISO)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-black/75" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                  {post.description}
                </p>
              </div>
            )}
          </article>
        </section>

        <section className="mt-10 grid gap-3 border-t border-black/20 pt-6 sm:grid-cols-2 lg:grid-cols-4">
          {contacts.map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target="_blank"
              rel="noreferrer"
              className="group border border-black/20 px-3 py-3 text-xs uppercase tracking-[0.16em] transition hover:border-black"
            >
              <p>{contact.label}</p>
              <p className="mt-1 text-[10px] text-black/50 transition group-hover:text-black/80" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                {contact.hint}
              </p>
            </a>
          ))}
        </section>

        <footer className="mt-7 border-t border-black/20 pt-4 text-[11px] uppercase tracking-[0.2em] text-black/55">{siteCopy.aiNote}</footer>
      </section>
    </main>
  );
}