import NavBar from "../../components/NavBar";
import Link from "next/link";

export default function IcelandAdventure() {
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
            Exploring Iceland's Golden Circle
          </h1>
          <img 
            src="https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=1200&q=80" 
            alt="Iceland landscape" 
            className="w-full h-auto mb-12 bg-gray-100 dark:bg-gray-800"
          />
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The Golden Circle is one of Iceland's most popular tourist routes, and for good reason. 
              This spectacular journey takes you through some of the country's most breathtaking natural wonders, 
              all within a day's drive from Reykjavik.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              First stop: Thingvellir National Park, a UNESCO World Heritage site where you can literally walk 
              between the North American and Eurasian tectonic plates. The dramatic rift valley is a testament 
              to the powerful geological forces that continue to shape our planet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Next was the Geysir geothermal area, home to the famous Strokkur geyser that erupts every few minutes, 
              shooting boiling water up to 30 meters into the air. The anticipation of each eruption, combined with 
              the otherworldly landscape of bubbling mud pots and steaming vents, creates an unforgettable experience.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The final major stop was Gullfoss, the "Golden Falls." This massive two-tiered waterfall is absolutely 
              stunning, especially when the sun catches the mist and creates rainbows. The sheer power and scale of 
              the cascading water is humbling and beautiful.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
