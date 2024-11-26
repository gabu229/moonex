import LandingPage from "./pages/LandingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./App.css";
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import { useRef } from "react";

function App() {
  const ref = useRef(null);

  const options = {
    smooth: true,
  };

  return (
    <LocomotiveScrollProvider options={options} containerRef={ref} watch={[]}>
      <Navbar />
      <div ref={ref} data-scroll data-scroll-container>
        <LandingPage />
        <Footer />
      </div>
    </LocomotiveScrollProvider>
  );
}

export default App;
