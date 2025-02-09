import TitreSection from './titresection.tsx';
import RealisationsDisplay from './realisations-display.tsx';
import googleLogo from '../assets/img/experiences/google.png';
import { Link } from 'react-router-dom';

const projetsDev = [
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #1',
    description: 'Développement de projet avec des technologies web...',
    outils: ['PHP', 'TypeScript', 'CSS', 'HTML'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #2',
    description: 'Développement d\'une application web dynamique...',
    outils: ['React', 'Node.js', 'MongoDB'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #1',
    description: 'Développement de projet avec des technologies web...',
    outils: ['PHP', 'TypeScript', 'CSS', 'HTML'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #2',
    description: 'Développement d\'une application web dynamique...',
    outils: ['React', 'Node.js', 'MongoDB'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #1',
    description: 'Développement de projet avec des technologies web...',
    outils: ['PHP', 'TypeScript', 'CSS', 'HTML'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Développement #2',
    description: 'Développement d\'une application web dynamique...',
    outils: ['React', 'Node.js', 'MongoDB'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
];

const projetsCreation = [
  {
    img: googleLogo,
    titre: 'Réalisation de Création Numérique #1',
    description: 'Création d\'un design graphique moderne...',
    outils: ['Photoshop', 'Illustrator', 'Figma'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation de Création Numérique #2',
    description: 'Réalisation d\'une identité visuelle complète...',
    outils: ['Illustrator', 'After Effects', 'Cinema 4D'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
];


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
        <Link className="bouton boutons-realisations" to="/portfolio/page-realisations">
          Voir les {projetsDev.length} projets de développement
        </Link>

        {/* Projets de création numérique */}
        <RealisationsDisplay
          titre="Projets de création numérique"
          projets={projetsCreation.slice(0, 2)} // Afficher les 2 premiers projets
        />
        <Link className="bouton boutons-realisations" to="/portfolio/page-realisations">
          Voir les {projetsCreation.length} projets de création numérique
        </Link>
      </div>
    </section>
  );
}

export default Realisations;