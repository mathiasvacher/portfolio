import TitreSection from './titresection.tsx';

import adjectifLogo from '../assets/img/experiences/adjectif.png';
import filtrebgeLogo from '../assets/img/experiences/filtre-bge.png';
import cmqiedLogo from '../assets/img/experiences/cmqied.png';


const experiences = [
  {
    logo: adjectifLogo,
    couleur: '#DF272C',
    nomEntreprise: 'Agence Adjectif',
    dates: '04/2024 - Présent',
    titrePoste: 'Développeur web Fullstack - Alternance',
    description: 'En stage puis en alternance, j\'ai l\'occasion de développer de simples landing pages ou de sites WordPress très complexes personnalisables avec des champs ACF, de la gestion d\'API...',
    titreListe: 'Tâches et missions importantes :',
    elementsListe: [
      'Conception & création de landing pages pour nos clients : HTML, CSS, jQuery, Bootstrap, NodeJS...',
      'Création de fonctionnalités personnalisées (jQuery, gestion de librairies, d\'API...)',
      'Développement WordPress de sites complexes admnistrables via champs ACF / CPT',
      'Autonomie importante, respect des maquettes',
      'Intégration d\'IA au workflow',
    ],
    lien: 'https://www.adjectif.com/',
    texteBouton: 'Aller sur le site',
  }, 
  {
    logo: filtrebgeLogo,
    couleur:'#14345C',
    nomEntreprise: 'Filtre BGE',
    dates: '04/2023 - 07/2023',
    titrePoste: 'Développeur web - Stage',
    description: 'Création d\'un site WordPress boutique largement modifié pour ne proposer que de la demande de devis.',
    titreListe: 'Tâches et infos. importantes :',
    elementsListe: [
      'Conception d\'un site WordPress de zéro',
      'Respect des attentes & contrainte du domaine d\'activité',
      'Création de fonctionnalités sur-mesure et propres sur WordPress',
      'Gestion & personnalisation WooCommerce',
      'Création de documents techniques & de visuels',
      'Organisation de réunions et de formations utlisateurs',
      'Autonomie complète',
    ],
    lien: 'https://www.filtre-bge.fr/',
    texteBouton: 'Découvrir le site',
  },
  {
    logo: cmqiedLogo,
    couleur:'#4F6B87',
    nomEntreprise: 'Le Lab du Campus',
    dates: '03/2023 - 06/2023',
    titrePoste: 'Développeur web WordPress - Stage',
    description: 'Création d\'un site web WordPress complet, et d\'un plugin sur-mesure.',
    titreListe: 'Tâches & infos. importantes:',
    elementsListe: [
      'Création d\'une application web WordPress',
      'Tenue d\'un cahier de bord, création de formations utilisateurs',
      'Autonomie complète',
      'Gestion de l\'administration, création d\'images d\'illustrations',
      'Étude des attentes des utilisateurs',
      'Développement d\'un plugin complexe sur-mesure de création de formulaire pour de la recherche dans une BDD externe',
    ],
    lien: 'https://cmqied.fr/',
    texteBouton: 'Aller sur le site',
  }
];

function Experiences() {
  return (
    <section id="experiences">
      <div className='gradient'>
        <div className="container-fluid">
          <TitreSection titre="Expériences" explication="Mes collaborations marquantes" />
          
          <div className="row experiences-container">
            {experiences.map((exp, index) => (
              <div className="col-22 col-md-11 experience-single" key={index}>

                <img src={exp.logo} alt={exp.nomEntreprise} />

                <div className="infos-experience">
                  <h3 style={{ color: exp.couleur }}>{exp.nomEntreprise}</h3>
                  <h4>{exp.titrePoste}</h4>
                  <p className="date">{exp.dates}</p>
                  <p>{exp.description}</p>

                  {/* Vérification s'il y a des éléments de liste à afficher */}
                  {exp.titreListe && exp.elementsListe && (
                    <div className="liste">
                      <p className="titre-liste">{exp.titreListe}</p>
                      <ul>
                        {exp.elementsListe.map((element, idx) => (
                          <li key={idx}>{element}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <a className="bouton" href={exp.lien} target="_blank" rel="noopener noreferrer">
                    {exp.texteBouton}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experiences;
