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
      <main className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">記録</span>
            <span className="text-dim">// RECORD</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            Field <span className="text-accent">notes.</span>
          </h1>
          <p
            className="reveal text-lg text-dim mb-16 leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            Insights and stories from my journey in engineering, photography, and music.
          </p>
          <div className="space-y-2">
            {posts.map((post, idx) => (
              <Link href={`/blog/${post.slug}`} key={post.slug}>
                <article
                  className="reveal group border-b border-edge hover:border-accent py-8 transition-colors"
                  style={{ animationDelay: `${0.35 + idx * 0.1}s` }}
                >
                  <div className="flex items-baseline justify-between gap-4 mb-2">
                    <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-dim">
                      {post.date}
                    </p>
                    <span className="font-mono text-[11px] tracking-[0.15em] uppercase text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      read →
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl text-chalk mb-3 group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-dim leading-relaxed">{post.excerpt}</p>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
