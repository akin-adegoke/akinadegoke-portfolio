import NavBar from "../components/NavBar";

export default function Music() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8 flex items-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Music
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            I produce lo-fi beats that blend chill drums, soulful chords, and the warm imperfections of vinyl crackle and tape warble. Creating relaxed atmospheres with simple melodies and mellow rhythms.
          </p>
          <div className="border border-gray-300 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-800/50">
            <audio controls className="w-full">
              <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3" type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
            <p className="text-sm text-gray-500 dark:text-gray-400 italic mt-4 text-center">
              Demo track for illustration purposes
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
