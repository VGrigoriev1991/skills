Status: ready-for-agent

# 02: Define skill authoring and deliberate publication

**What to build:** A consistent authoring path for portable engineering skills, with a clear boundary that keeps unfinished skills out of the distributed plugin.

**Blocked by:** 01: Create the empty Claude Code marketplace package.

- [ ] Each skill has its own directory under the engineering category and an uppercase `SKILL.md` entry point using portable Agent Skills frontmatter; the skill name matches its lowercase, hyphenated directory name and its description explains purpose and when to use it.
- [ ] Supporting references, scripts, and assets remain optional; unlisted skill directories are drafts, and publishing or withdrawing a skill requires updating both the explicit plugin list and README catalog.
- [ ] Canonical repository agent guidance describes the layout, metadata, draft status, and promotion rules, and Claude Code project instructions load that guidance rather than duplicating it.
