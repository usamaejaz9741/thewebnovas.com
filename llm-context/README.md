# llm-context — How to Maintain These Docs

This folder contains a reusable, evidence-backed memory pack for future AI agents and contributors. It summarizes the project’s purpose, stack, structure, architecture, workflow, conventions, risks, and safe-change guidance.

## Files
- 00–09 numbered Markdown files: each focuses on a single topic for quick retrieval.
- Keep files concise, practical, and tied to concrete repository evidence.

## Update Guidelines
- Prefer small, incremental edits over large rewrites.
- When adding or changing guidance, cite concrete files/paths that exist in this repo.
- If something can’t be verified locally, write: “Not confirmed from repository evidence.”
- Avoid editing minified vendor code references unless they’re being replaced project-wide.

## Link Style
- Use workspace-relative links, e.g.:
  - [index.html](../index.html)
  - [assets/js/custom.min.js](../assets/js/custom.min.js)
- Do not use file:// URIs, drive letters, or inline code ticks for file links.

## Verification Checklist
- After changes, quickly confirm linked paths exist in the repo.
- Open affected pages in a local HTTP server to verify no new errors appear.

## Conventional Commits
- Use a clear type/scope when committing updates to this folder. Examples:
  - `docs(llm-context): add initial context pack`
  - `docs(llm-context): update architecture and workflow`
  - `docs(llm-context): fix broken links in repository map`

## Local Preview
Run a static server from the repository root to test referenced paths in-browser:

```bash
python -m http.server 8080
# then open http://localhost:8080/
```

## Ownership
- Treat this as living documentation. Update it whenever you learn something new that future agents/contributors should know.
