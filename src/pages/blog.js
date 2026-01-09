import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Blog() {
  const posts = [
    {
      slug: "smart-greenhouse",
      title: "Building a Smart Greenhouse",
      date: "January 9, 2026",
      excerpt:
        "How sensors and AI can transform a greenhouse into a self-sustaining system.",
    },
    {
      slug: "iceland-adventure",
      title: "Exploring Iceland's Golden Circle",
      date: "January 9, 2026",
      excerpt:
        "Highlights from my photography trip around Thingvellir, Geysir and Gullfoss.",
    },
    {
      slug: "lofi-beats",
      title: "Crafting Lo-Fi Beats",
      date: "January 9, 2026",
      excerpt:
        "Embracing imperfections to create relaxing lo-fi music.",
    },
  ];

  return (
    <>
      <NavBar />
      <main className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">
            Blog
          </h1>
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition border border-gray-200 dark:border-gray-700 overflow-hidden"
              >
                <div className="p-5">
                  <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    {post.title}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {post.date}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Read more
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
