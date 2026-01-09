import Link from "next/link";
import NavBar from "../components/NavBar";

export default function Blog() {
  const posts = [
    {
      slug: "smart-greenhouse",
      title: "Building a Smart Greenhouse",
      date: "January 9, 2026",
      excerpt: "How sensors and AI can transform a greenhouse into a self‑sustaining system."
    },
    {
      slug: "iceland-adventure",
      title: "Exploring Iceland’s Golden Circle",
      date: "January 9, 2026",
      excerpt: "Highlights from my photography trip around Thingvellir, Geysir and Gullfoss."
    },
    {
      slug: "lofi-beats",
      title: "Crafting Lo‑Fi Beats",
      date: "January 9, 2026",
      excerpt: "Embracing imperfections to create relaxing lo‑fi music."
    }
  ];
  return (
    <div>
      <NavBar />
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-6 text-center">Blog</h1>
        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{post.date}</p>
              <p className="mb-4">{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`}>
                <span className="text-blue-600 dark:text-blue-400 font-medium hover:underline">Read more →</span>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
