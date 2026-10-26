import type { Metadata } from "next";
import Link from "next/link";
import CopyBlock from "@/components/CopyBlock";
import { coreTemplate, fullTemplate } from "@/lib/template";

export const metadata: Metadata = {
  title: "Template",
  description: "Copy a HUMAN.md template: the core four sections, or the full shape for packages that change how the agent reasons with you.",
};

export default function Template() {
  return (
    <article className="prose">
      <h1>Template</h1>
      <p>
        Copy one into <code>HUMAN.md</code> at your package root, fill in the angle brackets, and
        link it from your README. <Link href="/spec#when">Which one do I need?</Link>
      </p>

      <h2>Core</h2>
      <p>For a package that adds new behavior.</p>
      <CopyBlock text={coreTemplate} label="core template" />

      <h2>Full</h2>
      <p>
        For a package that changes defaults or how the agent reasons with you. It adds how to read
        it, when to override it, what the agent learns about you, and a How I think section.
      </p>
      <CopyBlock text={fullTemplate} label="full template" />
    </article>
  );
}
