export default function Corners({ className = "" }) {
  const base = "absolute w-3 h-3 border-accent pointer-events-none";
  return (
    <>
      <span className={`${base} top-0 left-0 border-t-2 border-l-2 ${className}`} />
      <span className={`${base} top-0 right-0 border-t-2 border-r-2 ${className}`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2 ${className}`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2 ${className}`} />
    </>
  );
}
