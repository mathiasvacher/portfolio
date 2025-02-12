import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function HeaderNav({ type = "desktop", className = "" }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [targetId, setTargetId] = useState<string | null>(null);

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
  }, [location.pathname]); // Exécuté après le changement de page

  const handleNavigation = (id: string) => {
    setTargetId(id);
    if (location.pathname !== "/") {
      navigate("/");
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav className={`header-nav ${type} ${className}`}>
      <button onClick={() => handleNavigation("realisations")}>Réalisations</button>
      <button onClick={() => handleNavigation("experiences")}>Expériences</button>
      <button onClick={() => handleNavigation("formations")}>Formations</button>
      <button onClick={() => handleNavigation("contact")} className="contact-btn bouton">
        Contact
      </button>
    </nav>
  );
}

export default HeaderNav;
