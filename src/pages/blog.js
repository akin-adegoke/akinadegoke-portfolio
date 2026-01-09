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
      <main className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">Blog</h1>
          <p className="text-lg text-gray-400 mb-10">
            Insights and stories from my journey in engineering, photography & music
          </p>
          <div className="grid gap-8 sm:grid-cols-2">
            {posts.map((post) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <div className="group rounded-2xl border border-gray-700 bg-gray-800/50 p-6 backdrop-blur transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h2 className="text-2xl font-semibold text-white mb-2">{post.title}</h2>
                  <p className="text-xs uppercase tracking-wide text-purple-400 mb-1">{post.date}</p>
                  <p className="text-sm text-gray-300 mb-4">{post.excerpt}</p>
                  <span className="inline-block font-medium text-purple-500 group-hover:underline">Read More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
