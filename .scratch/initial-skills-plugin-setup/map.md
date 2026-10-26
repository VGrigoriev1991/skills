# Initial Skills Plugin Setup

## Decisions so far

- The repository root is both the Claude Code marketplace root and the plugin root, so published skills can use the canonical `skills/engineering/<skill-name>/SKILL.md` layout without duplicated content. The marketplace catalog is `.claude-plugin/marketplace.json`; the plugin manifest is `.claude-plugin/plugin.json`.
- The initial package uses marketplace identifier `vgrigoriev1991`, plugin identifier `vgrigoriev-skills`, version `0.1.0`, and an explicit empty `skills` array. No placeholder skill or second license file is added; the existing root `LICENSE` remains authoritative.
- `AGENTS.md` is the canonical skill-authoring guide, and the existing root `CLAUDE.md` imports it. A skill is published only when its directory is listed in the plugin manifest and README catalog.
- `README.md` documents Claude Code plugin lifecycle separately from using portable skill folders in Codex, GitHub Copilot, VS Code, and Gemini CLI.
- `.github/workflows/validate-skills-plugin.yml` runs strict marketplace and plugin validation plus `skills-ref` validation for only manifest-listed skills on pull requests and pushes to `main`.
