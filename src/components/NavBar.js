import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function NavBar() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Initialize dark mode from localStorage on mount
  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  // Apply or remove the 'dark' class on the html element when isDark changes
  useEffect(() => {
    if (!mounted) return;
    
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark, mounted]);

  const toggleDark = () => setIsDark(!isDark);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 sm:px-8 py-4">
        <Link href="/" className="text-sm font-medium tracking-wide text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
          AA
        </Link>
        <div className="flex items-center space-x-6 sm:space-x-8">
          <Link href="/about" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            About
          </Link>
          <Link href="/projects" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Work
          </Link>
          <Link href="/photography" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Photos
          </Link>
          <Link href="/blog" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Writing
          </Link>
          <Link href="/contact" className="text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors">
            Contact
          </Link>
          <button
            onClick={toggleDark}
            className="ml-2 w-8 h-8 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
            aria-label="Toggle dark mode"
          >
            {isDark ? '☀' : '☾'}
          </button>
        </div>
      </nav>
    </header>
  );
}
