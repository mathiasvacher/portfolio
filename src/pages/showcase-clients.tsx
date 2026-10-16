import { Link } from "react-router-dom";
import TitreSection from "../components/titresection.tsx";

const clientSites = [
  {
    slug: "gnome-et-rhone",
    name: "Le Gnome et Rhône",
    location: "Lyon 3e · Saxe-Gambetta",
    type: "Bar · Restaurant",
    description: "Une vitrine chaleureuse pensée pour mettre le déjeuner, l’ambiance et les informations pratiques au premier plan.",
    palette: ["#1c231f", "#dc6740", "#f2eadc"],
  },
];

function ShowcaseClients() {
  return (
    <>
      <section className="showcase-clients-hero">
        <div className="showcase-clients-hero__content">
          <p className="showcase-clients-eyebrow">Démos de sites sur mesure</p>
          <h1>Votre futur site pourrait ressembler à ça.</h1>
          <p className="showcase-clients-hero__lead">
            Ces showcase sont des démonstrations conçues pour vous aider à vous projeter. Chaque univers peut être adapté à votre établissement, votre identité et à vos besoins.
          </p>
          <Link className="bouton" to="#contact">Parlons de votre projet</Link>
        </div>
      </section>

      <section id="showcase-clients">
        <div className="container-fluid">
        <TitreSection
          titre="Sites clients"
          explication="Des exemples pour imaginer votre future vitrine en ligne"
        />

        <div className="realisations-container showcase-clients-list">
          <p className="title-realisation">Projets à découvrir</p>

          {clientSites.map((site) => (
            <article className="realisation-single client-site-card" key={site.slug}>
              <div
                className="realisation-img client-site-visual"
                style={{
                  "--client-dark": site.palette[0],
                  "--client-accent": site.palette[1],
                  "--client-light": site.palette[2],
                } as React.CSSProperties}
                aria-label={`Aperçu du site ${site.name}`}
              >
                <span className="visual-label">{site.type}</span>
                <div className="visual-sun" />
                <div className="visual-wheel visual-wheel-left" />
                <div className="visual-wheel visual-wheel-right" />
                <div className="visual-wordmark"><span>LE GNOME</span><i>&amp;</i><span>RHÔNE</span></div>
              </div>

              <div className="realisation-text">
                <h3>{site.name}</h3>
                <p>{site.description}</p>
                <div className="realisation-outils">
                  <p>Projet : <span>{site.location}</span><span>{site.type}</span></p>
                </div>
                <div className="realisation-buttons">
                  <Link to={`/showcase-clients/${site.slug}`} className="bouton btn-projet" aria-label={`Découvrir le site ${site.name}`}>
                    Découvrir le site
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        </div>
      </section>
    </>
  );
}

export default ShowcaseClients;
