# Foundry Learning OS

A private, governed learning operating system for mastering agentic AI and building controlled agent-generation systems.

## Product surfaces

- Private local profile entry
- Mastery dashboard and lesson-review queue
- Fourteen-module course library with video and written instruction
- Slide deck, flashcard, podcast, and video studios
- Evidence reviews, quizzes, labs, and mastery defenses
- Portable artifact workspace
- Obsidian vault export
- Notion planning and review control plane
- GitHub versioned source and deployment workflow

## Hydrate the source

The repository stores its generated application source in a compressed, versioned bundle.

```bash
node hydrate-source.mjs
npm ci
npm run dev
```

## Validate

```bash
npm run lint
npm run build
```

## Deploy

`.github/workflows/deploy-pages.yml` hydrates the source, runs quality gates, builds the application, and deploys `dist/` through GitHub Pages.

## Lecture media

The GitHub edition uses generated course posters and retains every written lesson, lab, quiz, answer key, and studio workflow. The complete distribution package includes the full fourteen-video MP4 lecture library and can be copied over `public/course/videos/` after hydration.

## Governance boundary

The browser application runs local-first. Generated artifacts remain drafts until reviewed. Direct remote writes, production identity, and provider-backed media generation require separately governed server-side adapters and credentials; no secrets are embedded in this repository.
