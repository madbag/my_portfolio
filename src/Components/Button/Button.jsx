export default function Button({ href, label }) {
  return (
    <div>
      <button className="px-[18px] py-[6px] rounded-[5px] text-[var(--hover-text-color)] hover:text-[var(--secondary-text-color)] cursor-pointer hover:bg-[var(--primary-text-color)] text-mt-[30px] bg-[var(--secondary-text-color)] border-1 border-[var(--hover-text-color)] ">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[14px] text-inherit"
        >
          {label}
        </a>
      </button>
    </div>
  );
}
