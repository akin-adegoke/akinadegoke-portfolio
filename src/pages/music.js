import NavBar from "../components/NavBar";

const bars = Array.from({ length: 40 });

export default function Music() {
  return (
    <>
      <NavBar />
      <section className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8 flex items-center">
        <div className="max-w-3xl mx-auto w-full">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">音楽</span>
            <span className="text-dim">// AUDIO</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            Side <span className="text-accent">channel.</span>
          </h1>
          <p
            className="reveal text-lg text-dim mb-12 leading-relaxed max-w-xl"
            style={{ animationDelay: "0.25s" }}
          >
            I produce lo-fi beats that blend chill drums, soulful chords, and the warm
            imperfections of vinyl crackle and tape warble. Creating relaxed atmospheres with
            simple melodies and mellow rhythms.
          </p>

          <div
            className="reveal border border-edge bg-panel p-6 sm:p-8"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-end gap-[3px] h-16 mb-6 overflow-hidden">
              {bars.map((_, i) => (
                <span
                  key={i}
                  className="flex-1 bg-accent rounded-sm"
                  style={{
                    height: `${20 + Math.sin(i * 0.7) * 15 + Math.cos(i * 1.3) * 15 + 30}%`,
                  }}
                />
              ))}
            </div>
            <audio controls className="w-full">
              <source
                src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                type="audio/mpeg"
              />
              Your browser does not support the audio element.
            </audio>
            <p className="font-mono text-[11px] tracking-[0.1em] uppercase text-dim mt-4 text-center">
              Demo track &mdash; for illustration purposes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
