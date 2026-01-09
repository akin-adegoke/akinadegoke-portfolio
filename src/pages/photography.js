import NavBar from "../components/NavBar";

export default function Photography() {
  const photos = [
    {
      src: "https://via.placeholder.com/800x600?text=Placeholder+1",
      alt: "Iceland landscape placeholder",
    },
    {
      src: "https://via.placeholder.com/800x600?text=Placeholder+2",
      alt: "Waterfall placeholder",
    },
    {
      src: "https://via.placeholder.com/800x600?text=Placeholder+3",
      alt: "Geyser placeholder",
    },
  ];
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-black dark:bg-black text-gray-200 py-20 px-4 flex flex-col items-center">
        <div className="max-w-5xl text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold tracking-wide mb-4">Photography</h1>
          <p className="text-lg md:text-xl leading-relaxed text-gray-400">
            During my trip to Iceland, I explored the famous Golden Circle route, which takes you through incredible natural wonders including Thingvellir National Park, where you can walk between the tectonic plates of North America and Eurasia, the Geysir geothermal area where the Strokkur geyser erupts every few minutes, and the dramatic Gullfoss waterfall. I captured these landscapes to share the beauty of Iceland.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full max-w-5xl">
          {photos.map((photo, index) => (
            <div key={index} className="overflow-hidden rounded-lg border border-gray-700 shadow-lg hover:shadow-xl transition-shadow duration-200">
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
