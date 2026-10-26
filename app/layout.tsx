import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://human.dakotafabro.dev"),
  title: {
    default: "HUMAN.md - what changes for you",
    template: "%s - HUMAN.md",
  },
  description:
    "HUMAN.md is a page for the person using an agent package: what the agent will now do differently, what stays your call, what it touches, and how to turn it off.",
  openGraph: {
    title: "HUMAN.md",
    description: "README is for installing. AGENTS.md is for the agent. HUMAN.md is for you.",
    url: "https://human.dakotafabro.dev",
    type: "website",
  },
};

const themeScript = `try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t)}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Nav />
        <main id="main">{children}</main>
        <footer className="site-footer">
          <p>
            HUMAN.md is an open format, version 0.1 (draft). Started by{" "}
            <a href="https://dakotafabro.dev">Dakota Fabro</a>. Source and discussion on{" "}
            <a href="https://github.com/dakotafabro/human-md">GitHub</a>. Apache 2.0.
          </p>
        </footer>
      </body>
    </html>
  );
}
