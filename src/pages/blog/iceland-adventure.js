import NavBar from "../../components/NavBar";
import Corners from "../../components/Corners";
import Link from "next/link";

export default function IcelandAdventure() {
  return (
    <div>
      <NavBar />
      <article className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="reveal font-mono text-xs tracking-[0.15em] uppercase text-muted hover:text-accent transition-colors mb-8 inline-block"
          >
            ← Back to Writing
          </Link>
          <p className="reveal font-mono text-xs tracking-[0.15em] uppercase text-accent mt-8 mb-4" style={{ animationDelay: "0.1s" }}>
            January 9, 2026
          </p>
          <h1 className="reveal font-display text-4xl sm:text-5xl text-ink mb-8" style={{ animationDelay: "0.15s" }}>
            Exploring Iceland's Golden Circle
          </h1>
          <div className="reveal relative mb-12" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80"
              alt="Iceland landscape"
              className="w-full h-auto bg-surface border border-edge"
            />
            <Corners />
          </div>
          <div className="reveal space-y-6 text-lg text-muted leading-relaxed" style={{ animationDelay: "0.3s" }}>
            <p>
              The Golden Circle is one of Iceland's most popular tourist routes, and for good reason.
              This spectacular journey takes you through some of the country's most breathtaking natural wonders,
              all within a day's drive from Reykjavik.
            </p>
            <p>
              First stop: Thingvellir National Park, a UNESCO World Heritage site where you can literally walk
              between the North American and Eurasian tectonic plates. The dramatic rift valley is a testament
              to the powerful geological forces that continue to shape our planet.
            </p>
            <p>
              Next was the Geysir geothermal area, home to the famous Strokkur geyser that erupts every few minutes,
              shooting boiling water up to 30 meters into the air. The anticipation of each eruption, combined with
              the otherworldly landscape of bubbling mud pots and steaming vents, creates an unforgettable experience.
            </p>
            <p>
              The final major stop was Gullfoss, the "Golden Falls." This massive two-tiered waterfall is absolutely
              stunning, especially when the sun catches the mist and creates rainbows. The sheer power and scale of
              the cascading water is humbling and beautiful.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
