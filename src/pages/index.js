import NavBar from "../components/NavBar";  // Ensure correct import

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-4xl font-bold">Welcome to Akin Adegoke's Portfolio</h1>
        <p className="text-lg mt-4">This is my personal website built with Next.js!</p>
      </div>
    </div>
  );
}
