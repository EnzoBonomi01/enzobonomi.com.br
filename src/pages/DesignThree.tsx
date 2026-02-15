import { profile } from "../data/profile";
import { allowedSocialLabels, siteCopy } from "../data/siteCopy";
import { formatArticleDate, useLatestSubstackPost } from "../hooks/useLatestSubstackPost";

export function DesignThree() {
  const { post, isLoading, hasError } = useLatestSubstackPost();
  const contacts = profile.socials.filter((social) => allowedSocialLabels.has(social.label));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060606] text-[#ece7d9]">
      <style>{`
        @keyframes pulseLine {
          0%, 100% { opacity: 0.35; }
          50% { opacity: 0.9; }
        }

        @keyframes panelSweep {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(220%); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_12%,rgba(255,120,43,0.22),transparent_32%),radial-gradient(circle_at_86%_82%,rgba(255,193,69,0.18),transparent_35%),linear-gradient(135deg,#070707_0%,#1a130d_48%,#090909_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background:repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,rgba(255,165,79,0.12)_3px,rgba(255,165,79,0.12)_4px)] [animation:pulseLine_5s_ease-in-out_infinite]" />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
        <header className="border border-[#ff9e4a]/45 bg-[#130f0a]/85 p-4 sm:p-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-[11px] uppercase tracking-[0.3em] text-[#ffbe79]">Design 03 / Foundry Control Room</p>
            <span className="rounded-sm border border-[#ff9e4a]/55 bg-[#2b1d10] px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-[#ffbe79]">
              status: active
            </span>
          </div>
          <h1 className="mt-5 text-[clamp(2.4rem,9vw,6rem)] font-semibold uppercase leading-[0.84] tracking-[0.04em] text-[#fff3de]">{siteCopy.name}</h1>
          <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#d9c6ad]">
            Industrial cockpit language with dense instrumentation, hard edges, and high-signal hierarchy.
          </p>
        </header>

        <section className="mt-6 grid gap-5 lg:grid-cols-12">
          <article className="relative overflow-hidden border border-[#ff9e4a]/45 bg-[#120e0a]/85 p-5 lg:col-span-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[#ff9e4a]" />
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute top-0 h-full w-1/3 bg-gradient-to-r from-transparent via-[#ffbe79]/15 to-transparent [animation:panelSweep_7s_linear_infinite]" />
            </div>
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#ffbe79]">Visual feed</p>
            <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="mt-4 h-80 w-full object-cover grayscale-[25%]" />
          </article>

          <article className="border border-[#ff9e4a]/45 bg-[#120e0a]/85 p-5 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#ffbe79]">{siteCopy.whereTitle}</p>
            <p className="mt-4 text-2xl uppercase leading-tight text-[#fff3de]">
              {siteCopy.whereRolePrefix}
              <a href="https://uds.com.br" target="_blank" rel="noreferrer" className="text-[#ffbe79] underline underline-offset-4">
                {siteCopy.companyLabel}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#d9c6ad]">{siteCopy.whereDescription}</p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {profile.stats.map((item) => (
                <div key={item.label} className="border border-[#ff9e4a]/30 bg-[#1b130c] p-3">
                  <p className="text-xl font-semibold text-[#fff3de]">{item.value}</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.14em] text-[#d9c6ad]">{item.label}</p>
                </div>
              ))}
            </div>
          </article>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-12">
          <article className="border border-[#ff9e4a]/45 bg-[#120e0a]/85 p-5 lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#ffbe79]">{siteCopy.latestTitle}</p>
            {isLoading && <p className="mt-4 text-sm text-[#d9c6ad]">{siteCopy.latestLoading}</p>}
            {!isLoading && hasError && <p className="mt-4 text-sm text-[#d9c6ad]">{siteCopy.latestUnavailable}</p>}
            {!isLoading && post && (
              <div className="mt-4 border border-[#ff9e4a]/30 bg-[#1b130c] p-4">
                <a href={post.url} target="_blank" rel="noreferrer" className="text-2xl leading-tight text-[#fff3de]">
                  {post.title}
                </a>
                <p className="mt-2 text-[10px] uppercase tracking-[0.2em] text-[#ffbe79]">{formatArticleDate(post.dateISO)}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#d9c6ad]">{post.description}</p>
              </div>
            )}
          </article>

          <article className="border border-[#ff9e4a]/45 bg-[#120e0a]/85 p-5 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[#ffbe79]">{siteCopy.contactsTitle}</p>
            <div className="mt-4 space-y-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between border border-[#ff9e4a]/35 bg-[#1b130c] px-3 py-2 text-xs uppercase tracking-[0.16em] text-[#fff3de] transition hover:border-[#ffbe79] hover:bg-[#2a1c11]"
                >
                  <span>{contact.label}</span>
                  <span className="text-[#ffbe79]">-&gt;</span>
                </a>
              ))}
            </div>
          </article>
        </section>

        <footer className="mt-8 border-t border-[#ff9e4a]/30 pt-4 text-xs uppercase tracking-[0.2em] text-[#c8b092]">{siteCopy.aiNote}</footer>
      </section>
    </main>
  );
}
