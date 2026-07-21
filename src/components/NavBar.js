import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", kanji: "統合", label: "About" },
  { href: "/projects", kanji: "検証", label: "Work" },
  { href: "/photography", kanji: "撮影", label: "Photos" },
  { href: "/music", kanji: "音楽", label: "Music" },
  { href: "/blog", kanji: "記録", label: "Writing" },
  { href: "/contact", kanji: "接続", label: "Contact" },
];

export default function NavBar() {
  const [standby, setStandby] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("mode");
    if (saved === "standby") {
      setStandby(true);
      document.documentElement.classList.add("standby");
    }
  }, []);

  useEffect(() => {
    if (!mounted) return;
    if (standby) {
      document.documentElement.classList.add("standby");
      localStorage.setItem("mode", "standby");
    } else {
      document.documentElement.classList.remove("standby");
      localStorage.setItem("mode", "online");
    }
  }, [standby, mounted]);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 border-b border-edge backdrop-blur-md"
      style={{ backgroundColor: "color-mix(in srgb, var(--void) 85%, transparent)" }}
    >
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 sm:px-8 h-16">
        <Link
          href="/"
          className="flex items-center gap-3 font-display font-semibold text-xl text-chalk hover:text-accent transition-colors"
        >
          AA
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" aria-hidden="true" />
          <span className="hidden lg:inline font-mono text-[10px] tracking-[0.1em] text-dim">
            root@akin:~$
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-1 font-mono text-[11px] tracking-[0.1em] uppercase">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group flex items-center gap-1.5 px-3 py-2 text-dim hover:text-chalk transition-colors"
            >
              <span className="font-body text-accent opacity-70 group-hover:opacity-100 transition-opacity">
                {l.kanji}
              </span>
              <span className="border-b border-transparent group-hover:border-accent transition-colors pb-0.5">
                {l.label}
              </span>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setStandby(!standby)}
            className="hidden sm:flex items-center gap-2 px-3 h-8 border border-edge text-[10px] font-mono tracking-[0.15em] uppercase text-dim hover:text-accent hover:border-accent transition-colors"
            aria-label="Toggle system mode"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${standby ? "bg-dim" : "bg-accent animate-blink"}`}
            />
            {standby ? "Standby" : "Online"}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden w-8 h-8 border border-edge flex flex-col items-center justify-center gap-[3px] text-chalk"
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
        <div className="md:hidden border-t border-edge font-mono text-xs tracking-[0.1em] uppercase">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 px-6 py-4 text-dim hover:text-chalk border-b border-edge last:border-0"
            >
              <span className="font-body text-accent">{l.kanji}</span>
              {l.label}
            </Link>
          ))}
          <button
            onClick={() => setStandby(!standby)}
            className="w-full flex items-center gap-3 px-6 py-4 text-dim hover:text-chalk sm:hidden"
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${standby ? "bg-dim" : "bg-accent animate-blink"}`}
            />
            {standby ? "Standby Mode" : "Online Mode"}
          </button>
        </div>
      )}
    </header>
  );
}
