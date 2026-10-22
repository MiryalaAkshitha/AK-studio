# AK Studio — theakstudio.in

The studio website, built with React + Vite.

## Editing the site

**Almost every change happens in one file: [`src/content.js`](src/content.js).**

- Change any text → edit it in `content.js`
- Add a new client → copy one block in the `clients` list and change the values
- Mark a project finished → set `inProgress: false`
- Change a colour → edit the variables at the top of [`src/styles.css`](src/styles.css)
- Swap an image → replace the file in `public/assets/` (keep the same name)

## Running it on your computer

```bash
npm install      # first time only
npm run dev      # opens a live preview at http://localhost:5173
```

The preview updates instantly as you save files.

## Publishing

Push to `master` — GitHub Actions builds the site and publishes it to GitHub Pages automatically
(see the **Actions** tab on GitHub to watch it). Takes about a minute.

## Folder layout

```
src/content.js        ← all the words on the site
src/styles.css        ← colours, fonts, layout
src/components/       ← one file per section of the page
public/               ← copied to the site as-is
  CNAME               ← keeps the theakstudio.in domain — don't delete
  assets/             ← logo, favicon, hero image, PDFs
  privacy.html, terms.html, gfday/, friendshipDay/, uploads/
```
