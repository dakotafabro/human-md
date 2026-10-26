import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "/spec", label: "Spec" },
  { href: "/template", label: "Template" },
  { href: "/examples", label: "Examples" },
  { href: "/goose", label: "goose" },
];

export default function Nav() {
  return (
    <header className="site-header">
      <a className="skip" href="#main">
        Skip to content
      </a>
      <nav aria-label="Main">
        <Link href="/" className="brand">
          HUMAN.md
        </Link>
        <ul>
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href}>{l.label}</Link>
            </li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
