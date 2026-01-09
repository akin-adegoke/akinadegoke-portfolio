import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen flex items-center justify-center bg-black dark:bg-black text-gray-200 py-20 px-4">
        <div className="w-full max-w-3xl bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-8 shadow-xl">
          <h1 className="text-5xl font-bold mb-6 text-center">Get in Touch</h1>
          <p className="mb-8 text-center text-lg text-gray-400">
            I'd love to hear from you! Whether you want to collaborate on an engineering project, discuss photography adventures, or share musical vibes, feel free to reach out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <a href="https://www.linkedin.com/in/adegoke" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-800 transition-colors">LinkedIn</a>
            <a href="https://instagram.com/_ak1nn_" target="_blank" rel="noopener noreferrer" className="px-6 py-3 border border-gray-600 rounded-full text-gray-300 hover:bg-gray-800 transition-colors">Instagram</a>
          </div>
          <form className="flex flex-col space-y-4">
            <input type="text" placeholder="Your Name" className="p-4 bg-gray-800 border border-gray-700 rounded text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" placeholder="Your Email" className="p-4 bg-gray-800 border border-gray-700 rounded text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <textarea placeholder="Your Message" className="p-4 bg-gray-800 border border-gray-700 rounded text-gray-200 h-32 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
            <button type="submit" className="p-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
          </form>
        </div>
      </section>
    </>
  );
}
