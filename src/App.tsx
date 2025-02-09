import { Route, Routes } from "react-router-dom";  // Importe juste Route
import "./scss/style.scss";
import "bootstrap/js/index.umd.js";
import CursorEffect from "./components/cursoreffect.tsx";
import HeroEffect from "./components/heroeffect.tsx";
import Header from "./components/header.tsx";
import Hero from "./components/hero.tsx";
import Realisations from "./components/realisations.tsx";
import Experiences from "./components/experiences.tsx";
import Formations from "./components/formations.tsx";
import Footer from "./components/footer.tsx";
import Competences from "./components/competences.tsx";
import PageRealisations from "../src/pages/page-realisations.tsx";

function App() {
  return (
    <>
      <CursorEffect />
      <HeroEffect />
      <Header />

      <Routes>
        <Route path="/" element={
        <>
          <Hero />
          <Realisations />
          <Experiences />
          <Formations />
          <Competences />
        </>} />

        <Route path="/page-realisations" element={
        <>
          <PageRealisations />
        </>} />

        <Route path="*" element={<h1>Page non trouvée</h1>} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
