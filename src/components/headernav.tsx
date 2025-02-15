import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderNav({ type = "desktop", className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [targetId, setTargetId] = useState<string | null>(null);

  const handleNavigation = (id: string) => {
    if (location.pathname !== "/") {
      navigate("/#" + id); // Change l’URL avec le hash
      setTargetId(id);
    } else {
      navigate("#" + id, { replace: true }); // Met à jour l’URL sans ajouter une nouvelle entrée dans l’historique
      scrollToSection(id);
    }
  };

  const scrollToSection = (id: string) => {
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  // Écoute le changement du hash dans l'URL
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      scrollToSection(id);
    }
  }, [location.hash]);

  // Gère le retour à la page d'accueil et l'ancre après navigation
  useEffect(() => {
    if (targetId) {
      const checkElement = setInterval(() => {
        const element = document.getElementById(targetId);
        if (element) {
          clearInterval(checkElement);
          element.scrollIntoView({ behavior: "smooth" });
          setTargetId(null);
        }
      }, 100);

      return () => clearInterval(checkElement);
    }
  }, [location.pathname, targetId]);

  return (
    <nav className={`header-nav ${type} ${className}`}>
      <button onClick={() => handleNavigation("realisations")}>Réalisations</button>
      <button onClick={() => handleNavigation("experiences")}>Expériences</button>
      <button onClick={() => handleNavigation("formations")}>Formations</button>
      <a href="#contact"className="contact-btn bouton">
        Contact
      </a>
    </nav>
  );
}

export default HeaderNav;
