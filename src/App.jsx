import Sidebar from "./Components/Sidebar/Sidebar";
import Cards from "./Components/Cards/MainCard/Cards";

export default function App() {
  return (
    <div className="w-full min-h-screen flex justify-center bg-white dark:bg-neutral-950 transition-colors duration-200">
      <div className="w-full max-w-360 flex flex-col lg:flex-row">
        <Sidebar />
        <main className="w-full">
          <Cards />
        </main>
      </div>
    </div>
  );
}
