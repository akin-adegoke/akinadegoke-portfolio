import NavBar from "../components/NavBar";

const projects = [
  { title: "Project 1", description: "This is an amazing project.", link: "#" },
  { title: "Project 2", description: "Another great project!", link: "#" },
  { title: "Project 3", description: "Something innovative.", link: "#" }
];

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <NavBar />
      <div className="max-w-3xl mx-auto mt-10 p-5">
        <h1 className="text-3xl font-bold text-center">My Projects</h1>
        <div className="mt-6 space-y-4">
          {projects.map((project, index) => (
            <div key={index} className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">{project.title}</h2>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-2 inline-block">View Project →</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
