import { type MouseEvent, useLayoutEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import showcaseStyles from "../../scss/showcase-clients/gnome-et-rhone.scss?inline";

const restaurant = {
  address: "157 Av. Maréchal de Saxe, 69003 Lyon",
  phone: "04 82 33 25 56",
  phoneLink: "tel:+33482332556",
  instagram: "https://www.instagram.com/legnomeetrhone/?hl=fr",
  maps: "https://www.google.com/maps/place/?q=place_id:ChIJIXpIJl3q9EcIOjJ6IhX4a1s",
};

const reviews = [
  { quote: "Cadre super mignon, musique agréable et personnel vraiment accueillant.", author: "jujulo62", date: "Avis Google · il y a 3 mois" },
  { quote: "Super déjeuner sur la terrasse ensoleillée, avec un très bon accueil.", author: "Margaux", date: "Avis Google · il y a 1 mois" },
  { quote: "Musique récente, à un niveau qui permet de discuter, avec une bonne ambiance.", author: "Enzo Roudier", date: "Avis Google · il y a 1 mois" },
];

const galleryPhotos = [
  { src: "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/1678/1500x750/14208.jpg", alt: "La terrasse du Gnome et Rhône" },
  { src: "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/1678/1500x750/14201.jpg", alt: "La salle du Gnome et Rhône lors d’une soirée" },
  { src: "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/1678/1500x750/14203.jpg", alt: "Une animation musicale au Gnome et Rhône" },
  { src: "https://privateaser-media.s3.eu-west-1.amazonaws.com/etab_photos/1678/1500x750/14200.jpg", alt: "L’intérieur du Gnome et Rhône" },
];

// Tarifs publics relevés sur la carte de l'établissement ; à confirmer avant mise en production.
const lunchMenu = [
  { category: "Boissons", items: [
    { name: "Pinte de bière", description: "Happy hour de 17h à 20h", price: "4,50 € · 6 €" },
    { name: "Verre de vin", price: "3,50 €" },
    { name: "Cocktail", price: "8 €" },
    { name: "Shot", price: "3,50 €" },
  ] },
  { category: "À partager", items: [
    { name: "Planche mixte", price: "15 €" },
    { name: "Planche de charcuterie", price: "8 €" },
  ] },
];

const Arrow = () => <span aria-hidden="true">↗</span>;
const MenuIcon = () => <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 6h18M3 12h18M3 18h18" /></svg>;

export default function GnomeEtRhoneShowcase() {
  const [navOpen, setNavOpen] = useState(false);
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

  const showcase = <div className="gnome-showcase">
    <a className="showcase-back" href="/showcase-clients">← Retour</a>
    <header className="site-header">
      <a href="#accueil" className="wordmark" aria-label="Le Gnome et Rhône, accueil" onClick={scrollToSection}><span>LE GNOME</span><i>&</i><span>RHÔNE</span></a>
      <button className="nav-toggle" type="button" aria-label="Ouvrir le menu" aria-expanded={navOpen} onClick={() => setNavOpen(!navOpen)}><MenuIcon /></button>
      <nav className={navOpen ? "open" : ""} aria-label="Navigation principale"><a href="#esprit" onClick={scrollToSection}>L’esprit</a><a href="#midi" onClick={scrollToSection}>Le midi</a><a href="#infos" onClick={scrollToSection}>Nous trouver</a><a className="nav-instagram" href={restaurant.instagram} target="_blank" rel="noreferrer">Instagram <Arrow /></a></nav>
      <a className="header-cta" href="#midi" onClick={scrollToSection}>Voir le menu <Arrow /></a>
    </header>
    <main>
      <section id="accueil" className="hero"><div className="hero-noise" /><div className="hero-grid"><div className="hero-copy"><p className="kicker"><span /> Lyon 3e · Saxe-Gambetta</p><h1>Bien manger.<br /><em>Bien vivre.</em></h1><p className="hero-lead">Cuisine traditionnelle le midi, verres entre amis le soir. Une table de quartier au rythme de Lyon.</p><div className="hero-actions"><a className="button button-light" href="#midi" onClick={scrollToSection}>Découvrir le midi <Arrow /></a><a className="text-link" href={restaurant.maps} target="_blank" rel="noreferrer">Itinéraire <Arrow /></a></div></div><div className="hero-art" aria-label="Illustration d'une motocyclette ancienne"><div className="sun" /><div className="wheel wheel-left" /><div className="wheel wheel-right" /><div className="motorcycle"><div className="tank" /><div className="frame" /><div className="seat" /><div className="handlebar" /></div><p className="art-caption">BAR · CUISINE · MUSIQUE</p></div></div><div className="hero-footer"><span>Au coin de la Saxe</span><span className="scroll-note">Faire défiler <b>↓</b></span><span>Depuis longtemps</span></div></section>
      <section id="esprit" className="intro section-pad"><div className="section-label">01 — L’esprit du lieu</div><div className="intro-content"><h2>Une adresse qui ne fait pas <em>semblant.</em></h2><div><p>Au Gnome et Rhône, on se retrouve autour d’une cuisine traditionnelle à midi, d’une bière ou d’un cocktail quand la journée se prolonge.</p><p>La salle a gardé son caractère, dans un décor de pub et d’anciennes motocyclettes. Concerts, DJ sets et matchs font aussi vivre les soirées.</p><a className="text-link dark-link" href={restaurant.instagram} target="_blank" rel="noreferrer">Suivre l’actualité sur Instagram <Arrow /></a></div></div></section>
      <section className="photo-gallery" aria-labelledby="gallery-title"><div className="gallery-heading section-pad"><div className="section-label">02 — En images</div><h2 id="gallery-title">L’ambiance du <em>Gnome.</em></h2><p>Quelques vues du lieu, de la terrasse aux soirées musicales.</p></div><div className="gallery-grid">{galleryPhotos.map((photo) => <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />)}</div><p className="gallery-credit">Photos : Le Gnome & Rhône Café via Privateaser</p></section>
      <section id="midi" className="lunch-section"><div className="lunch-heading section-pad"><div className="section-label">03 — Boire & grignoter</div><h2>On trinque,<br /><em>on partage.</em></h2><p>Bières fraîches, cocktails et planches à partager.</p></div><div className="menu-panel"><div className="menu-panel-top"><span>CARTE</span><span>Tarifs indicatifs</span></div><div className="menu-items">{lunchMenu.map((category) => <div className="menu-category" key={category.category}><h3>{category.category}</h3>{category.items.map((item) => <div className="menu-item" key={item.name}><div><strong>{item.name}</strong>{item.description && <p>{item.description}</p>}</div><b>{item.price}</b></div>)}</div>)}</div><p className="menu-source">Carte publique · tarifs à confirmer auprès de l’établissement</p><div className="menu-stamp">LE GNOME<br />& RHÔNE</div></div></section>
      <section className="quote-band"><p>« Pub sympa, <em>mais pas seulement</em> »</p><span>— Avis client</span></section>
      <section className="reviews section-pad" aria-labelledby="reviews-title"><div className="section-label">04 — Quelques mots entendus</div><div className="reviews-heading"><h2 id="reviews-title">Les habitués<br />en parlent <em>mieux.</em></h2><p>Une sélection d’avis Google publics.</p></div><div className="review-grid">{reviews.map((review) => <article className="review-card" key={review.author}><span className="review-star">✦</span><blockquote>“{review.quote}”</blockquote><footer><strong>{review.author}</strong><span>{review.date}</span></footer></article>)}</div></section>
      <section id="infos" className="contact-section"><div className="contact-copy"><div className="section-label">05 — Passer nous voir</div><h2>On vous garde<br />une place <em>?</em></h2><p>À deux pas de Saxe-Gambetta, pour déjeuner, boire un verre ou laisser la soirée s’installer.</p><a className="button button-light" href={restaurant.maps} target="_blank" rel="noreferrer">Ouvrir l’itinéraire <Arrow /></a></div><div className="contact-card"><span className="card-kicker">LE GNOME & RHÔNE</span><address>{restaurant.address}</address><a href={restaurant.phoneLink}>{restaurant.phone}</a><div className="opening"><span>Horaires</span><p>Ouvert aujourd’hui<br /><b>jusqu’à 01:00</b></p></div><small>Horaires affichés dans les informations transmises.</small></div></section>
    </main>
    <footer className="site-footer"><a className="wordmark footer-mark" href="#accueil" onClick={scrollToSection}><span>LE GNOME</span><i>&</i><span>RHÔNE</span></a><div><a href="#midi" onClick={scrollToSection}>Le midi</a><a href="#infos" onClick={scrollToSection}>Nous trouver</a><a href={restaurant.instagram} target="_blank" rel="noreferrer">Instagram</a></div><p>© {new Date().getFullYear()} Le Gnome et Rhône<br />Mentions légales à compléter</p></footer>
  </div>;

  return <div ref={hostRef} className="gnome-showcase-host">
    {shadowRoot && createPortal(<><style>{showcaseStyles}</style>{showcase}</>, shadowRoot)}
  </div>;
}
