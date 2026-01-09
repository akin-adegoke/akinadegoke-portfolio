import NavBar from "../components/NavBar";

export default function Music() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black text-gray-200 px-4 py-20">
        <div className="max-w-2xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wider mb-6">Music & Beats</h1>
          <p className="mb-8 text-lg md:text-xl max-w-prose mx-auto leading-relaxed text-gray-400">
            I love producing lo-fi beats that blend chill drums, soulful chords, and the warm imperfections of vinyl crackle and tape warble. Lo-fi hip-hop is all about creating a relaxed atmosphere with simple melodies and mellow rhythms.
          </p>
          <div className="mb-8 border border-gray-700 rounded-lg p-4 bg-gray-900/40 backdrop-blur-sm">
            <audio controls className="w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-sm text-gray-500 italic">
            *Placeholder track for demo purposes — replace with your own music files or streaming links.*
          </p>
        </div>
      </section>
    </>
  );
}
