import NavBar from "../components/NavBar";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Use mailto as a simple solution
    const mailtoLink = `mailto:akin.adegoke10@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`)}`;

    window.location.href = mailtoLink;

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setStatus('sent');

    setTimeout(() => setStatus(''), 3000);
  };

  return (
    <>
      <NavBar />
      <section className="relative z-10 min-h-screen pt-32 pb-24 px-6 sm:px-8 flex items-center">
        <div className="w-full max-w-2xl mx-auto">
          <p
            className="reveal font-mono text-xs tracking-[0.25em] uppercase text-accent mb-4 flex items-center gap-2"
            style={{ animationDelay: "0.05s" }}
          >
            <span className="font-body normal-case tracking-normal">接続</span>
            <span className="text-dim">// CONNECT</span>
          </p>
          <h1
            className="reveal font-display text-5xl sm:text-6xl md:text-7xl text-chalk mb-6"
            style={{ animationDelay: "0.15s" }}
          >
            Get in <span className="text-accent">touch.</span>
          </h1>
          <p
            className="reveal text-lg text-dim mb-10 leading-relaxed"
            style={{ animationDelay: "0.25s" }}
          >
            I'd love to hear from you. Whether you want to collaborate on an engineering
            project, discuss photography adventures, or share musical vibes, feel free to
            reach out.
          </p>
          <div
            className="reveal flex gap-6 mb-10 font-mono text-xs tracking-[0.15em] uppercase"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="https://www.linkedin.com/in/adegoke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chalk hover:text-accent transition-colors border-b border-edge hover:border-accent pb-0.5"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/_ak1nn_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-chalk hover:text-accent transition-colors border-b border-edge hover:border-accent pb-0.5"
            >
              Instagram
            </a>
          </div>
          {status === 'sent' && (
            <div className="mb-6 p-4 border border-accent bg-accentSoft text-accent font-mono text-xs tracking-[0.1em] uppercase">
              Your email client should open shortly. Thank you for reaching out!
            </div>
          )}
          <form
            className="reveal space-y-6 border border-edge bg-panel p-6 sm:p-8"
            onSubmit={handleSubmit}
            style={{ animationDelay: "0.4s" }}
          >
            <div>
              <label htmlFor="name" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim mb-2">
                <span className="text-accent">&gt;</span> Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="w-full px-4 py-3 bg-void border border-edge text-chalk placeholder-dim focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="email" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim mb-2">
                <span className="text-accent">&gt;</span> Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-void border border-edge text-chalk placeholder-dim focus:outline-none focus:border-accent transition-colors"
              />
            </div>
            <div>
              <label htmlFor="message" className="flex items-center gap-2 font-mono text-[11px] tracking-[0.15em] uppercase text-dim mb-2">
                <span className="text-accent">&gt;</span> Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your message"
                rows="6"
                className="w-full px-4 py-3 bg-void border border-edge text-chalk placeholder-dim focus:outline-none focus:border-accent transition-colors resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-8 py-3 bg-accent text-void font-mono text-xs tracking-[0.15em] uppercase font-medium hover:opacity-85 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? '[ Transmitting... ]' : '[ Transmit ]'}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
