# Daily · Workout & Meals

A tiny, self-contained web app that opens to **today's workout** and a **flexible PCOS-friendly meal plan**. Tap to check off exercises and pick meal options; your choices save on the device and reset each day. Works offline and installs to your phone/laptop home screen.

No frameworks, no build step, no accounts.

## Files
- `index.html` — the whole app (UI + logic).
- `data.js` — your workouts and meals. **Edit this to change anything.**
- `manifest.json`, `sw.js`, `icon.svg` — make it installable + offline.

## Try it locally
Just open `index.html` in a browser. (The offline/install features need hosting over https — see below.)

## Put it on your phone and laptop (free, ~5 min)

### Host on GitHub Pages
1. Create a free account at [github.com](https://github.com) if you don't have one.
2. Click **New repository**, name it e.g. `daily`, set it **Public**, and create it.
3. On the repo page click **Add file -> Upload files**, then drag in everything inside this `DailyWorkout` folder (`index.html`, `data.js`, `manifest.json`, `sw.js`, `icon.svg`). Commit.
4. Go to **Settings -> Pages**. Under **Build and deployment**, set **Source: Deploy from a branch**, branch **main**, folder **/ (root)**. Save.
5. Wait ~1 minute, then refresh. Your URL appears at the top, like `https://YOUR-NAME.github.io/daily/`.

Open that URL on any device. Bookmark it.

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
