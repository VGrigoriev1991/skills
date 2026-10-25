# Issue tracker: Local Markdown

Issues and specifications for this repo live in `.scratch/`.

## Conventions

- One feature per directory: `.scratch/<feature-slug>/`
- The specification is `.scratch/<feature-slug>/spec.md`
- Implementation issues are separate files: `.scratch/<feature-slug>/issues/<NN>-<slug>.md`, numbered from `01`
- Triage state is recorded in a `Status:` line near the top of each issue file, using the strings in `triage-labels.md`
- Append comments and conversation history under a `## Comments` heading

## Publishing and fetching

When a skill says to publish to the issue tracker, create a file under `.scratch/<feature-slug>/`, creating the directory if needed. When asked to fetch a ticket, read the referenced path; the user will normally provide the path or issue number.

## Wayfinding

- Map: `.scratch/<effort>/map.md`
- Child ticket: `.scratch/<effort>/issues/NN-<slug>.md`, numbered from `01`
- A child ticket has a `Type:` line (`research`, `prototype`, `grilling`, or `task`) and a `Status:` line (`claimed` or `resolved`)
- `Blocked by: NN, NN` lists prerequisite ticket numbers. A ticket is unblocked when all listed tickets are resolved.
- The frontier is the open, unblocked, unclaimed tickets; choose the first by number.
- Claim by setting `Status: claimed` and saving before work. Resolve by recording the answer under `## Answer`, setting `Status: resolved`, and adding a context pointer to the map's Decisions-so-far.
