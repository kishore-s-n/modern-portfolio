import { useState } from "react";
import { LoadingScreen } from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import MobileMenu from "./components/MobileMenu";
import Home from "./components/sections/Home";
import About from "./components/sections/About";
import Projects from "./pages/Projects";
import { Contact } from "./components/sections/Contact";

const App = () => {
  const [loading, setLoading] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <>
      {!loading && (
        <LoadingScreen
          onComplete={() => {
            setLoading(true);
          }}
        />
      )}
      <div
        className={`min-h-screeen transition-opacity duration-700 ${loading ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
      </div>
    </>
  );
};

export default App;
