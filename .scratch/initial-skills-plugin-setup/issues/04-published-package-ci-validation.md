Type: task
Status: resolved

# 04: Validate the published package in CI

**What to build:** Automated checks that prevent invalid marketplace, plugin, or published skill metadata from passing pull requests or default-branch pushes.

**Blocked by:** 01: Create the empty Claude Code marketplace package; 02: Define skill authoring and deliberate publication.

- [x] GitHub Actions runs on pull requests and pushes to the repository's default branch.
- [x] Claude Code's strict validator checks the marketplace catalog and plugin package separately, and the Agent Skills reference validator checks every skill listed in the plugin manifest.
- [x] Any validator error fails the workflow, and unpromoted draft directories are not validated as published skills.

## Answer

Added `.github/workflows/validate-skills-plugin.yml` to validate the marketplace and a plugin-only package separately with Claude Code's strict validator, then run `skills-ref validate` only for paths in the plugin manifest. It runs on pull requests and pushes to `main`. See [the implementation map](../map.md#decisions-so-far).
