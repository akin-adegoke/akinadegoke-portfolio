import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-5xl sm:text-6xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Welcome, I'm Akin Adegoke
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-gray-700 dark:text-gray-300">
            Test & Integration Engineer · Smart Greenhouse Builder · Photographer · Music Producer
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/projects"
              className="px-6 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              Projects
            </a>
            <a
              href="/photography"
              className="px-6 py-3 rounded-md bg-purple-600 text-white hover:bg-purple-700 transition"
            >
              Photography
            </a>
            <a
              href="/music"
              className="px-6 py-3 rounded-md bg-pink-600 text-white hover:bg-pink-700 transition"
            >
              Music
            </a>
            <a
              href="/blog"
              className="px-6 py-3 rounded-md bg-green-600 text-white hover:bg-green-700 transition"
            >
              Blog
            </a>
            <a
              href="/contact"
              className="px-6 py-3 rounded-md bg-yellow-500 text-gray-900 hover:bg-yellow-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
