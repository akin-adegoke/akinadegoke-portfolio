import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function LofiBeats() {
  return (
    <div>
      <NavBar />
      <article className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Writing
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 mb-4">January 9, 2026</p>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Crafting Lo-Fi Beats
          </h1>
          <img 
            src="https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=1200&q=80" 
            alt="Music production setup" 
            className="w-full h-auto mb-12 bg-gray-100 dark:bg-gray-800"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Lo-fi hip-hop has become synonymous with study sessions and relaxation, but there's an art to creating 
              these seemingly simple beats. The genre embraces imperfection—vinyl crackle, tape hiss, and slightly 
              off-kilter rhythms all contribute to its warm, nostalgic sound.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              My process usually starts with finding or creating a melodic element—often a jazz sample or a 
              simple chord progression played on keys or guitar. The key is to keep it mellow and not too complex. 
              I then layer in drums, typically with a boom-bap pattern but with the hi-hats slightly behind the beat 
              to create that laid-back feel.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The magic happens in the finishing touches. I add vinyl crackle, reduce the bit depth slightly, 
              apply some gentle low-pass filtering, and maybe throw in some ambient sounds—rain, cafe chatter, 
              or distant traffic. These imperfections are what give lo-fi its character and charm.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
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
