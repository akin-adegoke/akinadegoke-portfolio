import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-white dark:bg-gray-900 pt-32 pb-20 px-6 sm:px-8 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          <h1 className="text-5xl sm:text-6xl font-light tracking-tight text-gray-900 dark:text-white mb-8">
            Get in Touch
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
            I'd love to hear from you. Whether you want to collaborate on an engineering project, discuss photography adventures, or share musical vibes, feel free to reach out.
          </h1>
          <div className="flex gap-6 mb-12">
            <a 
              href="https://www.linkedin.com/in/adegoke" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-900 dark:border-white hover:border-gray-600 dark:hover:border-gray-300"
            >
              LinkedIn
            </a>
            <a 
              href="https://instagram.com/_ak1nn_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-900 dark:text-white hover:text-gray-600 dark:hover:text-gray-300 transition-colors border-b border-gray-900 dark:border-white hover:border-gray-600 dark:hover:border-gray-300"
            >
              Instagram
            </a>
          </div>
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input 
                type="text" 
                id="name"
                placeholder="Your name"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input 
                type="email" 
                id="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea 
                id="message"
                placeholder="Your message"
                rows="6"
                className="w-full px-4 py-3 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:border-gray-900 dark:focus:border-white transition-colors resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-700 dark:hover:bg-gray-200 transition-colors"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
