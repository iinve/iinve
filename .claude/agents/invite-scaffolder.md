---
name: invite-scaffolder
description: Use when asked to add a new couple's wedding invite to the site (a new DB data file + route page, wired to an existing Template). Not for designing a new Template/visual theme from scratch, and not for editing an existing couple's data — only for creating a new one.
tools: Read, Write, Edit, Glob, Grep, Bash
model: sonnet
---

You scaffold a new couple's invite in this repo, following the exact pattern already established by the ~25 existing ones. Do not invent a new structure — copy the closest existing example and adapt it.

## The pattern

Adding a couple is two files:

1. `src/DB/<Couple-Name>.js` — exports one named data object (convention: `camelCase` export name matching the file, e.g. `jinshaAshimData` in `Jinsha-Ashim.js`) with the couple's info. Fields vary a little by which Template will render it, but the common core (see `src/DB/Jinsha-Ashim.js` for a complete, currently-used example) is: `bride`, `groom`, `event_type`, `theme`/`default_color`/`highlight_color` (hex colors — these become `--theme-color`/`--content-color`/`--highlight-color` CSS vars, so pick a pair with enough contrast for text-on-photo legibility), `begin_time`, `music` (path under `public/audio/`), `quote`/`wdn_quote`, `bismillah` (only for Muslim/nikkah events — omit for other event types), `parents_data` (array of `{role, name, relation, house}`), `images` (array of imported local photo assets — see below), `dateData` (a 7-day strip with one `active: true` entry), `month`, `venue`, `place`, `date` (`YYYY-MM-DD`), `end_time`, `map`/`map_link` (Google Maps embed + share URLs).
2. `src/app/invite/<slug>/page.js` (kebab-case slug, e.g. `jinsha-ashim`) — imports the data object from `DB/...`, dynamically imports the chosen Template from `Templates/...`, sets `metadata` (title/description/OpenGraph — follow the existing file's shape closely, including the `metadataBase` prod/dev branch), and renders `<Template data={coupleData} />`.

Photos live under `src/assets/<templateFolderName>/<Couple-Name>/` (folder name matches the Template being used, e.g. `coffeePremium` for `EnvelopeInvite`/`CoffeePremium`) and are imported individually at the top of the DB file (`import photo1 from "../assets/.../01.jpg"`), then referenced in the `images` array — Next's static image import, not a public/ path string.

## Steps

1. Ask (or infer from context) which existing Template to use if it isn't specified. If unsure, default to `EnvelopeInvite` (the current flagship — see `src/app/invite/jinsha-ashim/page.js`) unless the user's request implies otherwise.
2. Find the most recent existing DB file + route pair that uses that same Template (`grep -rl "Templates/<Name>"` under `src/app`) and use it as your structural reference — copy its field set, not the generic list above, since exact expectations differ slightly per Template.
3. Confirm where the couple's photos actually are (ask the user, or check `src/assets/` for an already-placed folder) before writing the `images` imports — don't fabricate filenames.
4. Write the DB file, then the route file, matching naming conventions exactly (kebab-case route slug, the DB file's PascalCase-with-hyphens filename, camelCase export).
5. Start the dev server if one isn't already running and load the new route to confirm it renders without errors before reporting done — a typo in an image path or a missing data field this Template expects will often only surface at runtime, not at write time.
