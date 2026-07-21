import NavBar from "../components/NavBar";

const channels = [
  { kanji: "設計", label: "Engineering", detail: "Embedded systems, test rigs, CI/CD" },
  { kanji: "自動", label: "Automation", detail: "Sensors, AI vision, greenhouse control" },
  { kanji: "撮影", label: "Photography", detail: "Landscapes — Iceland, Golden Circle" },
  { kanji: "音楽", label: "Music", detail: "Lo-fi beats, ambient textures, tape warble" },
];

export default function About() {
  return (
    <>
      <NavBar />
      <section className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">統合</span>
            <span className="text-dim">// ABOUT</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-14"
            style={{ animationDelay: "0.15s" }}
          >
            Precision by day,
            <br />
            <span className="text-accent">craft</span> by night.
          </h1>

          <div
            className="reveal grid md:grid-cols-[1.3fr_1fr] gap-12 md:gap-16"
            style={{ animationDelay: "0.3s" }}
          >
            <div className="space-y-6 text-lg text-dim leading-relaxed">
              <p>
                I'm Akin Adegoke, a Test and Integration Engineer based in Philadelphia. I thrive
                on building and refining complex systems, ensuring that hardware and software work
                seamlessly together.
              </p>
              <p>
                Currently, I'm building a smart greenhouse that uses soil moisture, light, and
                temperature sensors along with AI-powered camera vision to automatically water
                plants and adjust lighting based on plant health. This project combines my
                passions for electronics, automation, and sustainability.
              </p>
              <p>
                Outside of engineering, I'm an avid photographer. I love exploring landscapes and
                have traveled to Iceland to capture the dramatic scenery of the Golden
                Circle&mdash;from geysers to waterfalls.
              </p>
              <p>
                I also enjoy producing music, blending lo-fi beats with ambient textures. Music is
                another creative outlet where I experiment with sound design and production
                techniques.
              </p>
            </div>

            <div className="border border-edge bg-panel p-6 font-mono text-xs self-start">
              <p className="text-[10px] tracking-[0.2em] uppercase text-dim mb-5 pb-4 border-b border-edge">
                active_channels.log
              </p>
              <ul className="space-y-5">
                {channels.map((c) => (
                  <li key={c.label} className="flex flex-col gap-1">
                    <span className="flex items-center gap-2 text-chalk uppercase tracking-[0.1em]">
                      <span className="font-body text-accent normal-case tracking-normal">
                        {c.kanji}
                      </span>
                      {c.label}
                    </span>
                    <span className="text-dim normal-case tracking-normal">{c.detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
