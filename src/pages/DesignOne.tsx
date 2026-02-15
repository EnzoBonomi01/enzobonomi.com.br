import { profile } from "../data/profile";
import { allowedSocialLabels, siteCopy } from "../data/siteCopy";
import { formatArticleDate, useLatestSubstackPost } from "../hooks/useLatestSubstackPost";

export function DesignOne() {
  const { post, isLoading, hasError } = useLatestSubstackPost();
  const contacts = profile.socials.filter((social) => allowedSocialLabels.has(social.label));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f3ede2] text-[#1b1712]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(184,45,29,0.16),transparent_34%),radial-gradient(circle_at_85%_12%,rgba(21,20,20,0.12),transparent_30%),linear-gradient(180deg,#f3ede2_0%,#f8f5ee_48%,#eee4d3_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(90deg,transparent_0,transparent_92px,rgba(28,21,16,0.08)_92px,rgba(28,21,16,0.08)_93px)]" />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8">
        <header className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <p
              className="text-xs uppercase tracking-[0.35em] text-[#7d2f21]"
              style={{ fontFamily: '"IBM Plex Mono", monospace' }}
            >
              Design 01 / Editorial Cutline
            </p>
            <h1 className="mt-4 text-[clamp(2.8rem,9vw,7rem)] leading-[0.84]" style={{ fontFamily: '"Bodoni Moda", serif' }}>
              {siteCopy.name}
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-[#3d3328]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              A portfolio composed like a magazine spread: typographic rhythm, editorial contrast, and asymmetric image blocks.
            </p>
          </div>

          <div className="relative lg:col-span-4">
            <div className="absolute -left-5 top-6 h-36 w-36 rounded-full border border-[#7d2f21]/30" />
            <div className="relative overflow-hidden border border-[#3d3328]/30 bg-[#efe3d2] p-3 shadow-[14px_14px_0_rgba(38,30,23,0.16)]">
              <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-80 w-full object-cover [clip-path:polygon(0_0,100%_0,100%_88%,86%_100%,0_100%)]" />
              <p
                className="mt-3 text-[10px] uppercase tracking-[0.25em] text-[#7d2f21]"
                style={{ fontFamily: '"IBM Plex Mono", monospace' }}
              >
                Featured Portrait
              </p>
            </div>
          </div>
        </header>

        <section className="mt-10 grid gap-5 lg:grid-cols-12">
          <article className="border border-[#3d3328]/25 bg-[#faf6ef]/90 p-6 lg:col-span-7">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7d2f21]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              {siteCopy.whereTitle}
            </p>
            <p className="mt-4 text-3xl leading-tight" style={{ fontFamily: '"Bodoni Moda", serif' }}>
              {siteCopy.whereRolePrefix}
              <a href="https://uds.com.br" target="_blank" rel="noreferrer" className="underline decoration-[#7d2f21] decoration-2 underline-offset-4">
                {siteCopy.companyLabel}
              </a>
            </p>
            <p className="mt-4 text-lg leading-relaxed text-[#40362d]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
              {siteCopy.whereDescription}
            </p>
          </article>

          <article className="border border-[#3d3328]/25 bg-[#f6efe3]/95 p-6 lg:col-span-5">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7d2f21]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              {siteCopy.latestTitle}
            </p>
            {isLoading && <p className="mt-4 text-sm text-[#40362d]">{siteCopy.latestLoading}</p>}
            {!isLoading && hasError && <p className="mt-4 text-sm text-[#40362d]">{siteCopy.latestUnavailable}</p>}
            {!isLoading && post && (
              <div className="mt-4">
                <a href={post.url} target="_blank" rel="noreferrer" className="text-2xl leading-tight" style={{ fontFamily: '"Bodoni Moda", serif' }}>
                  {post.title}
                </a>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#7d2f21]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                  {formatArticleDate(post.dateISO)}
                </p>
                <p className="mt-3 text-base leading-relaxed text-[#40362d]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {post.description}
                </p>
              </div>
            )}
          </article>
        </section>

        <section className="mt-6 grid gap-5 lg:grid-cols-12">
          <article className="border border-[#3d3328]/25 bg-[#faf6ef]/95 p-6 lg:col-span-8">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7d2f21]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              Focus Areas
            </p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {profile.focusAreas.map((item) => (
                <p key={item} className="border-b border-[#3d3328]/20 pb-2 text-lg text-[#30271f]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
                  {item}
                </p>
              ))}
            </div>
          </article>

          <article className="border border-[#3d3328]/25 bg-[#f6efe3]/95 p-6 lg:col-span-4">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#7d2f21]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
              {siteCopy.contactsTitle}
            </p>
            <div className="mt-4 space-y-2">
              {contacts.map((contact) => (
                <a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between border border-[#3d3328]/30 px-3 py-2 transition hover:border-[#7d2f21] hover:bg-[#fffaf2]"
                >
                  <span className="text-sm uppercase tracking-[0.15em]" style={{ fontFamily: '"IBM Plex Mono", monospace' }}>
                    {contact.label}
                  </span>
                  <span className="text-xs text-[#7d2f21] opacity-0 transition group-hover:opacity-100">Visit</span>
                </a>
              ))}
            </div>
          </article>
        </section>

        <footer className="mt-8 border-t border-[#3d3328]/25 pt-4 text-sm text-[#4e4237]" style={{ fontFamily: '"Cormorant Garamond", serif' }}>
          {siteCopy.aiNote}
        </footer>
      </section>
    </main>
  );
}