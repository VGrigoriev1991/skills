Status: ready-for-agent

# 04: Validate the published package in CI

**What to build:** Automated checks that prevent invalid marketplace, plugin, or published skill metadata from passing pull requests or default-branch pushes.

**Blocked by:** 01: Create the empty Claude Code marketplace package; 02: Define skill authoring and deliberate publication.

- [ ] GitHub Actions runs on pull requests and pushes to the repository's default branch.
- [ ] Claude Code's strict validator checks the marketplace catalog and plugin package separately, and the Agent Skills reference validator checks every skill listed in the plugin manifest.
- [ ] Any validator error fails the workflow, and unpromoted draft directories are not validated as published skills.
