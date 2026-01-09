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

const employmentHistory = [
  {
    company: "General Motors",
    logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/General_Motors.svg",
    positions: [
      {
        title: "Software Engineer - Controller Integration & Test Engineering",
        duration: "June 2024 - Present",
        location: "Milford, MI",
        highlights: [
          "Maintained and executed reliability tests for embedded in-vehicle software",
          "Diagnosed 100+ system issues using Wireshark and embedded debuggers",
          "Implemented CI/CD with Jenkins and Bash/Python scripts",
        ]
      },
      {
        title: "Program Manager",
        duration: "Jan 2023 - June 2024",
        location: "Milford, MI",
        highlights: [
          "Led team of 40 engineers for integration testing of 40+ ECUs",
          "Protected $240M launch timetable with 98% ECU maturity",
          "Managed software rollout plans across North America",
        ]
      },
      {
        title: "Project Engineer",
        duration: "July 2022 - Jan 2023",
        location: "Warren, MI",
        highlights: [
          "Used FEA to redesign Silverado brackets, reducing NVH complaints by 28%",
          "Published global design-for-manufacture guidelines",
        ]
      }
    ]
  },
  {
    company: "University of Notre Dame",
    logo: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Notre_Dame_Fighting_Irish_logo.svg",
    positions: [
      {
        title: "Utilities Intern",
        duration: "July 2021 - December 2021",
        location: "Notre Dame, IN",
        highlights: [
          "Used MATLAB to optimize geothermal HVAC, saving $20K annually",
          "Diagnosed thermal inefficiencies in 5 MW chiller system",
        ]
      }
    ]
  }
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Projects Section */}
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-16">
            Projects
          </h1>
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3 mb-32">
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

          {/* Employment Section */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-16">
            <h2 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-16">
              Employment
            </h2>
            <div className="space-y-16">
              {employmentHistory.map((company, idx) => (
                <div key={idx} className="group">
                  {/* Company Header */}
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700">
                      <img 
                        src={company.logo} 
                        alt={company.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-light text-gray-900 dark:text-white">
                      {company.company}
                    </h3>
                  </div>

                  {/* Positions */}
                  <div className="space-y-8 pl-0 sm:pl-26">
                    {company.positions.map((position, posIdx) => (
                      <div key={posIdx} className="border-l-2 border-gray-200 dark:border-gray-800 pl-6">
                        <div className="mb-3">
                          <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
                            {position.title}
                          </h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 text-sm text-gray-600 dark:text-gray-400">
                            <span>{position.duration}</span>
                            <span className="hidden sm:inline">•</span>
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {position.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex">
                              <span className="mr-2 text-gray-400 dark:text-gray-600">•</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
