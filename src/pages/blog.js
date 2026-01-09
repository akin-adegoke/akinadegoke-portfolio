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
        "Highlights from my photography trip around Thingvellir, Geysir, and Gullfoss.",
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
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Writing
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16">
            Insights and stories from my journey in engineering, photography, and music.
          </p>
          <div className="space-y-12">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article className="group border-b border-gray-200 dark:border-gray-800 pb-12 last:border-0">
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{post.date}</p>
                  <h2 className="text-2xl font-medium text-gray-900 dark:text-white mb-3 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {post.excerpt}
                  </p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
