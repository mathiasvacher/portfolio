import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import HeaderNav from "./headernav.tsx";

function Header() {
  const [menuActive, setMenuActive] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setMenuActive((prev) => !prev);
  };

  // Ferme le menu si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuActive(false);
      }
    };

    if (menuActive) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [menuActive]);

  const handleLogoClick = (event: React.MouseEvent) => {
    event.preventDefault();
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header>
      <div className="header-wrapper">
        <div className="header-container desktop">
          <div className="nom">
            <Link to="/" onClick={handleLogoClick}>
              <h1>Mathias Vacher</h1>
            </Link>
          </div>
          <HeaderNav type="desktop" />
        </div>

        <div className="header-container mobile" ref={menuRef}>
          <div className="nom">
            <Link to="/" onClick={handleLogoClick}>
              <h1>Mathias Vacher</h1>
            </Link>
          </div>

          <div
            className={`menu-icon ${menuActive ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <input
              className="menu-icon__checkbox"
              type="checkbox"
              checked={menuActive}
              readOnly
            />
            <div>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>

        <HeaderNav type="mobile" className={menuActive ? "active" : ""} />
      </div>
    </header>
  );
}

export default Header;