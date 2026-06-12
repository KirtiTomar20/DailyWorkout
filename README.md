# Daily · Workout & Meals

A tiny, self-contained web app that opens to **today's workout** and a **flexible PCOS-friendly meal plan**. Tap to check off exercises and pick meal options; your choices save on the device and reset each day. Works offline and installs to your phone/laptop home screen.

No frameworks, no build step, no accounts.

## Files
- `index.html` — the whole app (UI + logic).
- `data.js` — your workouts and meals. **Edit this to change anything.**
- `images/` — exercise illustrations shown in each "How to" panel.
- `manifest.json`, `sw.js`, `icon.svg` — make it installable + offline.

## Exercise "How to" guidance
Each main strength and core move has a tappable **How to** button that opens an illustration plus posture, core, and breathing cues. The text lives in the `EXERCISE_INFO` section of `data.js`. To swap a picture, just replace the matching file in `images/` (keep the same filename, e.g. `images/plank.png`), then bump `CACHE` in `sw.js` so installed devices pick it up.

## Try it locally
Just open `index.html` in a browser. (The offline/install features need hosting over https — see below.)

## Put it on your phone and laptop (free, ~5 min)

All options below are **100% free**. Pick whichever feels easiest — you only need one.

### Option A: Netlify Drop (easiest, no account needed to try)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop).
2. Drag the whole `DailyWorkout` folder onto the page.
3. It instantly gives you a public URL like `https://something-random.netlify.app`. Done.
4. (Optional) Make a free account to keep the URL permanent and rename it.

### Option B: Cloudflare Pages (free, drag-and-drop)
1. Create a free account at [pages.cloudflare.com](https://pages.cloudflare.com).
2. **Create a project -> Direct Upload**, drag in the files, deploy. You get a free `*.pages.dev` URL.

### Option C: GitHub Pages (free for public repos)
> Note: GitHub Pages is free. GitHub's paid plans are only for private-repo/team features — you do **not** need them for this.
1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **New repository**, name it e.g. `daily`, set it **Public**, and create it.
3. On the repo page click **Add file -> Upload files**, then drag in everything inside this `DailyWorkout` folder (`index.html`, `data.js`, `manifest.json`, `sw.js`, `icon.svg`). Commit.
4. Go to **Settings -> Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait ~1 minute, then refresh. Your URL appears at the top, like `https://YOUR-NAME.github.io/daily/`.

Open your chosen URL on any device. Bookmark it.

### Add to Home Screen
- **iPhone (Safari):** open the URL -> Share button -> **Add to Home Screen**.
- **Android (Chrome):** open the URL -> menu (⋮) -> **Add to Home screen / Install app**.
- **Laptop (Chrome/Edge):** open the URL -> install icon in the address bar -> **Install**.

It now opens full-screen like a normal app and works offline.

## Editing your plan
Open `data.js`:
- **Workouts:** under `WORKOUT`, each day has `blocks`, each block has `items` with a `name` and optional `detail`.
- **Meals:** under `MEALS`, each section has `options`. Add/remove options or items freely.

After editing, re-upload the changed file to GitHub. Tip: bump `CACHE = "daily-v1"` in `sw.js` to `daily-v2` so installed devices fetch the update.

## Notes
- Data is stored per device in `localStorage` (it isn't synced between phone and laptop).
- Checks and meal picks automatically clear at the start of a new day.
