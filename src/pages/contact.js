import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <NavBar />
      <div className="max-w-xl mx-auto mt-10 p-5 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Contact Me</h1>
        <form className="flex flex-col space-y-4">
          <input type="text" placeholder="Your Name" className="p-2 border rounded dark:bg-gray-700 dark:text-white" />
          <input type="email" placeholder="Your Email" className="p-2 border rounded dark:bg-gray-700 dark:text-white" />
          <textarea placeholder="Your Message" className="p-2 border rounded dark:bg-gray-700 dark:text-white"></textarea>
          <button type="submit" className="p-2 bg-blue-500 text-white rounded hover:bg-blue-700">Send</button>
        </form>
      </div>
    </div>
  );
}
