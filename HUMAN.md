# human-md - what changes for you

This repo is the HUMAN.md format, its docs site, and the human-md-starter package. Installing the starter gives you a HUMAN.md to fill in for a configuration you already have, and tells your agent to leave that file to you and read its How I think section. This page is for you, not the agent.

## Reserved for human judgment

What goes in your HUMAN.md is yours: which sections to keep, how you describe what stays your call, and whether to write a How I think at all. The starter only gives prompts. The agent shouldn't fill them in for you, because the page is meant to say what you expect, in your words.

## What it reads, writes and sends

- Reads: the agent reads your HUMAN.md, and its How I think section when you point to it.
- Writes: nothing. You copy the starter into place yourself.
- Sends: nothing documented. The starter is plain Markdown with no scripts.

## Turn it off

Delete the pointer to HUMAN.md from your SKILL.md or AGENTS.md, and the agent stops reading it. To remove the starter, `bpm remove human-md-starter`.
