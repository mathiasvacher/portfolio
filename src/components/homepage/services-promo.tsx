import { Link } from "react-router-dom";

function ServicesPromo() {
  return (
    <section id="services-home">
      <div className="services-home__content">
        <div>
          <p className="services-home__eyebrow">Sites internet d’entreprise</p>
          <h2>Un site qui donne envie de vous choisir.</h2>
          <p>
            Je crée des sites vitrines clés en main, pensés pour améliorer votre image, être trouvé sur Google et attirer de nouveaux clients.
          </p>
        </div>
        <Link className="bouton" to="/services">Découvrir mes services</Link>
      </div>
    </section>
  );
}

export default ServicesPromo;
