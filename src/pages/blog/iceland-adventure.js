import NavBar from "../../components/NavBar";

export default function IcelandAdventure() {
  return (
    <div>
      <NavBar />
      <article className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold mb-4">Exploring Iceland’s Golden Circle</h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">January 9, 2026</p>
        <img src="https://via.placeholder.com/600x400" alt="Golden Circle scenery" className="w-full h-auto mb-6 rounded" />
        <p className="mb-4">
          Iceland’s famous Golden Circle route makes a perfect photography road trip. Just outside Reykjavik, it links three
          spectacular natural attractions【368284052047377†L62-L130】.
        </p>
        <p className="mb-4">
          The tour starts at Thingvellir National Park, where you can walk between the tectonic plates of North America and Eurasia.
          From there, continue to the Geysir geothermal area and watch the Strokkur geyser erupt every 8–10 minutes【368284052047377†L62-L130】.
          Finish the loop at Gullfoss waterfall, a massive two-tier cascade that plunges into a rugged canyon.
        </p>
        <p className="mb-4">
          I captured dramatic landscapes at each stop, from the rugged rift valley to steaming hot springs and thundering falls.
          These sites showcase Iceland’s raw power and natural beauty.
        </p>
        <img src="https://via.placeholder.com/600x400" alt="Iceland geyser" className="w-full h-auto mb-6 rounded" />
        <p>
          If you’re planning a visit to Iceland, the Golden Circle is a must-see route that packs incredible scenery into a single day.
        </p>
      </article>
    </div>
  );
}
