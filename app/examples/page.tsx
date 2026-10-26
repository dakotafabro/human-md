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
        From <a href="https://usebpm.dev">bpm</a> packages, copied as they are at the commit shown.
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
