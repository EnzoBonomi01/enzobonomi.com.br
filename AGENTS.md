# Repository Guidelines

## Project Scope
This repository is a static portfolio website. Keep it framework-free unless there is a clear need. Favor simple, maintainable HTML, CSS, and vanilla JavaScript over heavy tooling.

## Project Structure & Module Organization
Use and keep this layout predictable:
- `index.html`: main page and semantic section structure.
- `css/styles.css`: global styles, design tokens (CSS variables), responsive rules.
- `js/script.js`: DOM behavior (theme toggle, language switch, interactions).
- `assets/images/`: compressed images for UI.
- `assets/documents/`: downloadable files (for example CV PDFs).
- `docs/` (optional): notes for content, SEO, and design decisions.

## Build, Test, and Development Commands
No build step is required.
- `start index.html` (Windows): quick visual check in browser.
- `python -m http.server 8080`: local server at `http://localhost:8080` for realistic asset/path testing.

If scripts are added, keep them minimal:
- `npm run lint`: code quality checks.
- `npm run format`: formatting.
- `npm test`: automated checks (if introduced).

## Coding Style & Naming Conventions
- Use semantic HTML (`header`, `main`, `section`, `footer`) and accessible attributes.
- Keep CSS organized by section; prefer CSS variables for colors/spacing.
- Use 2-space indentation for CSS and 4-space for HTML/JS.
- Use `kebab-case` for file names and `camelCase` for JavaScript variables/functions.
- Keep JavaScript functions small and focused on one behavior.

## Testing Guidelines
Automated tests are optional for this static project, but every change should include manual validation:
- desktop and mobile layout
- navigation and links
- theme/language interactions
- document downloads

If automation is added, start with lightweight browser smoke tests for key user flows.

## Assets, SEO, and Accessibility
- Optimize images (`.webp`/`.avif` when possible) and compress documents before commit.
- Add descriptive `alt` text, clear heading hierarchy, and keyboard-friendly interactions.
- Keep metadata current (`title`, `description`, Open Graph tags) for sharing and search visibility.
- Avoid committing source design exports that are not used at runtime.

## Commit & Pull Request Guidelines
- Use Conventional Commits (`feat:`, `fix:`, `docs:`, `style:`, `refactor:`).
- PRs should include: what changed, why, manual test checklist, and screenshots for UI changes.

## Security & Configuration Tips
- Never commit secrets, tokens, or personal data.
- Keep downloadable files sanitized (remove hidden metadata when possible).
- Review third-party CDN links before updating versions.
