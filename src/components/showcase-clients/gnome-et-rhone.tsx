import { type MouseEvent, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import showcaseStyles from "../../scss/showcase-clients/gnome-et-rhone.scss?inline";
import menu1 from "../../assets/img/showcase-clients/gnome-et-rhone/menu/menu-1.webp";
import menu2 from "../../assets/img/showcase-clients/gnome-et-rhone/menu/menu-2.webp";
import menu3 from "../../assets/img/showcase-clients/gnome-et-rhone/menu/menu-3.webp";
import heroFrontage from "../../assets/img/showcase-clients/gnome-et-rhone/hero/devanture.jpg";
import terrace from "../../assets/img/showcase-clients/gnome-et-rhone/exterieur/terrasse.jpg";
import eveningRoom from "../../assets/img/showcase-clients/gnome-et-rhone/interieur/salle-soiree.jpg";
import liveMusic from "../../assets/img/showcase-clients/gnome-et-rhone/interieur/soiree-musicale.jpg";
import foosballRoom from "../../assets/img/showcase-clients/gnome-et-rhone/interieur/salle-babyfoot.jpg";

const restaurant = {
  address: "Le Gnome et Rhône, 157 Av. Maréchal de Saxe, 69003 Lyon",
  phone: "04 82 33 25 56",
  phoneLink: "tel:+33482332556",
  instagram: "https://www.instagram.com/legnomeetrhone/?hl=fr",
  maps: "https://www.google.com/maps/search/?api=1&query=Le%20Gnome%20et%20Rh%C3%B4ne%2C%20157%20Av.%20Mar%C3%A9chal%20de%20Saxe%2C%2069003%20Lyon",
};

const openingHours = [["Lundi", "10:30–01:00"], ["Mardi", "10:30–01:00"], ["Mercredi", "10:30–01:00"], ["Jeudi", "10:30–01:00"], ["Vendredi", "10:30–01:00"], ["Samedi", "15:30–01:00"], ["Dimanche", "15:30–01:00"]] as const;
const currentDay = new Intl.DateTimeFormat("fr-FR", { weekday: "long" }).format(new Date());

const menuImages = [
  { src: menu1, alt: "Carte du Gnome et Rhône — page 1" },
  { src: menu2, alt: "Carte du Gnome et Rhône — page 2" },
  { src: menu3, alt: "Carte du Gnome et Rhône — page 3" },
];

const reviews = [
  {
    quote:
      "Cadre super mignon, musique agréable et personnel vraiment accueillant.",
    author: "jujulo62",
    date: "Avis Google · il y a 3 mois",
  },
  {
    quote:
      "Super déjeuner sur la terrasse ensoleillée, avec un très bon accueil.",
    author: "Margaux",
    date: "Avis Google · il y a 1 mois",
  },
  {
    quote:
      "Musique récente, à un niveau qui permet de discuter, avec une bonne ambiance.",
    author: "Enzo Roudier",
    date: "Avis Google · il y a 1 mois",
  },
];

const galleryPhotos = [
  {
    src: terrace,
    alt: "La terrasse du Gnome et Rhône",
  },
  {
    src: eveningRoom,
    alt: "La salle du Gnome et Rhône lors d’une soirée",
  },
  {
    src: liveMusic,
    alt: "Une animation musicale au Gnome et Rhône",
  },
  {
    src: foosballRoom,
    alt: "L’intérieur du Gnome et Rhône",
  },
];

const Arrow = () => (
  <svg className="arrow-icon" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M3 13 13 3M6 3h7v7" />
  </svg>
);
const DownArrow = () => (
  <svg className="scroll-arrow" viewBox="0 0 16 16" aria-hidden="true">
    <path d="M8 2v11M4 9l4 4 4-4" />
  </svg>
);
const MenuIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
);

