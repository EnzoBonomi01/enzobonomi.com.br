import profilePhoto from '../../assets/images/profile-photo.jpg';
import { TopControls } from '../components/top-controls';
import { siteConfig } from '../content/site-content';

import type { LandingPageProps } from './landing-props';

const terminalLocation = siteConfig.location.split(',')[0];

const channelEntries = [
  { label: 'Substack', href: siteConfig.channels.substack },
  { label: 'LinkedIn', href: siteConfig.channels.linkedin },
  { label: 'X / Twitter', href: siteConfig.channels.x },
  { label: 'YouTube', href: siteConfig.channels.youtube }
] as const;

export const DigitalBrutalismLanding = ({
  copy,
  article,
  loading,
  locale,
  onLocaleChange
}: LandingPageProps): JSX.Element => (
  <main className="page digital-brutalism" data-testid="landing-digital-brutalism">
    <div className="brutalist-noise" aria-hidden="true" />
    <div className="brutalist-grid-overlay" aria-hidden="true" />

    <header className="brutalist-masthead">
      <div className="brutalist-terminal">
        <div className="brutalist-terminal-copy">
          <span>terminal://{terminalLocation.toLowerCase()}</span>
          <span>{siteConfig.name}</span>
        </div>
        <TopControls locale={locale} copy={copy} onLocaleChange={onLocaleChange} />
      </div>
    </header>

    <section className="brutalist-hero" aria-labelledby="brutalist-title">
      <div className="brutalist-copy">
        <p className="brutalist-kicker">{siteConfig.role}</p>
        <h1 id="brutalist-title">{copy.hero.headline}</h1>
        <p className="brutalist-subline">{copy.hero.subheadline}</p>

        <div className="brutalist-actions">
          <a
            className="action-primary brutalist-link"
            data-text={copy.ui.primaryCta}
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            {copy.ui.primaryCta}
          </a>
          <a
            className="action-secondary brutalist-link"
            data-text={copy.ui.secondaryCta}
            href={article.url}
            target="_blank"
            rel="noreferrer"
          >
            {copy.ui.secondaryCta}
          </a>
          <a
            className="action-tertiary brutalist-link"
            data-text={copy.ui.tertiaryCta}
            href={siteConfig.channels.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            {copy.ui.tertiaryCta}
          </a>
        </div>

        <div className="brutalist-indicators" role="list" aria-label="Profile indicators">
          {siteConfig.indicators.map((indicator) => (
            <p key={indicator} role="listitem">
              {indicator}
            </p>
          ))}
        </div>
      </div>

      <aside className="brutalist-visual">
        <figure className="brutalist-portrait">
          <div className="brutalist-image-stack">
            <img src={profilePhoto} alt="Foto de perfil de Enzo Bonomi" loading="eager" />
            <img src={profilePhoto} alt="" aria-hidden="true" className="brutalist-image-glitch brutalist-image-shift-a" />
            <img src={profilePhoto} alt="" aria-hidden="true" className="brutalist-image-glitch brutalist-image-shift-b" />
          </div>
          <figcaption>{siteConfig.name}</figcaption>
        </figure>

        <div className="brutalist-signal">
          <p>STATUS // ONLINE</p>
          <p>{copy.context.roleValue}</p>
          <p>{copy.context.companyValue}</p>
        </div>
      </aside>
    </section>

    <section className="brutalist-panels">
      <article className="brutalist-panel brutalist-panel-article">
        <p className="brutalist-panel-label">{copy.live.title}</p>
        <h2>{article.title}</h2>
        <p>{loading ? copy.ui.loading : article.summary}</p>
        <p className="brutalist-panel-meta">
          {copy.ui.publishedOn}: {article.published}
        </p>
        <a
          className="inline-link brutalist-link"
          data-text={copy.live.read}
          href={article.url}
          target="_blank"
          rel="noreferrer"
        >
          {copy.live.read}
        </a>
      </article>

      <article className="brutalist-panel brutalist-panel-context">
        <p className="brutalist-panel-label">{copy.context.title}</p>
        <dl className="brutalist-specs">
          <div>
            <dt>{copy.context.roleLabel}</dt>
            <dd>{copy.context.roleValue}</dd>
          </div>
          <div>
            <dt>{copy.context.companyLabel}</dt>
            <dd>{copy.context.companyValue}</dd>
          </div>
        </dl>
        <p>{copy.context.description}</p>
      </article>

      <aside className="brutalist-panel brutalist-panel-contact">
        <p className="brutalist-panel-label">{copy.contact.title}</p>
        <p>{copy.contact.subtitle}</p>
        <p className="ethics">{copy.contact.ethics}</p>
        <a
          className="contact-whatsapp brutalist-link"
          data-text={copy.ui.primaryCta}
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noreferrer"
        >
          {copy.ui.primaryCta}
        </a>
        <div className="brutalist-channel-list" role="list" aria-label={copy.ui.channels}>
          {channelEntries.map((channel) => (
            <a
              key={channel.label}
              role="listitem"
              className="brutalist-link"
              data-text={channel.label}
              href={channel.href}
              target="_blank"
              rel="noreferrer"
            >
              {channel.label}
            </a>
          ))}
        </div>
      </aside>
    </section>
  </main>
);
