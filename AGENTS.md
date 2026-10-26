## Agent skills

### Issue tracker

Issues and specifications are tracked as Markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the canonical state labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. See `docs/agents/domain.md`.

## Skill authoring and publication

- Store each skill at `skills/engineering/<skill-name>/SKILL.md`.
- Use portable [Agent Skills](https://agentskills.io/specification) frontmatter with a `name` matching the lowercase, hyphenated directory name and a `description` explaining the skill's purpose and when to use it.
- Supporting references, scripts, and assets are optional; add them only when useful.
- Treat every skill as a draft unless its directory is explicitly listed in `.claude-plugin/plugin.json` and the skill also appears in the README catalog.
- Publish or withdraw a skill by updating both the plugin's explicit skill list and the README catalog in the same change. Keep their published-skill lists synchronized.
- The Claude Code plugin initially contains skills only; defer other plugin components and per-skill client-specific metadata until needed.
