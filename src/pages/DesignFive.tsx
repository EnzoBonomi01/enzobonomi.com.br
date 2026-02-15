import { profile } from "../data/profile";
import { allowedSocialLabels, siteCopy } from "../data/siteCopy";
import { formatArticleDate, useLatestSubstackPost } from "../hooks/useLatestSubstackPost";

export function DesignFive() {
  const { post, isLoading, hasError } = useLatestSubstackPost();
  const contacts = profile.socials.filter((social) => allowedSocialLabels.has(social.label));

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#041f26] text-[#f5fcff]">
      <style>{`
        @keyframes reefFloat {
          0%, 100% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -18px, 0) scale(1.06); }
        }

        @keyframes revealUp {
          0% { opacity: 0; transform: translateY(22px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(14,247,184,0.35),transparent_30%),radial-gradient(circle_at_84%_14%,rgba(255,171,68,0.32),transparent_32%),radial-gradient(circle_at_75%_80%,rgba(0,190,255,0.26),transparent_36%),linear-gradient(140deg,#042028_0%,#0d3842_46%,#06212a_100%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-35 [background:radial-gradient(circle,rgba(255,255,255,0.26)_1px,transparent_1px)] [background-size:18px_18px]" />

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-8 sm:px-6 lg:px-8" style={{ fontFamily: '"Syne", sans-serif' }}>
        <header className="grid gap-6 lg:grid-cols-12">
          <div className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl [animation:revealUp_0.8s_ease_forwards] lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.34em] text-[#9dfce4]">Design 05 / Reef Signal</p>
            <h1 className="mt-4 text-[clamp(2.6rem,10vw,7rem)] font-extrabold leading-[0.84]">{siteCopy.name}</h1>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#dcfaff]" style={{ fontFamily: '"Sora", sans-serif' }}>
              A tropical-futuristic interface with liquid gradients, glass surfaces, and layered depth.
            </p>
          </div>

          <div className="relative rounded-3xl border border-white/25 bg-white/10 p-4 backdrop-blur-xl [animation:revealUp_1s_ease_forwards] lg:col-span-4">
            <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-[#0ef7b8]/55 blur-2xl [animation:reefFloat_7s_ease-in-out_infinite]" />
            <img src="/assets/images/enzo-photo.png" alt="Enzo Bonomi" className="h-80 w-full rounded-2xl object-cover object-top" />
          </div>
        </header>

        <section className="mt-7 grid gap-5 lg:grid-cols-12">
          <article className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl [animation:revealUp_1.15s_ease_forwards] lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9dfce4]">{siteCopy.whereTitle}</p>
            <p className="mt-3 text-2xl font-extrabold leading-tight">
              {siteCopy.whereRolePrefix}
              <a href="https://uds.com.br" target="_blank" rel="noreferrer" className="text-[#ffd38d] underline underline-offset-4">
                {siteCopy.companyLabel}
              </a>
            </p>
            <p className="mt-4 text-sm leading-relaxed text-[#dcfaff]" style={{ fontFamily: '"Sora", sans-serif' }}>
              {siteCopy.whereDescription}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {profile.focusAreas.map((area) => (
                <span key={area} className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs text-[#dcfaff]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {area}
                </span>
              ))}
            </div>
          </article>

          <article className="rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl [animation:revealUp_1.3s_ease_forwards] lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.3em] text-[#9dfce4]">{siteCopy.latestTitle}</p>
            {isLoading && <p className="mt-4 text-sm text-[#dcfaff]">{siteCopy.latestLoading}</p>}
            {!isLoading && hasError && <p className="mt-4 text-sm text-[#dcfaff]">{siteCopy.latestUnavailable}</p>}
            {!isLoading && post && (
              <div className="mt-4 rounded-2xl border border-white/25 bg-[#032833]/70 p-4">
                <a href={post.url} target="_blank" rel="noreferrer" className="text-xl font-extrabold leading-tight text-white">
                  {post.title}
                </a>
                <p className="mt-2 text-[11px] uppercase tracking-[0.2em] text-[#9dfce4]">{formatArticleDate(post.dateISO)}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#dcfaff]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {post.description}
                </p>
              </div>
            )}
          </article>
        </section>

        <section className="mt-6 rounded-3xl border border-white/25 bg-white/10 p-6 backdrop-blur-xl [animation:revealUp_1.45s_ease_forwards]">
          <p className="text-xs uppercase tracking-[0.3em] text-[#9dfce4]">{siteCopy.contactsTitle}</p>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noreferrer"
                className="group rounded-2xl border border-white/30 bg-white/10 px-4 py-3 text-sm font-semibold uppercase tracking-[0.08em] transition hover:-translate-y-1 hover:border-[#ffd38d] hover:bg-[#0f4e5e]/80"
              >
                <p>{contact.label}</p>
                <p className="mt-1 text-[11px] text-[#9cd8e6]" style={{ fontFamily: '"Sora", sans-serif' }}>
                  {contact.hint}
                </p>
              </a>
            ))}
          </div>
        </section>

        <footer className="mt-8 border-t border-white/25 pt-4 text-sm text-[#dcfaff]" style={{ fontFamily: '"Sora", sans-serif' }}>
          {siteCopy.aiNote}
        </footer>
      </section>
    </main>
  );
}