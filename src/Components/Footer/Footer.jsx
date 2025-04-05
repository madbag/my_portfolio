import "./Footer.css"

export default function Footer() {
  return (
    <div className="footer text-[var(--primary-text-color)] mt-auto py-[50px] flex flex-col items-center justify-center">
      <p>
        Thank you{" "}
        <a
          href="https://nevflynn.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="no-underline text-[var(--primary-text-color)] cursor-pointer hover:text-[var(--hover-color)]"
        >
          Nev Flynn
        </a>{" "}
        for the idea 🌸
      </p>

      <div className="footer-bottom flex flex-row justify-center gap-[10px] mt-[10px] ">
        <a
          href="https://www.linkedin.com/in/madhushreeb/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-text-color)] hover:text-[var(--hover-color)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="currentColor"
            class="bi bi-linkedin mt-[2px]"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
          </svg>
        </a>
        <a
          href="https://github.com/madbag"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-text-color)] hover:text-[var(--hover-color)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="currentColor"
            class="bi bi-github mt-[2px]"
            viewBox="0 0 16 16"
          >
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
          </svg>
        </a>
        <a
          href="mailto:boylemadhushree@gmail.com"
          className="text-[var(--primary-text-color)] hover:text-[var(--hover-color)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="20"
            fill="currentColor"
            className="mt-[2px]"
            viewBox="0 0 16 16"
          >
            <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
          </svg>
        </a>

        <a
          href="https://medium.com/@madhushree.b"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--primary-text-color)] hover:text-[var(--hover-color)]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 30 30"
            className="fill-current "
          >
            <path d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M22.542,21h-5.931 v-0.333L18,19.445V12.47L14.589,21h-0.533l-3.806-8.597v6.087l1.74,2.177V21H7.458v-0.333l1.799-2.177v-7.242L7.658,9.249 c0,0,0-0.289,0-0.244h4.376l3.399,7.353l2.932-7.353h4.154v0.244L21,10.526v8.919l1.542,1.222V21z"></path>
          </svg>{" "}
        </a>
      </div>
    </div>
  );
}
