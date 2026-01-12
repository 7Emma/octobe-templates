import Home from "./pages/Home";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import About from "./pages/About";
import Subtane from "./pages/Subtane"

function App() {
  return (
    <div className="bg-white m-3">
      <Header />
      <HeroSection />
      <Home />
      <About />
      <Subtane />
    </div>
  );
}

export default App;
