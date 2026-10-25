Status: ready-for-agent

# Initial Skills Plugin Setup

## Problem Statement

The repository is intended to host reusable AI skills, but it does not yet provide a consistent way to author skills, expose completed skills to users, or install the collection as a plugin. Without a standard layout and publication workflow, skills may be difficult to discover, inconsistent in format, or accidentally exposed before they are ready.

The repository owner wants a setup inspired by `mattpocock/skills`: a single engineering category for skills, portable Agent Skills content, and an installable Claude Code plugin, while documenting how users of other compatible clients can use the portable skill files.

## Solution

Establish the repository as a skills-only Claude Code plugin and marketplace. Skills are authored under one engineering category in the Agent Skills format. A skill remains a draft until explicitly listed in the plugin package and README catalog; only completed, promoted skills are exposed to plugin users.

Provide user-facing installation and usage guidance, agent-facing authoring and publication rules, and automated checks in GitHub Actions. The plugin can be initialized before any skills exist and becomes useful as skills are promoted.

## User Stories

1. As a repository owner, I want one predictable location for engineering skills, so that authors know where to create each skill.
2. As a skill author, I want each skill to have its own directory and `SKILL.md`, so that its instructions and any supporting material stay together.
3. As a skill author, I want to use the portable Agent Skills frontmatter format, so that compatible clients can understand the skill independently of Claude Code.
4. As a skill author, I want the skill name to match its lowercase, hyphenated directory name, so that the skill has an unambiguous identity.
5. As a skill author, I want each skill description to explain its purpose and when it should be used, so that people and compatible clients can discover it.
6. As a skill author, I want supporting references, scripts, and assets to be optional, so that simple skills do not require unnecessary scaffolding.
7. As a maintainer, I want unfinished skills to remain drafts by default, so that work in progress is not distributed accidentally.
8. As a maintainer, I want publication to require explicitly listing a skill in the plugin package and README catalog, so that promotion is deliberate.
9. As a maintainer, I want the plugin manifest and README catalog to list the same published skills, so that installation and discovery information remain consistent.
10. As a Claude Code user, I want to add the repository as a marketplace and install its plugin, so that I can obtain the published skills through Claude Code's plugin system.
11. As a Claude Code user, I want clear instructions for updating or uninstalling the plugin, so that I can manage its lifecycle after installation.
12. As a user of Codex, I want separate instructions for using the portable skill files, so that I can benefit from the skills without being told that the Claude plugin installs there.
13. As a GitHub Copilot user, I want separate instructions for using the portable skill files, so that I can use compatible skills through the supported Copilot workflow.
14. As a VS Code user, I want separate instructions for using the portable skill files, so that I can use compatible skills through the supported VS Code workflow.
15. As a Gemini CLI user, I want separate instructions for using the portable skill files, so that I can use compatible skills through the supported Gemini CLI workflow.
16. As a user browsing the repository, I want a catalog containing each published skill and a concise description, so that I can choose the skill relevant to my task.
17. As a maintainer, I want a valid plugin package before the first skill is ready, so that plugin installation and marketplace setup can be established independently from skill creation.
18. As a maintainer, I want plugin metadata to identify the plugin, author, repository, description, license, and version, so that the package is identifiable and complete.
19. As a maintainer, I want the plugin and marketplace to start at version `0.1.0`, so that the first published package has a clear baseline.
20. As a maintainer, I want to bump versions manually using Semantic Versioning, so that version changes reflect intentional changes without requiring release automation.
21. As a contributor, I want the repository's agent instructions to describe the skill layout, metadata, draft status, and promotion rules, so that agents make consistent changes.
22. As a Claude Code contributor, I want Claude Code's project instructions to load the canonical agent guidance rather than duplicate it, so that instructions have one source of truth.
23. As a maintainer, I want pull requests and default-branch pushes to validate the marketplace and plugin, so that invalid plugin metadata is caught before or after integration.
24. As a maintainer, I want CI to validate each published skill against the portable Agent Skills format, so that invalid names or frontmatter are caught automatically.
25. As a maintainer, I want plugin validation and skill-format validation to run at the repository boundary, so that checks validate the package users will consume rather than internal implementation details.
26. As a maintainer, I want the existing repository-level MIT license to remain authoritative, so that the plugin does not introduce a second license system.
27. As a maintainer, I want the plugin to contain skills only initially, so that commands, hooks, subagents, and MCP configuration are not added without a concrete need.

