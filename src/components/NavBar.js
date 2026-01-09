import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  // Apply or remove the 'dark' class on the html element when isDark changes
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-100/80 dark:bg-gray-900/80 backdrop-blur-md shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <Link href="/" className="font-bold text-xl text-gray-800 dark:text-gray-100">
          Akin Adegoke
        </Link>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Home
          </Link>
          <Link href="/about" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            About
          </Link>
          <Link href="/projects" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Projects
          </Link>
          <Link href="/photography" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Photography
          </Link>
          <Link href="/music" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Music
          </Link>
          <Link href="/blog" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Blog
          </Link>
          <Link href="/contact" className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
            Contact
          </Link>
          <button
            onClick={toggleDark}
            className="ml-1 sm:ml-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-blue-500 hover:text-white dark:hover:bg-blue-600"
          >
            {isDark ? '🌞' : '🌜'}
          </button>
        </div>
      </nav>
    </header>
  );
}
