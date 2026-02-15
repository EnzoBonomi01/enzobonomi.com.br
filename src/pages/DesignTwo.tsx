import { profile } from "../data/profile";
import { allowedSocialLabels, siteCopy } from "../data/siteCopy";
import { formatArticleDate, useLatestSubstackPost } from "../hooks/useLatestSubstackPost";

export function DesignTwo() {
  const { post, isLoading, hasError } = useLatestSubstackPost();
  const contacts = profile.socials.filter((social) => allowedSocialLabels.has(social.label));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#ecfff3] text-[#153728]">
      <style>{`
        @keyframes blobDrift {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(18px, -24px, 0) scale(1.08); }
        }

        @keyframes cardLift {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-8 h-72 w-72 rounded-full bg-[#7df3a6]/60 blur-3xl [animation:blobDrift_9s_ease-in-out_infinite]" />
        <div className="absolute right-[-6rem] top-24 h-80 w-80 rounded-full bg-[#ffd26c]/60 blur-3xl [animation:blobDrift_11s_ease-in-out_infinite_reverse]" />
        <div className="absolute bottom-[-8rem] left-1/3 h-96 w-96 rounded-full bg-[#6de3ff]/55 blur-3xl [animation:blobDrift_13s_ease-in-out_infinite]" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-[2.5rem] border-2 border-[#153728]/20 bg-white/75 p-7 shadow-[0_20px_55px_rgba(24,73,52,0.16)] lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Design 02 / Bubble Lab
            </p>
            <h1 className="mt-4 text-[clamp(2.8rem,10vw,6.8rem)] font-black leading-[0.85]" style={{ fontFamily: '"Kanit", sans-serif' }}>
              {siteCopy.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#255f46]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Playful product energy translated into oversized soft cards, inflated forms, and a color atmosphere built for motion.
            </p>
          </div>

          <div className="rounded-[2.5rem] border-2 border-[#153728]/20 bg-white/80 p-4 shadow-[0_20px_55px_rgba(24,73,52,0.16)] lg:col-span-4 [animation:cardLift_6s_ease-in-out_infinite]">
            <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-80 w-full rounded-[2rem] object-cover object-top" />
            <div className="mt-3 flex items-center justify-between rounded-full bg-[#153728] px-4 py-2 text-[#e9fff2]">
              <span className="text-xs uppercase tracking-[0.2em]" style={{ fontFamily: '"Sora", sans-serif' }}>
                Live profile
              </span>
              <span className="text-sm">ON</span>
            </div>
          </div>
        </header>

        <section className="mt-7 grid gap-5 lg:grid-cols-12">
          <article className="rounded-[2rem] border-2 border-[#153728]/20 bg-white/75 p-6 shadow-[0_15px_45px_rgba(24,73,52,0.12)] lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {siteCopy.whereTitle}
            </p>
            <p className="mt-3 text-2xl font-black leading-tight" style={{ fontFamily: '"Kanit", sans-serif' }}>
              {siteCopy.whereRolePrefix}
              <a href="https://uds.com.br" target="_blank" rel="noreferrer" className="text-[#1f7d57] underline underline-offset-4">
                {siteCopy.companyLabel}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#285b45]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {siteCopy.whereDescription}
            </p>
          </article>

          <article className="rounded-[2rem] border-2 border-[#153728]/20 bg-white/75 p-6 shadow-[0_15px_45px_rgba(24,73,52,0.12)] lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {siteCopy.latestTitle}
            </p>
            {isLoading && <p className="mt-4 text-sm text-[#285b45]">{siteCopy.latestLoading}</p>}
            {!isLoading && hasError && <p className="mt-4 text-sm text-[#285b45]">{siteCopy.latestUnavailable}</p>}
            {!isLoading && post && (
              <div className="mt-4 rounded-3xl border border-[#153728]/20 bg-[#f7fff9] p-4">
                <a href={post.url} target="_blank" rel="noreferrer" className="text-xl font-bold leading-tight" style={{ fontFamily: '"Kanit", sans-serif' }}>
                  {post.title}
                </a>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {formatArticleDate(post.dateISO)}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-[#285b45]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {post.description}
                </p>
              </div>
            )}
          </article>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-12">
          <article className="rounded-[2rem] border-2 border-[#153728]/20 bg-white/75 p-6 shadow-[0_15px_45px_rgba(24,73,52,0.12)] lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
              Snapshot stats
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {profile.stats.map((item) => (
                <div key={item.label} className="rounded-3xl border border-[#153728]/20 bg-[#f7fff9] p-3 text-center">
                  <p className="text-2xl font-black" style={{ fontFamily: '"Kanit", sans-serif' }}>
                    {item.value}
                  </p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-[#2a6048]" style={{ fontFamily: '"Sora", sans-serif' }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[2rem] border-2 border-[#153728]/20 bg-white/75 p-6 shadow-[0_15px_45px_rgba(24,73,52,0.12)] lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#1f7d57]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {siteCopy.contactsTitle}
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-[#153728]/25 bg-[#f7fff9] px-3 py-2 text-center text-sm font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-0.5 hover:border-[#1f7d57] hover:bg-[#d8ffe6]"
                  style={{ fontFamily: '"Kanit", sans-serif' }}
                >
                  {contact.label}
                </a>
              ))}
            </div>
          </article>
        </section>

        <footer className="mt-8 text-sm text-[#2a6048]" style={{ fontFamily: '"Sora", sans-serif' }}>
          {siteCopy.aiNote}
        </footer>
      </section>
    </main>
  );
}
