import NavBar from "../components/NavBar";

const projects = [
  {
    title: "Smart Greenhouse",
    description:
      "A fully automated greenhouse that uses soil moisture, light and temperature sensors to water and illuminate plants. An AI-powered camera monitors plant health and triggers adjustments when needed.",
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "This website: a minimalist dark mode portfolio built with Next.js and Tailwind CSS, showcasing my projects, photography, music and blog posts.",
    link: "#",
  },
  {
    title: "IoT Weather Station",
    description:
      "An IoT-enabled weather station that collects local climate data and streams it to the cloud for real-time analysis and visualization.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-gray-900 dark:bg-gray-800 text-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-800 dark:bg-gray-700 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                <p className="mb-4">{project.description}</p>
                <a href={project.link} className="text-blue-500 hover:text-blue-400 underline">
                  View project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
