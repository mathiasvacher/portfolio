import TitreSection from './titresection.tsx';
import googleLogo from '../assets/img/experiences/google.png';

const experiences = [
  {
    logo: googleLogo,
    nomEntreprise: 'Entreprise A',
    dates: '2023-2024',
    titrePoste: 'Développeur Frontend',
    description: 'Développement d\'interfaces utilisateur modernes et responsives.',
    titreListe: 'Compétences développées',
    elementsListe: [
      'React.js',
      'CSS moderne',
      'Accessibilité (a11y)',
      'Tests unitaires avec Jest'
    ],
    lien: 'https://entreprise-a.com',
    texteBouton: 'Voir plus'
  },
  {
    logo: googleLogo,
    nomEntreprise: 'Entreprise B',
    dates: '2023-2024',
    titrePoste: 'Ingénieur Backend',
    description: 'Mise en place d\'API robustes et sécurisées.',
    titreListe: 'Technologies utilisées',
    elementsListe: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker'
    ],
    lien: 'https://entreprise-b.com',
    texteBouton: 'En savoir plus'
  }, 
  {
    logo: googleLogo,
    nomEntreprise: 'Entreprise B',
    dates: '2023-2024',
    titrePoste: 'Ingénieur Backend',
    description: 'Mise en place d\'API robustes et sécurisées.',
    titreListe: 'Technologies utilisées',
    elementsListe: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker'
    ],
    lien: 'https://entreprise-b.com',
    texteBouton: 'En savoir plus'
  },
  {
    logo: googleLogo,
    nomEntreprise: 'Entreprise B',
    dates: '2023-2024',
    titrePoste: 'Ingénieur Backend',
    description: 'Mise en place d\'API robustes et sécurisées.',
    titreListe: 'Technologies utilisées',
    elementsListe: [
      'Node.js',
      'Express.js',
      'MongoDB',
      'Docker'
    ],
    lien: 'https://entreprise-b.com',
    texteBouton: 'En savoir plus'
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
                  <h3>{exp.nomEntreprise}</h3>
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
