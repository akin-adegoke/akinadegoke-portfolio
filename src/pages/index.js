import NavBar from "../components/NavBar";
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <NavBar />
      <main className="pt-32 pb-20 min-h-screen bg-white dark:bg-gray-900 flex items-center">
        <div className="max-w-4xl mx-auto px-6 sm:px-8">
          <div className="space-y-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-light tracking-tight text-gray-900 dark:text-white">
              Akin Adegoke
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-400 font-light max-w-2xl">
              Test & Integration Engineer crafting intelligent systems.
              <br />
              Builder, photographer, and music producer.
            </p>
            <div className="flex flex-wrap gap-6 pt-4">
              <Link
                href="/projects"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 pb-1"
              >
                View Projects →
              </Link>
              <Link
                href="/about"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 pb-1"
              >
                About Me →
              </Link>
              <Link
                href="/contact"
                className="text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b-2 border-transparent hover:border-gray-900 dark:hover:border-gray-100 pb-1"
              >
                Get in Touch →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
