export default function Button({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-sm text-black/30 hover:text-black transition-colors duration-200 no-underline"
    >
      {label}
    </a>
  );
}