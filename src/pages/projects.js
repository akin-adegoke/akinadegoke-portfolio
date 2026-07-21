import NavBar from "../components/NavBar";
import Corners from "../components/Corners";

const projects = [
  {
    title: "Smart Greenhouse",
    status: "ACTIVE",
    description:
      "A fully automated greenhouse using soil moisture, light, and temperature sensors. An AI-powered camera analyzes plant health to optimize care.",
    image:
      "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&q=80",
    link: "#",
  },
  {
    title: "Personal Portfolio",
    status: "DEPLOYED",
    description:
      "Terminal-inspired portfolio showcasing projects, photos, and music. Built with Next.js and Tailwind CSS.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
    link: "#",
  },
  {
    title: "IoT Weather Station",
    status: "DEPLOYED",
    description:
      "IoT-enabled station collecting local climate data and streaming it to the cloud for real-time analysis.",
    image:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
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
        ],
      },
      {
        title: "Program Manager",
        duration: "Jan 2023 - June 2024",
        location: "Milford, MI",
        highlights: [
          "Led team of 40 engineers for integration testing of 40+ ECUs",
          "Protected $240M launch timetable with 98% ECU maturity",
          "Managed software rollout plans across North America",
        ],
      },
      {
        title: "Project Engineer",
        duration: "July 2022 - Jan 2023",
        location: "Warren, MI",
        highlights: [
          "Used FEA to redesign Silverado brackets, reducing NVH complaints by 28%",
          "Published global design-for-manufacture guidelines",
        ],
      },
    ],
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
        ],
      },
    ],
  },
];

export default function Projects() {
  return (
    <>
      <NavBar />
      <main className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-6xl mx-auto">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">検証</span>
            <span className="text-dim">// VERIFICATION</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-16"
            style={{ animationDelay: "0.15s" }}
          >
            Selected <span className="text-accent">projects.</span>
          </h1>

          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 mb-32">
            {projects.map((project, idx) => (
              <a
                href={project.link}
                key={project.title}
                className="reveal group block"
                style={{ animationDelay: `${0.25 + idx * 0.1}s` }}
              >
                <div className="relative overflow-hidden bg-panel aspect-[4/3] mb-5 border border-edge">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover grayscale-[45%] group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  />
                  <Corners className="opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="absolute top-3 left-3 font-mono text-[10px] tracking-[0.2em] uppercase bg-void border border-edge text-accent px-2 py-1 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl text-chalk mb-2 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-dim mb-3 leading-relaxed">{project.description}</p>
                <span className="font-mono text-xs tracking-[0.15em] uppercase text-chalk border-b border-edge group-hover:border-accent group-hover:text-accent transition-colors">
                  view_project →
                </span>
              </a>
            ))}
          </div>

          <div className="border-t border-edge pt-16">
            <p
              className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4"
              style={{ animationDelay: "0.1s" }}
            >
              employment.log
            </p>
            <h2
              className="reveal font-display text-4xl sm:text-5xl text-chalk mb-16"
              style={{ animationDelay: "0.2s" }}
            >
              Employment
            </h2>
            <div className="space-y-16">
              {employmentHistory.map((company) => (
                <div key={company.company} className="reveal" style={{ animationDelay: "0.3s" }}>
                  <div className="flex items-center gap-6 mb-8">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center bg-panel p-3 border border-edge">
                      <img
                        src={company.logo}
                        alt={company.company}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-display text-2xl sm:text-3xl text-chalk">
                      {company.company}
                    </h3>
                  </div>

                  <div className="space-y-8 pl-0 sm:pl-24">
                    {company.positions.map((position) => (
                      <div
                        key={position.title}
                        className="border-l-2 border-edge hover:border-accent transition-colors pl-6"
                      >
                        <div className="mb-3">
                          <h4 className="text-lg font-medium text-chalk mb-1">{position.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 font-mono text-xs uppercase tracking-[0.1em] text-dim">
                            <span>{position.duration}</span>
                            <span className="hidden sm:inline text-accent">•</span>
                            <span>{position.location}</span>
                          </div>
                        </div>
                        <ul className="space-y-2">
                          {position.highlights.map((highlight) => (
                            <li key={highlight} className="text-dim text-sm leading-relaxed flex">
                              <span className="mr-2 text-accent">▸</span>
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
