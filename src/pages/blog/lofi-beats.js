import NavBar from "../../components/NavBar";
import Corners from "../../components/Corners";
import Link from "next/link";

export default function LofiBeats() {
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
            Crafting Lo-Fi Beats
          </h1>
          <div className="reveal relative mb-12" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&q=80"
              alt="Music production setup"
              className="w-full h-auto bg-surface border border-edge"
            />
            <Corners />
          </div>
          <div className="reveal space-y-6 text-lg text-muted leading-relaxed" style={{ animationDelay: "0.3s" }}>
            <p>
              Lo-fi hip-hop has become synonymous with study sessions and relaxation, but there's an art to creating
              these seemingly simple beats. The genre embraces imperfection&mdash;vinyl crackle, tape hiss, and slightly
              off-kilter rhythms all contribute to its warm, nostalgic sound.
            </p>
            <p>
              My process usually starts with finding or creating a melodic element&mdash;often a jazz sample or a
              simple chord progression played on keys or guitar. The key is to keep it mellow and not too complex.
              I then layer in drums, typically with a boom-bap pattern but with the hi-hats slightly behind the beat
              to create that laid-back feel.
            </p>
            <p>
              The magic happens in the finishing touches. I add vinyl crackle, reduce the bit depth slightly,
              apply some gentle low-pass filtering, and maybe throw in some ambient sounds&mdash;rain, cafe chatter,
              or distant traffic. These imperfections are what give lo-fi its character and charm.
            </p>
            <p>
              What I love most about producing lo-fi is that it's as much about what you leave out as what you
              put in. The genre thrives on simplicity and space, creating a sonic environment that's perfect for
              focusing or unwinding.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
