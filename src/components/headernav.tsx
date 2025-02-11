import { useNavigate } from "react-router-dom";

function HeaderNav({ type = "desktop", className = "" }) {
  const navigate = useNavigate();

  const handleNavigation = (id: string) => {
    navigate("/");
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
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
