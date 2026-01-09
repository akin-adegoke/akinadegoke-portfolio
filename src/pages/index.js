import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <section className="bg-gray-900 dark:bg-gray-800 text-center py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Welcome, I'm Akin Adegoke</h1>
          <p className="text-lg mb-8">Test & Integration Engineer · Smart Greenhouse Builder · Photographer · Music Producer</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/projects" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Projects</a>
            <a href="/photography" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Photography</a>
            <a href="/music" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Music</a>
            <a href="/blog" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Blog</a>
            <a href="/contact" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">Contact</a>
          </div>
        </div>
      </section>
    </>
  );
}
