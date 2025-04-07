export default function Button({ href, label }) {
  return (
    <div>
      <button className="px-[18px] py-[6px] rounded-[5px] cursor-pointer hover:bg-[var(--primary-text-color)] text-mt-[30px] bg-[var(--secondary-text-color)] border-1 border-[var(--hover-text-color)] ">
        <span
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--hover-text-color)] hover:text-[var(--secondary-text-color)] no-underline "
        >
          {label}
        </span>
      </button>
    </div>
  );
}
