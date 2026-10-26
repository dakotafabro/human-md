# human-md-starter

Starter files for adding a HUMAN.md to an agent configuration you already have: a skill, a plugin, a recipe, an MCP server, or your own AGENTS.md setup. A HUMAN.md is the page for the person: what the agent now does differently, what stays their call, what it reads, writes and sends, and how to turn it off. Format: https://human.dakotafabro.dev/spec

## Add it to your configuration

1. Copy `HUMAN.core.md` to the root of your configuration as `HUMAN.md`. Use `HUMAN.full.md` instead if you want the optional sections, including How I think.
2. Replace each `<...>` prompt with your own words, and delete any line that doesn't apply.
3. If you filled in How I think, point your agent at it, for example from SKILL.md or AGENTS.md: "Before working with the person, read HUMAN.md and follow its How I think section."

## For the agent

A HUMAN.md in this project is written by the person, for the person. Don't edit it unless they ask. When it has a How I think section, read it before working with them and follow it.
