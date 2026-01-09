import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);

  // Toggle dark mode by adding or removing the "dark" class on the html element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <nav className="bg-gray-800 dark:bg-gray-900 p-5 shadow-md flex justify-between items-center">
      {/* Site logo / name */}
      <div className="text-white text-lg font-bold">
        <Link href="/">Akin Adegoke</Link>
      </div>
      {/* Navigation links */}
      <div className="space-x-4">
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/">
          Home
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/about">
          About
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/projects">
          Projects
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/photography">
          Photography
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/music">
          Music
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/blog">
          Blog
        </Link>
        <Link className="text-gray-200 dark:text-gray-100 hover:text-blue-500" href="/contact">
          Contact
        </Link>
        {/* Dark mode toggle button */}
        <button
          onClick={() => setIsDark(!isDark)}
          className="text-gray-200 dark:text-gray-100 hover:text-yellow-300 focus:outline-none"
        >
          {isDark ? "Light" : "Dark"}
        </button>
      </div>
    </nav>
  );
}
