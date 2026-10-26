import type { Metadata } from "next";
import Link from "next/link";
import { examples } from "@/lib/examples";

export const metadata: Metadata = {
  title: "Examples",
  description: "Real HUMAN.md files from bpm packages.",
};

export default function Examples() {
  return (
    <article className="prose">
      <h1>Examples</h1>
      <p>
        The first use case is <a href="https://usebpm.dev">bpm</a>, a package manager for agent
        skills and tools. Each of Dakota&apos;s bpm packages has a HUMAN.md in its repo. These
        three show the range, copied as they are from each repo at the commit shown.
      </p>
      <ul className="cards">
        {examples.map((e) => (
          <li key={e.slug}>
            <h2>
              <Link href={`/examples/${e.slug}`}>{e.name}</Link>
            </h2>
            <p className="meta">{e.shape}</p>
            <p>{e.why}</p>
          </li>
        ))}
      </ul>
    </article>
  );
}
