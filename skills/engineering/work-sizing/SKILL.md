---
name: work-sizing
description: Size an initiative, recursively decompose it into slices, and prepare a detailed-spec handoff.
disable-model-invocation: true
---

# Work Sizing

Find a useful work boundary before detailed specification. A slice is ready only when its likely specification and implementation tickets are manageable, not merely when the topic fits in one conversation.

## 1. Find the current slice

Use the user's request and supplied context to decide whether this is a new initiative or a continuation from an initiative map or slice brief.

- For a new problem, size the whole initiative.
- For a continuation, identify the initiative and selected slice from the supplied path, link, or conversation.
- If more than one initiative or slice fits, ask which one to use; do not choose on the user's behalf.
- For an existing initiative, offer the relevant next actions: size the current slice, select another slice, or hand off a ready slice. Include only actions that apply to the selected context.
- For a ready or provisional-ready slice, provide its detailed-spec handoff prompt when the user selects handoff.

This step is complete when the current initiative and slice are unambiguous and the user has chosen the applicable path.

## 2. Establish scope and evidence

Conduct a focused grilling session, asking one question at a time. Establish the information needed to estimate work and choose a useful boundary:

- outcomes and who or what benefits;
- included and excluded work;
- users, systems, and repository areas affected;
- dependencies, constraints, and sequencing;
- uncertainty and assumptions that could change the size.

Defer detailed story design and implementation decisions to `grill-with-docs`. When a relevant repository is available, perform bounded reconnaissance of the architecture and areas implicated by the slice. Read applicable domain guidance and decisions when present. Use repository evidence to refine estimates; do not require a repository or conduct a broad codebase tour.

Continue the discussion when missing information prevents a useful size recommendation. Do not present an unsupported estimate as certain.

This step is complete when the outcomes, boundaries, dependencies, constraints, uncertainty, and relevant context are clear enough to estimate, or the slice is explicitly left needing sizing.

## 3. Choose a sizing outcome

Choose one outcome for the current slice and explain the evidence and estimate:

- **Ready for detailed spec**: the scope is clear enough, and the likely ticket set and PR sizes are manageable.
- **Provisional ready for detailed spec**: the likely work appears manageable, but material assumptions or estimate uncertainty remain. Record what detailed grilling must validate.
- **Decompose further**: evidence indicates that the specification would likely produce substantially more than the soft ticket bound, or tickets would routinely exceed the PR-size constraint.
- **Needs sizing**: uncertainty still prevents a useful recommendation.

Estimate likely ticket count and changed lines per PR, with rationale and confidence. Treat approximately eight tickets per detailed specification as a soft upper bound, not a fixed limit. Plan each ticket around the owner's constraint of no more than 400 changed lines per PR. A small conversation is not evidence that the resulting specification or tickets are small. When uncertainty is material but there is no evidence of excessive size, use provisional readiness rather than decomposing speculatively.

This step is complete when one outcome is recommended with its evidence, estimates, rationale, and confidence.

## 4. Decompose oversized work

Prefer outcome-oriented slices that can be specified and delivered independently. Split by technical layer only when it is the clearest way to reduce risk or enforce sequencing.

- Set the oversized parent slice to `decomposed`.
- Give each slice exactly one parent in the hierarchy.
- Record cross-branch prerequisites as dependency links; do not duplicate a slice to express a dependency.
- Do not treat a dependent slice as independently ready until its prerequisite is complete or explicitly accounted for.
- Set each new child to `needs-sizing`. Size it in a separate run, recursively, until it is ready for detailed specification or needs further decomposition.
- Give each child a self-contained prompt to start another sizing run, carrying its initiative context, goal, boundaries, decisions, constraints, dependencies, and open questions.

This step is complete when the parent, children, dependencies, states, and next-run prompts form a coherent hierarchy.

## 5. Prepare initiative artifacts

Persist initiative outcomes under `.scratch/initiatives/<initiative-id>/`:

```text
map.md
slices/<slice-id>.md
```

Use lowercase, hyphenated identifiers. The map is the index and hierarchy source of truth; each slice brief holds its detailed context. Keep durable decisions and rationale, not a transcript.

The map records:

- initiative goal and concise context;
- the slice hierarchy, with one parent per slice;
- each slice's state: `needs-sizing`, `decomposed`, `ready-for-spec`, or `provisional-ready-for-spec`;
- cross-branch dependency links;
- links to slice briefs;
- optional links to downstream specifications and tickets when they exist.

Each slice brief records:

- slice identifier, parent, state, and initiative context;
- goal, expected outcome, in-scope and out-of-scope boundaries;
- confirmed decisions and relevant constraints;
- dependencies and affected repository areas, when known;
- likely ticket count and PR-size considerations, with rationale and confidence;
- open questions and unresolved assumptions;
- child-slice links or downstream specification/ticket links, when available;
- a copyable prompt to resume sizing when the slice is not ready;
- for a ready leaf, a copyable detailed-spec handoff prompt.

Before creating or changing any persisted artifact, show the proposed map and brief changes and ask the user to approve them. Write only after approval. If repository persistence is unavailable, present the equivalent proposed map and briefs in chat. If the user does not approve, leave existing artifacts unchanged.

This step is complete when approved changes are persisted, or the complete proposal is delivered in chat when persistence is unavailable or not approved.

## 6. Hand off a ready leaf

For a ready or provisional-ready leaf, provide a self-contained, copyable prompt that carries the agreed context into `grill-with-docs -> to-spec -> to-tickets`. Include provisional assumptions and validation questions when applicable. Tell the next workflow to create the detailed specification and implementation tickets.

Stop at this handoff. Do not create the detailed specification or tickets, launch sessions, track implementation, or require the downstream skills to be installed in this repository.

This step is complete when the user has the copyable prompt; sizing for this leaf ends there.
