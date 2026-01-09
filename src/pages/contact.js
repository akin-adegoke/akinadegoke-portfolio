import NavBar from "../components/NavBar";

export default function Contact() {
  return (
    <>
      <NavBar />
      <section className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100 py-12">
        <div className="container mx-auto max-w-2xl p-6 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <h1 className="text-3xl font-bold mb-4">Get in Touch</h1>
          <p className="mb-6">
            I'd love to hear from you! Whether you want to collaborate on an engineering project,
            discuss photography adventures, or share musical vibes, feel free to reach out.
          </p>
          <p className="mb-6">
            Connect with me on{' '}
            <a
              href="https://www.linkedin.com/in/akinadegoke"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>{' '}
            or{' '}
            <a
              href="https://instagram.com/_ak1nn_"
              className="text-pink-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            .
          </p>
          <form className="flex flex-col space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
            />
            <textarea
              placeholder="Your Message"
              className="p-3 border rounded h-32 dark:bg-gray-700 dark:text-white dark:border-gray-600"
            ></textarea>
            <button
              type="submit"
              className="p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
