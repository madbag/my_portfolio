export default function Button({ href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="px-4.5 py-1.5 rounded text-sm text-(--hover-text-color) hover:text-(--secondary-text-color) cursor-pointer hover:bg-(--primary-text-color) bg-(--secondary-text-color) border border-(--hover-text-color) no-underline"
    >
      {label}
    </a>
  );
}