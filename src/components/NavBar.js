import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="bg-white dark:bg-gray-800 p-5 shadow-md flex justify-center space-x-6">
      <Link className="text-gray-900 dark:text-gray-100 hover:text-blue-500" href="/">Home</Link>
      <Link className="text-gray-900 dark:text-gray-100 hover:text-blue-500" href="/about">About</Link>
      <Link className="text-gray-900 dark:text-gray-100 hover:text-blue-500" href="/projects">Projects</Link>
      <Link className="text-gray-900 dark:text-gray-100 hover:text-blue-500" href="/blog">Blog</Link>
      <Link className="text-gray-900 dark:text-gray-100 hover:text-blue-500" href="/contact">Contact</Link>
    </nav>
  );
}
