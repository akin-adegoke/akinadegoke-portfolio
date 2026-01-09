import NavBar from "../components/NavBar";

export default function About() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-900 dark:bg-gray-800 text-gray-100 py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">About Me</h1>
          <p className="mb-4">
            I’m Akin Adegoke, a Test and Integration Engineer based in Philadelphia. I thrive on building and refining complex systems, ensuring that hardware and software work seamlessly together.
          </p>
          <p className="mb-4">
            I’m currently building a smart greenhouse that uses soil moisture, light and temperature sensors along with AI‑powered camera vision to automatically water plants and adjust lighting based on plant health. This project combines my passions for electronics, automation and sustainability.
          </p>
          <p className="mb-4">
            Outside of engineering, I’m an avid photographer. I love exploring landscapes and have traveled to Iceland to capture the dramatic scenery of the Golden Circle, from geysers to waterfalls.
          </p>
          <p className="mb-4">
            I also enjoy producing music — blending lo‑fi beats with ambient textures. Music is another creative outlet where I experiment with sound design and production techniques.
          </p>
        </div>
      </section>
    </>
  );
}
