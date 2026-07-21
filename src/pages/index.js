import NavBar from "../components/NavBar";
import Corners from "../components/Corners";
import DecodeText from "../components/DecodeText";
import Link from "next/link";

const captureLog = [
  { time: "00:00:01", src: "general-motors", field: "ROLE", value: "integration engineer" },
  { time: "00:00:02", src: "philadelphia,pa", field: "BASE", value: "active" },
  { time: "00:00:03", src: "embedded/ai", field: "FOCUS", value: "locked" },
];

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="relative z-10 min-h-screen flex items-center pt-24 pb-16 px-6 sm:px-8 overflow-hidden">
        <span
          aria-hidden="true"
          className="font-display absolute -left-6 top-1/2 -translate-y-1/2 text-[26rem] leading-none text-accent opacity-[0.04] select-none pointer-events-none hidden lg:block"
        >
          統合
        </span>

        <div className="relative max-w-3xl mx-auto w-full space-y-8">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">統合</span>
            <span className="text-dim">// INTEGRATION</span>
          </p>

          <h1 className="reveal font-display text-6xl sm:text-7xl md:text-8xl leading-[0.95] text-chalk" style={{ animationDelay: "0.15s" }}>
            <DecodeText text="AKIN" delay={300} className="block" />
            <DecodeText text="ADEGOKE" delay={700} className="block text-accent" />
          </h1>

          <p
            className="reveal text-lg sm:text-xl text-dim max-w-xl leading-relaxed"
            style={{ animationDelay: "0.5s" }}
          >
            Test &amp; integration engineer building intelligent systems by day.
            Photographer and lo-fi producer running side channels in the dark.
          </p>

          <div
            className="reveal relative border border-edge bg-panel font-mono text-xs max-w-xl overflow-hidden"
            style={{ animationDelay: "0.6s" }}
          >
            <Corners />
            <div
              className="absolute left-0 right-0 h-px bg-accent shadow-[0_0_8px_var(--accent)] animate-scan"
              aria-hidden="true"
            />
            <div className="flex items-center justify-between px-4 py-2 border-b border-edge text-[10px] tracking-[0.2em] uppercase text-dim">
              <span>capture.log</span>
              <span className="flex items-center gap-1.5 text-accent">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
                live
              </span>
            </div>
            <div className="divide-y divide-edge">
              {captureLog.map((row) => (
                <div key={row.field} className="flex items-center gap-3 px-4 py-2.5 flex-wrap">
                  <span className="text-dim">{row.time}</span>
                  <span className="text-chalk">{row.src}</span>
                  <span className="text-accent ml-auto">{row.field}</span>
                  <span className="text-dim">{row.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div
            className="reveal flex flex-wrap gap-4 pt-2 font-mono text-xs tracking-[0.15em] uppercase"
            style={{ animationDelay: "0.75s" }}
          >
            <Link
              href="/projects"
              className="px-5 py-3 border border-edge text-chalk hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
            >
              [ view_work ]
            </Link>
            <Link
              href="/about"
              className="px-5 py-3 border border-edge text-chalk hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
            >
              [ about ]
            </Link>
            <Link
              href="/contact"
              className="px-5 py-3 border border-edge text-chalk hover:border-accent hover:text-accent hover:bg-accentSoft transition-colors"
            >
              [ connect ]
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
