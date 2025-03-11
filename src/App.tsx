import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Cards from "./Components/Cards/Cards";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Cards />
      <Footer />
    </div>
  );
}
