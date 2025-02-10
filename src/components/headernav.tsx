import { useNavigate } from "react-router-dom";

function HeaderNav() {
  const navigate = useNavigate();

  // Fonction pour naviguer à la Home et scroller à l’ancre
  const handleNavigation = (id: string) => {
    navigate("/portfolio/"); // Redirection vers la Home
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100); // Petit délai pour laisser le temps à la Home de charger
  };

  return (
    <nav className="header-nav">
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
