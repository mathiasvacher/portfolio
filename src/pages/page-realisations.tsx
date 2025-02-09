import { Link } from 'react-router-dom';

function PageRealisations() {
  return (
    <div className="container">
      <h1>Mes réalisations</h1>



      {/* Bouton retour */}
      <Link className="bouton boutons-realisations" to="/">
        Retour à l'accueil
      </Link>
    </div>
  );
};

export default PageRealisations;
