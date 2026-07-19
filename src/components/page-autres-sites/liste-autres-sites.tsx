const illustrations = import.meta.glob(
  "../../assets/img/autres-sites/*",
  { eager: true, import: "default", query: "?url" },
) as Record<string, string>;

const autresSites = [
  {
    titre: '"Je sais pas"',
    description:
      "Un outil pour vous aider à choisir quoi manger quand l'inspiration manque (très utile avec votre chéri(e)...).",
    url: "https://www.jesaispas.mathiasvacher.fr/",
    githubUrl: "https://github.com/mathiasvacher/je-sais-pas",
    illustration: illustrations["../../assets/img/autres-sites/jesaispas.jpg"],
    technologies: ["React", "TypeScript", "Vite"],
  },
  {
    titre: "Météo",
    description:
      "Consultez la météo d'une ville grâce à une API, avec recherche et autocomplétion.",
    url: "https://www.meteo.mathiasvacher.fr/",
    githubUrl: "https://github.com/mathiasvacher/meteo",
    illustration: illustrations["../../assets/img/autres-sites/meteo.jpg"],
    technologies: ["React", "TypeScript", "API météo"],
  },
];

function ListeAutresSites() {
  return (
    <section id="liste-autres-sites">
      <div className="container-fluid">
        <div className="autres-sites-grid">
          {autresSites.map((site) => (
            <article className="autre-site-card" key={site.url}>
              <div>
                <p className="site-type">Site utilitaire</p>
                <h2>{site.titre}</h2>
                <p>{site.description}</p>
              </div>

              {site.illustration && (
                <a
                  href={site.url}
                  className="site-illustration-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visiter ${site.titre}`}
                >
                  <img
                    src={site.illustration}
                    alt={`Aperçu du site ${site.titre}`}
                    className="site-illustration"
                  />
                </a>
              )}

              <div className="site-card-footer">
                <div className="site-technologies" aria-label="Technologies utilisées">
                  {site.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
                <div className="site-card-buttons">
                  <a
                    href={site.url}
                    className="bouton secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visiter le site ↗
                  </a>
                  <a
                    href={site.githubUrl}
                    className="btn-live"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Voir sur GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ListeAutresSites;
