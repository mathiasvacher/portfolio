import TitreSection from '../titresection.tsx';
import RealisationsDisplay from './realisations-display.tsx';
import { Link } from 'react-router-dom';
import { projetsDev, projetsCreation } from '../data/realisations-data.tsx'; // Import des données

function Realisations() {
  return (
    <section id="realisations">
      <div className="container-fluid">
        <TitreSection titre="Réalisations" explication="Mes réalisations importantes et formatrices" />

        {/* Projets de développement */}
        <RealisationsDisplay
          titre="Projets de développement"
          projets={projetsDev.slice(0, 2)} // Afficher les 2 premiers projets
        />
        <Link className="bouton boutons-realisations" to="/realisations#introduction">
          Voir les {projetsDev.length} projets de développement
        </Link>

        {/* Projets de création numérique */}
        <RealisationsDisplay
          titre="Projets de création numérique"
          projets={projetsCreation.slice(0, 2)} // Afficher les 2 premiers projets
        />
        <Link className="bouton boutons-realisations" to="/realisations#introduction">
          Voir les {projetsCreation.length} projets de création numérique
        </Link>
      </div>
    </section>
  );
}

export default Realisations;
