import NavBar from "../../components/NavBar";

export default function LofiBeats() {
  return (
    <div>
      <NavBar />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Crafting Lo‑Fi Beats</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">January 9, 2026</p>
        <audio controls className="w-full mb-6">
          <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="mb-4">
          Lo‑fi music is a subgenre of hip‑hop that embraces imperfections—think vinyl crackle and tape warble【791554865461590†L150-L208】.
          The vibe comes from slow, chill drum patterns and soulful chords that create a relaxed atmosphere.
        </p>
        <p className="mb-4">
          Producers often humanize their beats by using swing and off‑grid timing, making the music feel organic and lived‑in.
          Imperfections aren’t mistakes; they’re essential texture.
        </p>
        <p className="mb-4">
          To create your own lo‑fi track, start in your favorite DAW with a simple drum groove, add melodic layers, then sprinkle in noise and imperfections.
          Effects like distortion and bitcrushing can add warmth and grit to your sounds【791554865461590†L150-L208】.
        </p>
        <p>
          Feel free to listen to the placeholder track above and imagine how you might personalize it. Real tracks will be added soon!
        </p>
      </article>
    </div>
  );
}
