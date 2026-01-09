import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-12">
            About
          </h1>
          <div className="space-y-6 text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            <p>
              I'm Akin Adegoke, a Test and Integration Engineer based in Philadelphia. I thrive on building and refining complex systems, ensuring that hardware and software work seamlessly together.
            </p>
            <p>
              Currently, I'm building a smart greenhouse that uses soil moisture, light, and temperature sensors along with AI-powered camera vision to automatically water plants and adjust lighting based on plant health. This project combines my passions for electronics, automation, and sustainability.
            </p>
            <p>
              Outside of engineering, I'm an avid photographer. I love exploring landscapes and have traveled to Iceland to capture the dramatic scenery of the Golden Circle—from geysers to waterfalls.
            </p>
            <p>
              I also enjoy producing music, blending lo-fi beats with ambient textures. Music is another creative outlet where I experiment with sound design and production techniques.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
