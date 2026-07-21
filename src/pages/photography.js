import NavBar from "../components/NavBar";
import Corners from "../components/Corners";

export default function Photography() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
      alt: "Iceland landscape",
      frame: "04",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: "Mountain scenery",
      frame: "07",
    },
    {
      src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
      alt: "Geyser",
      frame: "11",
    },
    {
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
      alt: "Waterfall",
      frame: "14",
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
      alt: "Northern landscape",
      frame: "19",
    },
    {
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
      alt: "Sunset vista",
      frame: "23",
    },
  ];

  return (
    <>
      <NavBar />
      <section className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">撮影</span>
            <span className="text-dim">// PHOTOGRAPHY</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            The <span className="text-accent">Golden Circle.</span>
          </h1>
          <p
            className="reveal text-lg text-dim mb-16 max-w-2xl leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            Captured during my trip to Iceland, exploring the famous Golden Circle
            route&mdash;from Thingvellir National Park to the dramatic Gullfoss waterfall.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div
                key={photo.alt}
                className="reveal group relative overflow-hidden bg-panel aspect-[4/3] border border-edge"
                style={{ animationDelay: `${0.3 + index * 0.08}s` }}
              >
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                />
                <Corners className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-3 py-2 font-mono text-[10px] tracking-[0.15em] uppercase text-chalk bg-gradient-to-t from-void to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>{photo.alt}</span>
                  <span className="text-accent">frame_{photo.frame}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
