import NavBar from "../components/NavBar";

export default function Photography() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=800&q=80",
      alt: "Iceland landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80",
      alt: "Mountain scenery",
    },
    {
      src: "https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=800&q=80",
      alt: "Geyser",
    },
    {
      src: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?w=800&q=80",
      alt: "Waterfall",
    },
    {
      src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=800&q=80",
      alt: "Northern landscape",
    },
    {
      src: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80",
      alt: "Sunset vista",
    },
  ];
  
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Photography
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-16 max-w-3xl leading-relaxed">
            Captured during my trip to Iceland, exploring the famous Golden Circle route—from Thingvellir National Park to the dramatic Gullfoss waterfall.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <div key={index} className="group relative overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3]">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
