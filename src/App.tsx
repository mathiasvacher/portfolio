import { Route, Routes } from "react-router-dom";  // Importe juste Route
import "./scss/style.scss";
import "bootstrap/js/index.umd.js";
import CursorEffect from "./components/cursoreffect.tsx";
import HeroEffect from "./components/heroeffect.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import PageRealisations from "./pages/realisations.tsx";
import Homepage from "../src/pages/homepage.tsx";

function App() {
  return (
    <>
      <main>
        <CursorEffect />
        <HeroEffect />
        <Header />

        <Routes>
          <Route path="/portfolio/" element={
          <>
            <Homepage />
          </>
        } />

          <Route path="/portfolio/realisations" element={
          <>
            <PageRealisations />
          </>} />

          <Route path="*" element={<h1>Page non trouvée</h1>} />

        </Routes>
        <Footer />
      </main>
    </>
  );
}

export default App;
