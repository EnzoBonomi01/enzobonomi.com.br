# Repository Guidelines

## Project Structure & Module Organization
This repository is a static portfolio site. Keep `.codex/` metadata untouched.
- `index.html`: single-page app shell and content sections.
- `css/styles.css`: global styles, theme variables, and responsive rules.
- `js/script.js`: UI behavior (menu, theme toggle, language switch, CV download).
- `assets/images/` and `assets/documents/`: static media and downloadable files.

If the codebase grows, group new JavaScript modules under `src/` and mirror tests in `tests/` (for example, `src/i18n/translations.js` and `tests/i18n/translations.test.js`).

## Build, Test, and Development Commands
No build pipeline is required today.
- `start index.html` (Windows): open the site quickly in the default browser.
- `python -m http.server 8080`: serve locally at `http://localhost:8080` for realistic asset loading.

When tooling is introduced, keep commands stable and CI-friendly:
- `npm run dev`: local development mode.
- `npm test`: automated test suite.
- `npm run build`: production artifact generation.

## Coding Style & Naming Conventions
- Follow existing style in each file: HTML/JS currently use 4-space indentation; CSS uses 2 spaces.
- Prefer semantic HTML and clear, small JavaScript functions with explicit side effects.
- Use descriptive names (`languageSelector`, `downloadCvButton`) and kebab-case for new file/folder names.
- Run formatters/linters before commit when introduced; do not commit unformatted code.

## Testing Guidelines
Automated tests are not configured yet; include manual verification steps in PRs for UI changes (desktop/mobile layout, theme toggle, language switch, CV download links).
When adding tests, use `*.test.*` naming and prioritize fast unit tests for behavior in `js/`.

## Commit & Pull Request Guidelines
Current history is minimal and does not define a reliable pattern (`primeiro commit`, `commit teste`). Use Conventional Commits from now on:
- `feat: add bilingual footer links`
- `fix: correct CV download path`

Each PR should include:
- what changed and why
- linked issue/task (if available)
- test evidence (command + result, or manual checklist)
- screenshots/GIFs for UI changes

## Security & Configuration Tips
- Never commit secrets or private tokens.
- Keep downloadable documents sanitized (no personal metadata leaks).
- Validate third-party CDN updates (Font Awesome, Google Fonts) before release.
