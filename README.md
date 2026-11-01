# VGrigoriev Skills

Portable engineering skills, authored in the [Agent Skills](https://agentskills.io) format and distributed through a skills-only Claude Code plugin.

## Claude Code

Add this repository's marketplace and install its plugin:

```sh
claude plugin marketplace add VGrigoriev1991/skills
claude plugin install vgrigoriev-skills@vgrigoriev1991
```

To update the plugin, refresh the marketplace and then update the plugin:

```sh
claude plugin marketplace update vgrigoriev1991
claude plugin update vgrigoriev-skills@vgrigoriev1991
```

To uninstall the plugin and remove the marketplace:

```sh
claude plugin uninstall vgrigoriev-skills@vgrigoriev1991
claude plugin marketplace remove vgrigoriev1991
```

The [published skills catalog](#published-skills) is the source of truth for the skills included in the plugin. Only skills listed in both that catalog and `.claude-plugin/plugin.json` are published.

The root `package.json` version is authoritative for the plugin release. Use `npm run changeset` to record the intended SemVer bump. The release workflow prepares a version pull request and synchronizes `.claude-plugin/plugin.json` from the package version. The marketplace catalog does not carry a version.

SemVer policy: patch for fixes and non-user-facing maintenance, minor for new skills and backward-compatible capabilities, and major for published-skill removals or other breaking compatibility changes.

## Use portable skills in other clients

The Claude Code plugin installs only into Claude Code. Other clients use the portable skill directories directly; copy only published skill directories, not drafts. Replace `<skill-name>` with a name from the catalog.

### Codex

Copy a skill into a project-level `.agents/skills/` directory, or into `~/.agents/skills/` for your user account:

```sh
mkdir -p .agents/skills
cp -R skills/engineering/<skill-name> .agents/skills/<skill-name>
```

Codex discovers skills in `.agents/skills/` directories from the current directory through the repository root. See [Codex skills](https://developers.openai.com/codex/skills/).

### GitHub Copilot

For a project skill, copy it into `.github/skills/`:

```sh
mkdir -p .github/skills
cp -R skills/engineering/<skill-name> .github/skills/<skill-name>
```

Copilot also supports `.claude/skills/` and `.agents/skills/` in supported surfaces; personal skills can be stored in `~/.copilot/skills/` or `~/.agents/skills/`. Locations vary by Copilot surface, so follow its setup guide. See [Agent skills for Copilot](https://docs.github.com/en/copilot/concepts/customizations/agent-skills).

### Visual Studio Code

For a workspace skill, copy it into `.github/skills/` or `.agents/skills/`:

```sh
mkdir -p .github/skills
cp -R skills/engineering/<skill-name> .github/skills/<skill-name>
```

VS Code also discovers project skills in `.claude/skills/` and personal skills in `~/.copilot/skills/`, `~/.claude/skills/`, or `~/.agents/skills/`. See [Use Agent Skills in VS Code](https://code.visualstudio.com/docs/agent-customization/agent-skills).

### Gemini CLI

Copy a workspace skill into `.agents/skills/` or `.gemini/skills/`:

```sh
mkdir -p .agents/skills
cp -R skills/engineering/<skill-name> .agents/skills/<skill-name>
```

Gemini CLI discovers workspace skills in both locations. Run `/skills list` to see discovered skills. See [Gemini CLI Agent Skills](https://github.com/google-gemini/gemini-cli/blob/main/docs/cli/skills.md).

## Published skills

- [work-sizing](skills/engineering/work-sizing/SKILL.md) — Size an initiative, recursively decompose it into slices, and prepare a detailed-spec handoff.
