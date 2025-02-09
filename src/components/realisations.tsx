import TitreSection from './titresection.tsx';
import RealisationsDisplay from './realisations-display.tsx';
import googleLogo from '../assets/img/experiences/google.png';
import { useState } from 'react';

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
  const [showAllDev, setShowAllDev] = useState(false);
  const [showAllCreation, setShowAllCreation] = useState(false);

  const handleToggleDev = () => setShowAllDev(!showAllDev);
  const handleToggleCreation = () => setShowAllCreation(!showAllCreation);

  return (
    <section id="realisations">
      <div className="container-fluid">
        <TitreSection titre="Réalisations" explication="Mes réalisations importantes et formatrices" />
        
        {/* Affichage des projets de développement */}
        <RealisationsDisplay 
          titre="Projets de développement" 
          projets={showAllDev ? projetsDev : projetsDev.slice(0, 2)} 
        />
        <a 
          className='bouton open-realisations' 
          onClick={handleToggleDev} 
          // href={showAllCreation ? undefined : "#realisations"} 
        >
          {showAllDev ? 'Voir moins' : 'Voir tous les projets de développement'}
        </a>

        {/* Affichage des projets de création numérique */}
        <RealisationsDisplay 
          titre="Projets de création numérique" 
          projets={showAllCreation ? projetsCreation : projetsCreation.slice(0, 2)} 
        />
        <a 
          className='bouton open-realisations' 
          onClick={handleToggleCreation} 
          // href={showAllCreation ? undefined : "#realisations"} 
        >
          {showAllCreation ? 'Voir moins' : 'Voir tous les projets de création numérique'}
        </a>
      </div>
    </section>
  );
}


export default Realisations;
