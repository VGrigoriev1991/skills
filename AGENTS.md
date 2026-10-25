## Agent skills

### Issue tracker

Issues and specifications are tracked as Markdown files under `.scratch/`. See `docs/agents/issue-tracker.md`.

### Triage labels

Use the canonical state labels `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, and `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

This is a single-context repository. See `docs/agents/domain.md`.

## Skill authoring and publication

- Store each skill at `skills/engineering/<skill-name>/SKILL.md`.
- Use portable Agent Skills frontmatter: `name` matches the lowercase, hyphenated directory name; `description` states what the skill does and when to use it.
- Add supporting references, scripts, or assets only when a skill needs them.
- Treat a skill as a draft until its directory is listed in the Claude plugin manifest and its entry appears in the README catalog. Keep those two published-skill lists synchronized.
- The Claude Code plugin initially contains skills only; defer other plugin components and per-skill client-specific metadata until needed.
