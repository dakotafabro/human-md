"use client";

import { useState } from "react";

export default function CopyBlock({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="copyblock">
      <button type="button" onClick={copy} aria-label={`Copy ${label}`}>
        {copied ? "Copied" : "Copy"}
      </button>
      <pre>
        <code>{text}</code>
      </pre>
      <span className="sr-only" aria-live="polite">
        {copied ? `${label} copied` : ""}
      </span>
    </div>
  );
}
