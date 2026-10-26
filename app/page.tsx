import Link from "next/link";
import CopyBlock from "@/components/CopyBlock";
import { sampleFull, sampleSource } from "@/lib/sample";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>HUMAN.md</h1>
        <p className="lede">
          A page for the person using an agent package: what the agent will now do differently,
          and what stays your call.
        </p>
        <ul className="trio" aria-label="Three files, three readers">
          <li>
            <code>README.md</code> is for installing.
          </li>
          <li>
            <code>AGENTS.md</code> is for the agent.
          </li>
          <li>
            <code>HUMAN.md</code> is for you.
          </li>
        </ul>
        <p className="actions">
          <Link className="button" href="/template">
            Write one
          </Link>
          <Link href="/spec">Read the spec</Link>
        </p>
      </section>

      <section>
        <h2>Why</h2>
        <p>
          Each skill, extension or recipe that makes an agent more capable also changes how it works
          with you. An upgrade without understanding is drift. HUMAN.md ships with the upgrade so
          you stay in sync with it.
        </p>
      </section>

      <section>
        <h2>What&apos;s in it</h2>
        <p>
          Every HUMAN.md has four sections. A working sample, adapted from{" "}
          <Link href={sampleSource.href}>{sampleSource.name}</Link>:
        </p>
        <CopyBlock text={sampleFull} label="sample HUMAN.md" />
        <p>
          Packages that change how the agent reasons with you add more, including a{" "}
          <strong>How I think</strong> section you edit and the agent reads.{" "}
          <Link href="/spec#sections">All sections</Link>
        </p>
      </section>

      <section>
        <h2>First use case: bpm</h2>
        <p>
          The first packages to ship a HUMAN.md are on <a href="https://usebpm.dev">bpm</a>, the
          package manager for agent skills and tools. Each one sits next to the README and keeps the
          people using the package aligned with how it changes their agent.{" "}
          <Link href="/examples">See examples</Link>
        </p>
      </section>
    </>
  );
}
