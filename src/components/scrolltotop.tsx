import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // Si l'URL ne contient pas de hash, on scroll en haut
    if (!hash) {
      window.scrollTo(0, 0);
    }
    // Sinon, laisser le navigateur gérer l'ancre
  }, [pathname, hash]);

  return null;
};

export default ScrollToTop;
