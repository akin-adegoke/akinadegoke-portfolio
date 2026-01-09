import NavBar from "../components/NavBar";

const projects = [
  {
    title: "Smart Greenhouse",
    description:
      "A fully automated greenhouse using soil moisture, light, and temperature sensors. An AI-powered camera analyzes plant health to optimize care.",
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "Minimalist portfolio showcasing projects, photos, and music. Built with Next.js and Tailwind CSS.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    link: "#",
  },
  {
    title: "IoT Weather Station",
    description:
      "IoT-enabled station collecting local climate data and streaming it to the cloud for real-time analysis.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-16">
            Projects
          </h1>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="group"
              >
                <div className="relative overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-[4/3] mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="text-sm text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-900 dark:border-white hover:border-gray-600 dark:hover:border-gray-300"
                >
                  View Project →
                </a>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
