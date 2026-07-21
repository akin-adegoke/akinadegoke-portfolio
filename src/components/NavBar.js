import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "About", num: "01" },
  { href: "/projects", label: "Work", num: "02" },
  { href: "/photography", label: "Photos", num: "03" },
  { href: "/music", label: "Music", num: "04" },
  { href: "/blog", label: "Writing", num: "05" },
  { href: "/contact", label: "Contact", num: "06" },
];

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (savedTheme === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark, mounted]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--bg) 85%, transparent)" }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        <Link
          href="/"
          className="flex items-center gap-2 font-display italic text-xl text-ink hover:text-accent transition-colors"
        >
          AA
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" aria-hidden="true" />
        </Link>

        <div className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-[0.15em] uppercase">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 px-3 py-2 text-muted hover:text-ink transition-colors"
            >
              <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                {l.num}
              </span>
              <span className="border-b border-transparent group-hover:border-accent transition-colors pb-0.5">
                {l.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsDark(!isDark)}
            className="w-8 h-8 border border-edge flex items-center justify-center text-accent hover:border-accent hover:bg-accentSoft transition-colors font-mono text-xs"
            aria-label="Toggle color theme"
          >
            {isDark ? "☀" : "●"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 border border-edge flex flex-col items-center justify-center gap-[3px] text-ink"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block w-4 h-px bg-current transition-transform ${menuOpen ? "translate-y-[3.5px] rotate-45" : ""}`}
            />
            <span
              className={`block w-4 h-px bg-current transition-transform ${menuOpen ? "-translate-y-[3.5px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden border-t border-edge font-mono text-xs tracking-[0.15em] uppercase">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 text-muted hover:text-ink border-b border-edge last:border-0"
            >
              <span className="text-accent">{l.num}</span>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
