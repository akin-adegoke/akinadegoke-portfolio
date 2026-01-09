import NavBar from "../../components/NavBar";

export default function SmartGreenhouse() {
  return (
    <div>
      <NavBar />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Building a Smart Greenhouse</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">January 9, 2026</p>
        <img src="https://via.placeholder.com/600x400" alt="Smart greenhouse concept" className="w-full h-auto mb-6 rounded" />
        <p className="mb-4">
          In my greenhouse project, I’m using internet‑connected sensors to monitor soil moisture, temperature and nutrient levels.
          According to agricultural technology articles, smart greenhouses gather data from sensors and use AI algorithms to analyze it,
          allowing automatic control of irrigation and lighting【634776218370700†L128-L146】. This ensures that plants receive exactly what they need while
          minimizing water and energy waste.
        </p>
        <p className="mb-4">
          The system also uses a camera and computer vision to detect plant health issues. Researchers note that AI can analyze data
          from sensors and cameras to automatically control the greenhouse climate and even detect pests and diseases【245676872938247†L401-L409】.
          By combining these technologies, my greenhouse will provide an ideal environment for plants with minimal manual intervention.
        </p>
        <p>
          Stay tuned as I continue refining the hardware and software to make this greenhouse smarter and more sustainable.
        </p>
      </article>
    </div>
  );
}
