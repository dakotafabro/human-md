import type { Metadata } from "next";
import Link from "next/link";
import CopyBlock from "@/components/CopyBlock";

export const metadata: Metadata = {
  title: "Using HUMAN.md with goose",
  description:
    "How goose loads context files, skills and @-imports, and three tested ways to get a HUMAN.md in front of goose.",
};

const importLine = `# AGENTS.md

The person using this repo describes how they work in @HUMAN.md`;

const envLine = `export CONTEXT_FILE_NAMES='["AGENTS.md", ".goosehints", "HUMAN.md"]'`;

const skillTree = `.agents/skills/tidy-notes/
├── SKILL.md
└── HUMAN.md`;

const skillPointer = `---
name: tidy-notes
description: Tidy a notes file. Use when asked to tidy notes.
---

# Tidy notes

Before the first step, read HUMAN.md in this skill folder for how
the person wants to work, and follow its How I think section.`;

const checkHuman = `# HUMAN.md

## How I think

I work best when a change comes with one sentence on why.
Code word: KESTREL-41.`;

const checkRun = `goose run --no-session -q --max-turns 1 -t "Without using any tools, quote the code word from the How I think section in your instructions, or say NONE if you have none."`;

export default function Goose() {
  return (
    <article className="prose">
      <h1>Using HUMAN.md with goose</h1>
      <p>
        goose doesn&apos;t read a HUMAN.md on its own. This page explains how goose decides what goes into its
        context, then shows three ways to give it your HUMAN.md, what each one costs, and how to check it worked.
      </p>
      <p className="meta">
        Tested with goose 1.56.0 on 2026-10-26. Behavior checked against <code>crates/goose/src/hints/load_hints.rs</code>{" "}
        on <a href="https://github.com/aaif-goose/goose">aaif-goose/goose</a> main and the goose docs on{" "}
        <a href="https://goose-docs.ai/docs/guides/context-engineering/using-goosehints/">hints</a> and{" "}
        <a href="https://goose-docs.ai/docs/guides/context-engineering/using-skills/">skills</a>.
      </p>

      <h2 id="what-goose-reads">What goose reads</h2>
      <ul>
        <li>
          <strong>Context files.</strong> By default goose looks for <code>AGENTS.md</code> and <code>.goosehints</code>.
          The <code>CONTEXT_FILE_NAMES</code> setting changes that list.
        </li>
        <li>
          <strong>Global and project hints.</strong> At session start goose loads each context file from{" "}
          <code>~/.config/goose/</code> (global hints), then from every folder between the git root and your working
          folder (project hints). When the two disagree, goose favors the project.
        </li>
        <li>
          <strong>Subfolders.</strong> When goose reads or edits a file in a subfolder of your working folder, it
          also loads that subfolder&apos;s context files.
        </li>
        <li>
          <strong>@-imports.</strong> A context file that mentions <code>@README.md</code> or{" "}
          <code>@docs/setup.md</code> pulls that file&apos;s text into context. Imports can nest up to three levels and
          can&apos;t reach outside the repo.
        </li>
        <li>
          <strong>Skills.</strong> goose finds skills in <code>~/.agents/skills/&lt;name&gt;/</code> and{" "}
          <code>.agents/skills/&lt;name&gt;/</code>, lists each one&apos;s name and description at session start, and
          loads the full <code>SKILL.md</code> when the skill is used. Other files in the skill folder are visible to
          goose but aren&apos;t loaded.
        </li>
      </ul>
      <p>
        A HUMAN.md is for the person, so it isn&apos;t on that list. Its <Link href="/spec#sections">How I think</Link>{" "}
        section is the part written for the agent, and the three options below are ways to hand it over.
      </p>

      <h2 id="import">1. Import it from AGENTS.md</h2>
      <p>For a repo or package. Anyone who clones it gets the same behavior, with nothing to configure.</p>
      <CopyBlock text={importLine} label="AGENTS.md import" />
      <ul>
        <li>goose loads the whole HUMAN.md into every session in the repo, as part of the project hints.</li>
        <li>
          That costs context every session, so keep the file short. The <Link href="/spec#writing">writing rules</Link>{" "}
          help.
        </li>
        <li>
          Use <code>.goosehints</code> instead of <code>AGENTS.md</code> if the import should only apply in goose.
        </li>
      </ul>

      <h2 id="context-file-names">2. Add HUMAN.md to CONTEXT_FILE_NAMES</h2>
      <p>For you, in every repo. Set it in your shell profile.</p>
      <CopyBlock text={envLine} label="CONTEXT_FILE_NAMES setting" />
      <ul>
        <li>
          The setting replaces the default list. Keep <code>AGENTS.md</code> and <code>.goosehints</code> in it, or goose
          stops reading them.
        </li>
        <li>
          goose then also loads <code>~/.config/goose/HUMAN.md</code> in every session. That&apos;s a place for a
          personal How I think that applies to everything you run.
        </li>
        <li>It loads a HUMAN.md at any level of a repo, including in subfolders goose works in.</li>
      </ul>

      <h2 id="skill">3. Point to it from a skill</h2>
      <p>For a goose skill. Keep the HUMAN.md beside the SKILL.md.</p>
      <CopyBlock text={skillTree} label="skill folder" />
      <p>
        goose loads only the SKILL.md, so say in it when to read the HUMAN.md. Then the agent reads it only when the
        skill runs, and it costs nothing in other sessions.
      </p>
      <CopyBlock text={skillPointer} label="SKILL.md pointer" />

      <h2 id="check">Check that it worked</h2>
      <p>Put a code word in How I think, then ask goose for it without letting it use tools.</p>
      <CopyBlock text={checkHuman} label="test HUMAN.md" />
      <CopyBlock text={checkRun} label="test command" />
      <p>What happened in each setup on goose 1.56.0, each in a fresh git repo:</p>
      <ul>
        <li>
          <strong>@-import from AGENTS.md:</strong> returned the code word and named AGENTS.md as where it came from.
        </li>
        <li>
          <strong>CONTEXT_FILE_NAMES with HUMAN.md:</strong> returned the code word.
        </li>
        <li>
          <strong>Skill pointer:</strong> after loading the skill, goose read the HUMAN.md in the skill folder.
        </li>
        <li>
          <strong>No import and no setting:</strong> returned NONE, so goose doesn&apos;t pick up a HUMAN.md on its own.
        </li>
      </ul>

      <h2 id="which">Which to use</h2>
      <ul>
        <li>Publishing a package or sharing a repo: import it from AGENTS.md.</li>
        <li>A goose skill: point to it from SKILL.md.</li>
        <li>Your own How I think across every package: CONTEXT_FILE_NAMES and a global HUMAN.md.</li>
      </ul>
    </article>
  );
}
