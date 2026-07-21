import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-grid" aria-hidden="true" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-glow" aria-hidden="true" />
      <div
        className="fixed inset-0 z-[1] pointer-events-none bg-grain mix-blend-overlay"
        aria-hidden="true"
      />
      <Component {...pageProps} />
    </>
  );
}
