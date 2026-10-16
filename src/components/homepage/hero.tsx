import LogoSocials from "../logos-socials";
import { Link } from "react-router-dom";
function Hero() {
  return (
    <section id="hero">
      <div className="gradient">
        <div className="content">
          <p className="job-title">Développeur web freelance</p>

          <h2>Des sites pensés pour vous ressembler — et vous faire avancer.</h2>

          <p className="description">
            Moi, c&apos;est Mathias. J&apos;aime transformer une idée, une activité ou une
            histoire en une expérience web claire et agréable. Je crée des sites
            vitrines sur mesure pour les entreprises qui veulent mieux présenter
            leur savoir-faire, inspirer confiance et attirer de nouveaux clients.
          </p>

          <LogoSocials />

          <div className="btn-hero">
            <Link to="/services" className="bouton">
              Services
            </Link>
            <a href="#realisations" className="bouton">
              {" "}
              Voir mes projets
            </a>
            <Link to="/cv" className="bouton secondary">
              Mon CV
            </Link>
            <Link to="/autres-sites" className="bouton secondary">
              Autres sites
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
