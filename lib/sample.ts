export const sampleSource = {
  name: "learning-mode",
  href: "/examples/learning-mode",
};

export const sampleSections = [
  {
    name: "What changes for you",
    what: "What the agent does differently now. One or two sentences under the title.",
    md: `# learning-mode - what changes for you

learning-mode changes what the agent is trying to do. Instead of getting the code written fast, it tries to leave you more capable at the end of the session. This page is for you, not the agent.`,
  },
  {
    name: "Reserved for human judgment",
    what: "The decisions that stay with the person, and why.",
    md: `## Reserved for human judgment

Your DOK levels and tiers are yours to set and update. When the agent says you might be ready for the next tier, you decide.`,
  },
  {
    name: "What it reads, writes and sends",
    what: 'Files, settings and anything that leaves the machine. Say "not documented" rather than guess.',
    md: `## What it reads, writes and sends

- Reads a \`dok-tracker.md\` you keep in your own repo, plus an optional session log.
- You set paths in your AGENTS.md or CLAUDE.md, never in the installed skill files.
- Network use: not documented.`,
  },
  {
    name: "Turn it off",
    what: "For one session, and for good.",
    md: `## Turn it off

Say "ship mode" to return to normal execution for the session. To remove it, \`bpm remove learning-mode\`.`,
  },
];

export const sampleFull = sampleSections.map((s) => s.md).join("\n\n") + "\n";
