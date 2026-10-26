import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="hero">
        <h1>HUMAN.md</h1>
        <p className="lede">
          A page for the person using an agent package. It says what the agent will now do
          differently, what stays your call, what the package touches, and how to turn it off.
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
        <h2>Why it exists</h2>
        <p>
          Every time a skill, extension or recipe makes an agent more capable, it also changes how
          the agent works with you. It might ask questions where it used to answer, keep memory
          between sessions, or stop at a step it used to take on its own. If nobody tells the
          person, the agent and the person drift apart.
        </p>
        <p>
          An upgrade without understanding is drift. HUMAN.md is the counterpart that ships with
          the upgrade, so the person stays in sync with how it shapes the agent&apos;s behavior and
          reasoning.
        </p>
      </section>

      <section>
        <h2>What goes in it</h2>
        <p>Four sections every HUMAN.md has:</p>
        <ol>
          <li>
            <strong>What changes for you.</strong> What the agent does differently once this is
            installed.
          </li>
          <li>
            <strong>Reserved for human judgment.</strong> The decisions that stay with you, and why.
          </li>
          <li>
            <strong>What it reads, writes and sends.</strong> So you can decide whether to trust it.
          </li>
          <li>
            <strong>Turn it off.</strong> For one session, and for good.
          </li>
        </ol>
        <p>
          A package that changes how the agent reasons with you goes further: how to read what it
          produces, when to override it, what the agent learns about you, and a section you edit
          yourself. <Link href="/spec#sections">See the sections</Link>.
        </p>
      </section>

      <section>
        <h2>It teaches</h2>
        <p>
          A HUMAN.md is not a changelog or an announcement. It&apos;s written to you, in plain
          language, about what to watch for. And sync runs both ways: the{" "}
          <strong>How I think</strong> section is yours to edit, and the agent reads it, so it can
          work alongside how you approach a problem instead of replacing it.
        </p>
      </section>

      <section>
        <h2>First use case: bpm</h2>
        <p>
          Each of Dakota&apos;s <a href="https://usebpm.dev">bpm</a> packages has a HUMAN.md in its
          repo, next to the README.{" "}
          <Link href="/examples">Read three of them</Link>.
        </p>
      </section>
    </>
  );
}
