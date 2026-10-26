import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { exampleHtml, examples } from "@/lib/examples";

export const dynamicParams = false;

export function generateStaticParams() {
  return examples.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const e = examples.find((x) => x.slug === slug);
  return { title: e ? `${e.name} example` : "Example" };
}

export default async function ExamplePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const e = examples.find((x) => x.slug === slug);
  if (!e) notFound();

  return (
    <article className="prose">
      <p className="meta">
        <Link href="/examples">Examples</Link> / {e.name}
      </p>
      <p className="source">
        From{" "}
        <a href={`https://github.com/${e.repo}/blob/${e.commit}/HUMAN.md`}>
          {e.repo} at {e.commit}
        </a>
        . On bpm: <a href={`https://usebpm.dev/packages/${e.slug}`}>usebpm.dev/packages/{e.slug}</a>.
      </p>
      {e.note && <p className="meta">{e.note}</p>}
      <div className="example" dangerouslySetInnerHTML={{ __html: exampleHtml(e.slug) }} />
    </article>
  );
}
