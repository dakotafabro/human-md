# HUMAN.md

HUMAN.md is a page for the person using an agent package: what the agent will now do differently, what stays their call, what the package reads, writes and sends, and how to turn it off.

`README.md` is for installing. `AGENTS.md` is for the agent. `HUMAN.md` is for you.

This repo holds the format and its docs site, https://human.dakotafabro.dev.

- Spec: [app/spec/page.tsx](app/spec/page.tsx), version 0.1 (draft)
- Templates: [lib/template.ts](lib/template.ts), the source for the site and for [templates/](templates/)
- Examples: [content/examples/](content/examples/), copied from bpm packages at the commits listed in [lib/examples.ts](lib/examples.ts)

## human-md-starter

The [templates/](templates/) folder is published to the bpm registry as `human-md-starter`, for people adding a HUMAN.md to an agent configuration they already have. `npm run templates` regenerates `templates/HUMAN.core.md` and `templates/HUMAN.full.md` from `lib/template.ts`, and `npm run build` fails when they're out of date. A format change ships as a new package version: bump `version` in `bpm.json` and run `bpm publish`.

## Run it

```
npm ci
npm run dev
```

`npm run build` writes a static site to `out/`. Checks: `npm run lint` and `npm run typecheck`.

## License

Apache 2.0.
