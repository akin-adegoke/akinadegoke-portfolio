import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function SmartGreenhouse() {
  return (
    <div>
      <NavBar />
      <article className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <Link 
            href="/blog"
            className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-8 inline-block"
          >
            ← Back to Writing
          </Link>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-8 mb-4">January 9, 2026</p>
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Building a Smart Greenhouse
          </h1>
          <img 
            src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80" 
            alt="Smart greenhouse concept" 
            className="w-full h-auto mb-12 bg-gray-100 dark:bg-gray-800"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              In my greenhouse project, I'm using internet-connected sensors to monitor soil moisture, temperature, and nutrient levels.
              Smart greenhouses gather data from sensors and use AI algorithms to analyze it, allowing automatic control of irrigation and lighting. 
              This ensures that plants receive exactly what they need while minimizing water and energy waste.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The system also uses a camera and computer vision to detect plant health issues. AI can analyze data
              from sensors and cameras to automatically control the greenhouse climate and even detect pests and diseases.
              By combining these technologies, my greenhouse will provide an ideal environment for plants with minimal manual intervention.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Stay tuned as I continue refining the hardware and software to make this greenhouse smarter and more sustainable.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
