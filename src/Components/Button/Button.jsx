export default function Button({ href, label }) {
  return (
    <div>
      <button className="px-[18px] py-[6px] rounded-[5px] cursor-pointer hover:bg-[var(--hover-color)] mt-[30px] border-none">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#000000] no-underline"
        >
          {label}
        </a>
      </button>
    </div>
  );
}
