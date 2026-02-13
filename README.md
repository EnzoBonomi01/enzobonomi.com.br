# Enzo Bonomi Profile Lab

A creative profile website experiment built with:

- Vite
- React
- TypeScript
- Tailwind CSS
- Bun (package manager/runtime target)

The app ships five radically different profile directions and each one lives on its own route.

## Routes

- `/1`: Neon Control Room
- `/2`: Editorial Chronicle
- `/3`: Terminal Brutalism
- `/4`: Organic Glass Atlas
- `/5`: Kinetic Poster

## Run With Bun

```bash
bun install
bun run dev
```

Open `http://localhost:5173` and navigate between `/1` to `/5`.

## Build

```bash
bun run build
bun run preview
```

## Project Structure

- `src/App.tsx`: route wiring
- `src/components/DesignNavigator.tsx`: floating route selector
- `src/pages/DesignOne.tsx` ... `src/pages/DesignFive.tsx`: five unique profile concepts
- `src/data/profile.ts`: shared profile data and social links
- `src/index.css`: Tailwind entry + custom visual layers
- `public/assets/`: profile image, social logos, and documents

## Notes

- Typography, color systems, motion behavior, and layout logic are intentionally different for each page.
- Shared profile content is centralized in `src/data/profile.ts` so you can update all designs quickly.
