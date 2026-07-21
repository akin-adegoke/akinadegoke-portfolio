import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="fixed inset-0 z-0 pointer-events-none bg-scanlines" aria-hidden="true" />
      <div className="fixed inset-0 z-0 pointer-events-none bg-vignette" aria-hidden="true" />
      <Component {...pageProps} />
    </>
  );
}
