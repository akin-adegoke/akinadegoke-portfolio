import NavBar from "../components/NavBar";

export default function Blog() {
  return (
    <div>
      <NavBar />
      <div className="text-center mt-10">
        <h1 className="text-3xl font-bold">My Blog</h1>
        <p className="text-lg mt-4">Welcome to my blog! Stay tuned for updates.</p>
      </div>
    </div>
  );
}
