import NavBar from "../../components/NavBar";
import Corners from "../../components/Corners";
import Link from "next/link";

export default function SmartGreenhouse() {
  return (
    <div>
      <NavBar />
      <article className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="reveal font-mono text-xs tracking-[0.15em] uppercase text-dim hover:text-accent transition-colors mb-8 inline-block"
          >
            ← back_to_writing
          </Link>
          <p className="reveal font-mono text-xs tracking-[0.15em] uppercase text-accent mt-8 mb-4" style={{ animationDelay: "0.1s" }}>
            January 9, 2026
          </p>
          <h1 className="reveal font-display text-4xl sm:text-5xl text-chalk mb-8" style={{ animationDelay: "0.15s" }}>
            Building a Smart Greenhouse
          </h1>
          <div className="reveal relative mb-12" style={{ animationDelay: "0.2s" }}>
            <img
              src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=1200&q=80"
              alt="Smart greenhouse concept"
              className="w-full h-auto bg-panel border border-edge"
            />
            <Corners />
          </div>
          <div className="reveal space-y-6 text-lg text-dim leading-relaxed" style={{ animationDelay: "0.3s" }}>
            <p>
              In my greenhouse project, I'm using internet-connected sensors to monitor soil moisture, temperature, and nutrient levels.
              Smart greenhouses gather data from sensors and use AI algorithms to analyze it, allowing automatic control of irrigation and lighting.
              This ensures that plants receive exactly what they need while minimizing water and energy waste.
            </p>
            <p>
              The system also uses a camera and computer vision to detect plant health issues. AI can analyze data
              from sensors and cameras to automatically control the greenhouse climate and even detect pests and diseases.
              By combining these technologies, my greenhouse will provide an ideal environment for plants with minimal manual intervention.
            </p>
            <p>
              Stay tuned as I continue refining the hardware and software to make this greenhouse smarter and more sustainable.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
