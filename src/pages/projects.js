import NavBar from "../components/NavBar";

const projects = [
  {
    title: "Smart Greenhouse",
    description:
      "A fully automated greenhouse that uses soil moisture, light and temperature sensors to water and illuminate plants. An AI-powered camera analyzes plant health to optimize care.",
    image: "https://source.unsplash.com/featured/?greenhouse",
    link: "#",
  },
  {
    title: "Personal Portfolio",
    description:
      "This minimalist dark mode portfolio showcases my projects, photos and music using Next.js and Tailwind CSS. It includes a blog and contact page.",
    image: "https://source.unsplash.com/featured/?coding,website",
    link: "#",
  },
  {
    title: "IoT Weather Station",
    description:
      "An IoT-enabled weather station that collects local climate data and streams it to the cloud for real-time analysis and visualization.",
    image: "https://source.unsplash.com/featured/?weather,station",
    link: "#",
  },
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="pt-28 pb-16 min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-10 text-center text-gray-900 dark:text-white">Projects</h1>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-40 object-cover"
                />
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-100">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <a
                    href={project.link}
                    className="inline-block px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
