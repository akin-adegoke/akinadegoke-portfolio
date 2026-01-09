import NavBar from "../components/NavBar";

export default function Photography() {
  const photos = [
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Iceland landscape placeholder",
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Waterfall placeholder",
    },
    {
      src: "https://via.placeholder.com/400x300",
      alt: "Geyser placeholder",
    },
  ];
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6 text-center">Photography</h1>
          <p className="mb-8 text-lg">
            During my trip to Iceland, I explored the famous Golden Circle route, which takes you through incredible natural wonders including Thingvellir National Park, where you can walk between the North American and Eurasian tectonic plates, the Geysir geothermal area where the Strokkur geyser erupts every few minutes, and the dramatic Gullfoss waterfall. I captured these landscapes to share the beauty of Iceland.
          </p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {photos.map((photo, index) => (
              <img
                key={index}
                src={photo.src}
                alt={photo.alt}
                className="w-full h-64 object-cover rounded-lg shadow-md"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
