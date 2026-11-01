# VGrigoriev Skills

Portable engineering skills by Vladimir Grigoriev, authored in the [Agent Skills](https://agentskills.io) format.

## Installation

Choose one installation method per agent. Plugin installs are managed through each agent's marketplace; `skills.sh` copies editable files into your project, which you update manually. Installing both gives you every skill twice.

### Claude Code

```sh
claude plugin marketplace add VGrigoriev1991/skills
claude plugin install vgrigoriev-skills@vgrigoriev1991
```

Updates are available after refreshing the marketplace:

```sh
claude plugin marketplace update vgrigoriev1991
claude plugin update vgrigoriev-skills@vgrigoriev1991
```

### Codex

```sh
codex plugin marketplace add VGrigoriev1991/skills
codex plugin add vgrigoriev-skills@vgrigoriev1991
```

### GitHub Copilot (CLI and VS Code)

```sh
copilot plugin marketplace add VGrigoriev1991/skills
copilot plugin install vgrigoriev-skills@vgrigoriev1991
```

Then, once, add the marketplace to `~/.copilot/settings.json`:

```json
{
  "extraKnownMarketplaces": {
    "vgrigoriev1991": {
      "source": { "source": "github", "repo": "VGrigoriev1991/skills" },
      "autoUpdate": true
    }
  }
}
```

In VS Code, run **Chat: Install Plugin From Source** and enter `https://github.com/VGrigoriev1991/skills`.

### Gemini CLI

```sh
gemini skills install https://github.com/VGrigoriev1991/skills.git --path skills/engineering
```

Re-run the command to update.

### Other agents or editable files

```sh
npx skills@latest add VGrigoriev1991/skills -a <agent>
```

Replace `<agent>` with your agent name (for example, `cursor`, `opencode`, `windsurf`, or `amp`), or omit `-a` to choose interactively. Select `work-sizing` when prompted. To update, run `npx skills@latest update`.

## Plugin releases

The root `package.json` version is authoritative for plugin releases. Use `npm run changeset` to record the intended SemVer bump. The release workflow prepares a version pull request and synchronizes `.claude-plugin/plugin.json` from the package version. The marketplace catalog does not carry a version.

SemVer policy: patch for fixes and non-user-facing maintenance, minor for new skills and backward-compatible capabilities, and major for published-skill removals or other breaking compatibility changes.

## Published skills

The published skills catalog is the source of truth for the skills included in the plugin. Only skills listed in both this catalog and `.claude-plugin/plugin.json` are published.

- [work-sizing](skills/engineering/work-sizing/SKILL.md) - Size an initiative, recursively decompose it into slices, and prepare a detailed-spec handoff.
