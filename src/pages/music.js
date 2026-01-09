import NavBar from "../components/NavBar";

export default function Music() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Music</h1>
          <p className="mb-8 text-lg">
            I love producing lo-fi beats that blend chill drums, soulful chords and the warm imperfections of vinyl crackle and tape warble. Lo-fi hip-hop is all about creating a relaxed atmosphere with simple melodies and mellow rhythms.
          </p>
          <div className="mb-8">
            <audio controls className="w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            *Placeholder track for demo purposes. Replace with your own music files or streaming links.*
          </p>
        </div>
      </section>
    </>
  );
}