## Implementation Decisions

- Organize skill content under one `engineering` category, with one child directory per skill and an uppercase `SKILL.md` as the entry point.
- Use Agent Skills format for portable skill content. Each skill's required `name` and `description` metadata must follow the format's validation constraints; the name matches its directory.
- Package the repository as a skills-only Claude Code plugin and expose it through a repository-owned Claude Code marketplace.
- Use marketplace identifier `vgrigoriev1991` and plugin identifier `vgrigoriev-skills`.
- Keep the plugin skill list explicit and curated. Only skills promoted by adding them to the plugin list and README catalog are published; unlisted skill directories are drafts.
- Permit an empty skill list in the initial plugin package; do not add a placeholder skill.
- Include complete plugin metadata: name, description, author, repository URL, MIT license, and version. The initial version is `0.1.0`; maintainers update versions manually using Semantic Versioning.
- Keep the repository's existing MIT license. Individual skills omit license metadata unless a future skill requires different terms.
- Make the README the user-facing source of truth for installation guidance and the published-skill catalog. Explain Claude Code plugin installation and lifecycle separately from use of portable skill files in Codex, GitHub Copilot, VS Code, and Gemini CLI. Verify each client's current usage instructions when implementing that guidance.
- Add root-level authoring guidance for the skill layout, metadata, supporting files, publication boundary, and synchronization of the plugin list and README catalog. Claude Code project instructions import this canonical guidance rather than duplicating it.
- Add GitHub Actions validation on pull requests and pushes to the repository's default branch. Validate the marketplace and plugin separately with Claude Code's strict plugin validator, then run the Agent Skills reference validator against each published skill.
- Treat the Agent Skills reference validator as a secondary format check; its maintainers describe it as a demonstration reference library rather than a production-supported tool.
- Preserve the existing repository MIT license and avoid adding client-specific per-skill metadata until a concrete client need arises.

## Testing Decisions

- Use one repository-level CI seam that validates the published package and its portable skill files. Tests should assert externally observable validity of the metadata and skill format, not implementation details of the workflow.
- Run Claude Code's strict validator separately against the marketplace catalog and plugin package. This catches invalid marketplace/plugin metadata and issues in the packaged components.
- Run `skills-ref validate` for every skill listed in the plugin manifest. Do not validate unpromoted draft directories as published skills.
- Run the checks for pull requests and pushes to the default branch. Validation must fail the workflow when either validator reports an error.
- The repository has no existing test suite or comparable validation workflow to extend; this CI seam is the initial validation prior art.
- The validator checks do not by themselves guarantee that the README catalog and plugin skill list are synchronized. The authoring guidance requires maintainers to update both when promoting or withdrawing a skill.

## Out of Scope

- Creating the first actual skill or any placeholder/example skill.
- GitHub Issues as the tracker; repository specifications and issues use the existing local Markdown convention.
- Integrating with a central Claude marketplace or building client-specific plugin packages for other clients.
- Claude Code commands, hooks, subagents, MCP configuration, or other non-skill plugin components.
- Per-skill client metadata unless a concrete client requires it.
- Automatic releases, tags, version bumps, changelog generation, or release automation.
- Contribution templates, additional skill categories, glossaries, ADRs, or other governance systems.
- An automated check that compares README catalog membership with plugin manifest membership; synchronization is a documented maintainer responsibility for this initial setup.

## Further Notes

- The design is based on the repository owner's discussion of `mattpocock/skills`, while adopting only the packaging and discovery patterns relevant to an initially small, single-category skills collection.
- Claude Code's plugin distribution is specific to Claude Code. Documentation for other clients must describe use of the portable skill files separately and must not imply that the Claude Code plugin installs into those clients.
- The `skills-ref` check is intentionally accepted despite its demonstration-only support status; replacing it with a production-grade validator is a future option if the repository's needs change.
