import NavBar from "../components/NavBar";
import Corners from "../components/Corners";
import Link from "next/link";
import { useEffect, useState } from "react";

function LiveClock() {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const format = () =>
      new Date().toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "America/New_York",
      });
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);

  return <span suppressHydrationWarning>{time ?? "--:--:--"}</span>;
}

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto w-full grid lg:grid-cols-[1.4fr_1fr] gap-16 items-center">
          <div className="space-y-8">
            <p
              className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent"
              style={{ animationDelay: "0.05s" }}
            >
              // Portfolio&nbsp;— rev. 2026.07
            </p>

            <h1 className="font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-ink">
              <span className="reveal block" style={{ animationDelay: "0.15s" }}>
                Akin
              </span>
              <span className="reveal block italic text-accent" style={{ animationDelay: "0.3s" }}>
                Adegoke
              </span>
            </h1>

            <p
              className="reveal text-lg sm:text-xl text-muted max-w-xl leading-relaxed"
              style={{ animationDelay: "0.45s" }}
            >
              Test &amp; integration engineer building intelligent systems by day.
              Photographer and lo-fi producer running side channels in the dark.
            </p>

            <div
              className="reveal flex flex-wrap gap-4 pt-2 font-mono text-xs tracking-[0.15em] uppercase"
              style={{ animationDelay: "0.6s" }}
            >
              <Link
                href="/projects"
                className="px-5 py-3 border border-edge text-ink hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
              >
                [ View Work ]
              </Link>
              <Link
                href="/about"
                className="px-5 py-3 border border-edge text-ink hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
              >
                [ About ]
              </Link>
              <Link
                href="/contact"
                className="px-5 py-3 border border-edge text-ink hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
              >
                [ Contact ]
              </Link>
            </div>
          </div>

          <div
            className="reveal relative border border-edge bg-surface p-6 sm:p-8 font-mono text-xs overflow-hidden"
            style={{ animationDelay: "0.5s" }}
          >
            <Corners />
            <div
              className="absolute left-0 right-0 h-px bg-accent/70 shadow-[0_0_8px_var(--accent)] animate-scan"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between text-[10px] tracking-[0.2em] uppercase text-muted mb-6 pb-4 border-b border-edge">
              <span>Console</span>
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
                Online
              </span>
            </div>
            <dl className="space-y-4">
              <div className="flex justify-between gap-4">
                <dt className="text-muted uppercase tracking-[0.1em]">Role</dt>
                <dd className="text-ink text-right">Software / Integration Eng.</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted uppercase tracking-[0.1em]">Employer</dt>
                <dd className="text-ink text-right">General Motors</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted uppercase tracking-[0.1em]">Base</dt>
                <dd className="text-ink text-right">Philadelphia, PA</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted uppercase tracking-[0.1em]">Local Time</dt>
                <dd className="text-ink text-right tabular-nums">
                  <LiveClock /> EST
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-muted uppercase tracking-[0.1em]">Focus</dt>
                <dd className="text-ink text-right">Embedded systems, AI, sensors</dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}
