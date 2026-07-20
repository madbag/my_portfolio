import Sidebar from "./Components/Sidebar/Sidebar";
import Cards from "./Components/Cards/MainCard/Cards";

export default function App() {
  return (
    <div className="w-full min-h-screen flex flex-col lg:flex-row bg-white">
      <Sidebar />
      <main className="w-full lg:ml-[340px] xl:ml-[400px]">
        <Cards />
      </main>
    </div>
  );
}
