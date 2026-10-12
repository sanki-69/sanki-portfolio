# Sanki · Tuvshinsanaa Erdene · Portfolio

React + Vite portfolio site, in English and Mongolian.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:5173
npm run build    # production files go to dist/
npm run preview  # serve the built dist/ folder
```

## Where to edit

- `src/content.js` holds all the text in both languages, plus email, phone and toolkit.
- `src/components/Hero.jsx` holds the opening screen. The 3D cubes come from `Cube.jsx` and the floating X from `GlassX.jsx`.
- `src/components/Marquee.jsx` holds the scrolling strip of tool logos.
- `src/styles.css` holds the colours (top of the file) and the layout.
- `src/assets/photo.png` is the portrait.

## Deploying

```bash
npm run deploy
```

This builds the site and uploads it to Vercel.

The first time, log in once before deploying:

```bash
npm run login
```

Then run `npm run deploy` and answer the setup questions:

1. Log in with the same account you use for AI Shop (in the `npm run login` step).
2. "Set up and deploy?" → yes.
3. "Link to existing project?" → no.
4. Project name → for example `sanki-portfolio`, which becomes `sanki-portfolio.vercel.app`.
5. Code directory → `./`, and accept the detected Vite settings.

After that, `npm run deploy` publishes updates straight away.
