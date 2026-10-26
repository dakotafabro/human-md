import { readFileSync } from "node:fs";
import path from "node:path";
import { marked } from "marked";

export type Example = {
  slug: string;
  name: string;
  repo: string;
  commit: string;
  shape: string;
  why: string;
  note?: string;
};

export const examples: Example[] = [
  {
    slug: "possibility-matrix",
    name: "possibility-matrix",
    repo: "dakotafabro/possibility-matrix",
    commit: "1364f6d",
    shape: "Changes how the agent reasons with you",
    why: "Every recommended section, including How I think.",
    note: "This file was first shared with the possibility-matrix package in aaif/ambassadors#1142.",
  },
  {
    slug: "learning-mode",
    name: "learning-mode",
    repo: "dakotafabro/learning-mode",
    commit: "5471009",
    shape: "Changes what the agent is trying to do",
    why: "Core sections, cost and a quick check.",
  },
  {
    slug: "spore",
    name: "spore",
    repo: "dakotafabro/spore",
    commit: "ff7ee30",
    shape: "Adds memory the agent carries between sessions",
    why: "Most of it covers what it reads, writes and keeps.",
  },
];

export function exampleHtml(slug: string): string {
  const file = path.join(process.cwd(), "content", "examples", `${slug}.md`);
  const source = readFileSync(file, "utf8");
  return marked.parse(source, { async: false });
}
