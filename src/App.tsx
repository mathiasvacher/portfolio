import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./scss/style.scss";
import "bootstrap/js/index.umd.js";
import CursorEffect from "./components/cursoreffect.tsx";
import HeroEffect from "./components/heroeffect.tsx";
import Header from "./components/header.tsx";
import Footer from "./components/footer.tsx";
import ScrollToTop from "./components/scrolltotop.tsx";
import Error from "./components/404.tsx";
import PageRealisations from "./pages/realisations.tsx";
import Homepage from "./pages/homepage.tsx";
import RealisationsDetails from "./pages/realisation-details.tsx";
import CV from "./pages/cv.tsx";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

const PageWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit="exit"
    variants={pageVariants}
  >
    {children}
  </motion.div>
);

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Homepage />
            </PageWrapper>
          }
        />
        <Route
          path="/realisations"
          element={
            <PageWrapper>
              <PageRealisations />
            </PageWrapper>
          }
        />
        <Route
          path="/cv"
          element={
            <PageWrapper>
              <CV />
            </PageWrapper>
          }
        />
        <Route
          path="/realisations/:projetId"
          element={
            <PageWrapper>
              <RealisationsDetails />
            </PageWrapper>
          }
        />
        <Route
          path="*"
          element={
            <PageWrapper>
              <Error />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <>
      <main>
        <ScrollToTop />
        <CursorEffect />
        <HeroEffect />
        <Header />
        <AnimatedRoutes />
        <Footer />
      </main>
    </>
  );
}

export default App;