export default function GnomeEtRhoneShowcase() {
  const [navOpen, setNavOpen] = useState(false);
  const [selectedMenuImage, setSelectedMenuImage] = useState<number | null>(null);
  const hostRef = useRef<HTMLDivElement>(null);
  const [shadowRoot, setShadowRoot] = useState<ShadowRoot | null>(null);
  const closeNav = () => setNavOpen(false);
  const scrollToSection = (event: MouseEvent<HTMLAnchorElement>) => {
    const id = event.currentTarget.getAttribute("href")?.slice(1);
    const target = id ? shadowRoot?.getElementById(id) : null;
    if (!target) return;
    event.preventDefault();
    closeNav();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  useLayoutEffect(() => {
    if (hostRef.current && !shadowRoot) {
      setShadowRoot(hostRef.current.attachShadow({ mode: "open" }));
    }
  }, [shadowRoot]);

  const showcase = (
    <div className="gnome-showcase">
      <a className="showcase-back" href="/showcase-clients">
        ← Retour
      </a>
      <header className="site-header">
        <a
          href="#accueil"
          className="wordmark"
          aria-label="Le Gnome et Rhône, accueil"
          onClick={scrollToSection}
        >
          <span>LE GNOME</span>
          <i>&</i>
          <span>RHÔNE</span>
        </a>
        <button
          className="nav-toggle"
          type="button"
          aria-label="Ouvrir le menu"
          aria-expanded={navOpen}
          onClick={() => setNavOpen(!navOpen)}
        >
          <MenuIcon />
        </button>
        <nav
          className={navOpen ? "open" : ""}
          aria-label="Navigation principale"
        >
          <a href="#midi" onClick={scrollToSection}>
            La carte
          </a>
          <a href="#esprit" onClick={scrollToSection}>
            L’esprit
          </a>
          <a href="#infos" onClick={scrollToSection}>
            Nous trouver
          </a>
          <a
            className="nav-instagram"
            href={restaurant.instagram}
            target="_blank"
            rel="noreferrer"
          >
            Instagram <Arrow />
          </a>
        </nav>
        <a className="header-cta" href="#midi" onClick={scrollToSection}>
          Voir le menu <Arrow />
        </a>
      </header>
      <main>
        <section id="accueil" className="hero">
          <div className="hero-noise" />
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="kicker">
                <span /> Lyon 3e · Saxe-Gambetta
              </p>
              <h1>
                Bien manger.
                <br />
                <em>Bien vivre.</em>
              </h1>
              <p className="hero-lead">
                Cuisine traditionnelle le midi, verres entre amis le soir. Une
                table de quartier au rythme de Lyon.
              </p>
              <div className="hero-actions">
                <a
                  className="button button-light"
                  href="#midi"
                  onClick={scrollToSection}
                >
                  Découvrir la carte <Arrow />
                </a>
                <a
                  className="text-link"
                  href={restaurant.maps}
                  target="_blank"
                  rel="noreferrer"
                >
                  Itinéraire <Arrow />
                </a>
              </div>
            </div>
            <div
              className="hero-art"
              aria-label="Devanture du Gnome et Rhône"
            >
              <div className="hero-sun" aria-hidden="true" />
              <img className="hero-frontage" src={heroFrontage} alt="Devanture du Gnome et Rhône" />
              <p className="art-caption">LE GNOME & RHÔNE · LYON 3e</p>
            </div>
          </div>
          <div className="hero-footer">
            <span>Au coin de Saxe</span>
            <span className="scroll-note">
              Faire défiler <DownArrow />
            </span>
            <span>Depuis 20XX</span>
          </div>
        </section>
        <section id="esprit" className="intro section-pad">
          <div className="section-label">01 — L’esprit du lieu</div>
          <div className="intro-content">
            <h2>
              Une adresse qui ne fait pas <em>semblant.</em>
            </h2>
            <div>
              <p>
                Au Gnome et Rhône, on se retrouve autour d’une cuisine
                traditionnelle à midi, d’une bière ou d’un cocktail quand la
                journée se prolonge.
              </p>
              <p>
                La salle a gardé son caractère, dans un décor de pub et
                d’anciennes motocyclettes. Concerts, DJ sets et matchs font
                aussi vivre les soirées.
              </p>
              <a
                className="text-link dark-link"
                href={restaurant.instagram}
                target="_blank"
                rel="noreferrer"
              >
                Suivre l’actualité sur Instagram <Arrow />
              </a>
            </div>
          </div>
        </section>
        <section id="midi" className="lunch-section">
          <div className="lunch-heading section-pad">
            <div className="section-label">02 — Boire & grignoter</div>
            <h2>
              On trinque ?<br />
              <em>on partage.</em>
            </h2>
            <p>Découvrez la carte du lieu, à ouvrir en grand pour lire chaque détail.</p>
          </div>
          <div className="menu-gallery" aria-label="Carte du Gnome et Rhône">
            {menuImages.map((image, index) => <button type="button" className="menu-image-card" key={image.src} onClick={() => setSelectedMenuImage(index)} aria-label={`Agrandir ${image.alt}`}>
              <img src={image.src} alt={image.alt} loading="lazy" />
              <span>Voir en grand</span>
            </button>)}
          </div>
        </section>
        <section className="photo-gallery" aria-labelledby="gallery-title">
          <div className="gallery-heading section-pad">
            <div className="section-label">03 — En images</div>
            <h2 id="gallery-title">
              L’ambiance du <em>Gnome.</em>
            </h2>
            <p>Quelques vues du lieu, de la terrasse aux soirées musicales.</p>
          </div>
          <div className="gallery-grid">
            {galleryPhotos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
              />
            ))}
          </div>
          <p className="gallery-credit">
            Photos : Le Gnome & Rhône Café via Privateaser
          </p>
        </section>
        <section className="quote-band">
          <p>
            « Pub sympa, <em>mais pas seulement</em> »
          </p>
          <span>— Avis client</span>
        </section>
        <section
          className="reviews section-pad"
          aria-labelledby="reviews-title"
        >
          <div className="section-label">04 — Quelques mots entendus</div>
          <div className="reviews-heading">
            <h2 id="reviews-title">
              Les habitués
              <br />
              en parlent <em>mieux.</em>
            </h2>
            <p>Une sélection d’avis Google publics.</p>
          </div>
          <div className="review-grid">
            {reviews.map((review) => (
              <article className="review-card" key={review.author}>
                <span className="review-star">✦</span>
                <blockquote>“{review.quote}”</blockquote>
                <footer>
                  <strong>{review.author}</strong>
                  <span>{review.date}</span>
                </footer>
              </article>
            ))}
          </div>
        </section>
        <section id="infos" className="contact-section">
          <div className="contact-copy">
            <div className="section-label">05 — Passer nous voir</div>
            <h2>
              On vous garde
              <br />
              une place <em>?</em>
            </h2>
            <p>
              À deux pas de Saxe-Gambetta, pour déjeuner, boire un verre ou
              laisser la soirée s’installer.
            </p>
            <div className="contact-actions">
              <a className="button button-light" href={restaurant.maps} target="_blank" rel="noreferrer">
                Ouvrir l’itinéraire <Arrow />
              </a>
              <a className="button button-outline" href={restaurant.phoneLink}>
                Appeler le restaurant
              </a>
            </div>
          </div>
          <div className="contact-card">
            <span className="card-kicker">LE GNOME & RHÔNE</span>
            <address>{restaurant.address}</address>
            <a href={restaurant.phoneLink}>{restaurant.phone}</a>
            <div className="opening"><span>Horaires</span><dl>{openingHours.map(([day, hours]) => <div className={day.toLocaleLowerCase("fr-FR") === currentDay ? "is-today" : undefined} key={day}><dt>{day}</dt><dd>{hours}</dd></div>)}</dl></div>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <a
          className="wordmark footer-mark"
          href="#accueil"
          onClick={scrollToSection}
        >
          <span>LE GNOME</span>
          <i>&</i>
          <span>RHÔNE</span>
        </a>
        <div>
          <a href="#midi" onClick={scrollToSection}>
            La carte
          </a>
          <a href="#esprit" onClick={scrollToSection}>
            L’esprit
          </a>
          <a href="#infos" onClick={scrollToSection}>Nous trouver</a>
          <a href={restaurant.instagram} target="_blank" rel="noreferrer">
            Instagram
          </a>
        </div>
        <p>
          © {new Date().getFullYear()} Le Gnome et Rhône
          <br />
          Créateur <a href="https://mathiasvacher.fr" target="_blank" rel="noreferrer">Mathias Vacher</a>
        </p>
      </footer>
      {selectedMenuImage !== null && <div className="menu-lightbox" role="dialog" aria-modal="true" aria-label="Carte agrandie" onClick={() => setSelectedMenuImage(null)}>
        <button className="menu-lightbox-close" type="button" onClick={() => setSelectedMenuImage(null)} aria-label="Fermer la carte">×</button>
        <img src={menuImages[selectedMenuImage].src} alt={menuImages[selectedMenuImage].alt} onClick={(event) => event.stopPropagation()} />
      </div>}
    </div>
  );

  return (
    <div ref={hostRef} className="gnome-showcase-host">
      {shadowRoot &&
        createPortal(
          <>
            <style>{showcaseStyles}</style>
            {showcase}
          </>,
          shadowRoot,
        )}
    </div>
  );
}
