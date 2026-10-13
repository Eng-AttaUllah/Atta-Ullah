# Atta Ullah — Portfolio

Personal portfolio website: **React + TypeScript + Vite + Tailwind CSS v4**.

**Live:** https://eng-attaullah.github.io/Atta-Ullah/

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build (outputs to dist/)
npm run preview  # serve the production build locally
```

## Edit your content

All text lives in `src/data/` — no need to touch components:

| File | Contains |
|------|----------|
| `src/data/site.ts` | Name, tagline, bio, skills, timeline, social links |
| `src/data/projects.ts` | Project cards (title, description, tags, GitHub link) |
| `src/data/resume.ts` | Resume page sections (derived from the two files above) |

### Adding your resume PDF

Drop your PDF at:

```
public/resume/Atta-Ullah-Resume.pdf
```

The **Download PDF** button on `/resume` points there.

### Adding a profile photo

Drop a photo at `public/profile.jpg` — the About page picks it up
automatically and falls back to the **AU** initials avatar if it's missing.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages automatically.

Routing uses `HashRouter` (`/#/projects`) so deep links work on GitHub Pages
without any server configuration.
