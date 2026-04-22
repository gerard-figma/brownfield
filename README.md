# Acme Dashboard

See Figma for latest designs: https://www.figma.com/file/this-link-is-intentionally-broken-acme-dash-404

## Intentional issues (training)

This repo is a small brownfield-style app: readable layout, but **five deliberate problems** you can fix with AI or by hand. Each is localized and easy to explain.

1. **Duplicated colors** — The same hex values (`#2563EB`, `#3B82F6`, greys, etc.) are repeated in many files. There is no shared palette or token file. *Fix direction:* one small `colors.js` (or CSS variables) and replace imports / classes.

2. **`BigButton` consistency** — Variants hard-code hex colors, and the `extraStyle` prop lets any screen override padding or colors, which defeats a design system. *Fix direction:* remove `extraStyle` (or narrow it), centralize variant styles, add `disabled` if you want a fuller API.

3. **`CardThing` prop name** — The first prop is called `stat`, but every caller passes a normal title (e.g. `"Users"`, `"Slack"`). *Fix direction:* rename to `title` or `label` and update call sites (`Dashboard.jsx`, `IntegrationsPage.jsx`).

4. **`TableV2` row keys** — Body rows use the row **index** as the React `key`. That is fragile when rows are sorted, filtered, or inserted. *Fix direction:* give each row a stable `id` in the data and use `key={row.id}`.

5. **`ToggleSwitch` API** — Props are named `isOn` and `whenToggle` instead of the usual `checked` and `onChange` (and HTML parity). *Fix direction:* rename props and update `SettingsScreen.jsx`.

**Bonus confusion (not counted in the five):** the nav label is **“Reports”** but the route is **`/empty`**. Renaming the route or the label makes the product easier to talk about.
