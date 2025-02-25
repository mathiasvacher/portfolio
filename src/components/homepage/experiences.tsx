import { useState } from 'react';
import TitreSection from '../titresection.tsx';
import { experiences } from '../data/experiences-data.tsx'; // Import des données

type Experience = {
  nomEntreprise: string;
  titrePoste: string;
  dates: string;
  description: string;
  titreListe?: string;
  elementsListe?: string[];
  lien: string;
  texteBouton: string;
  logo: string;
  couleur: string;
};


function Experiences() {
  return (
    <section id="experiences">
      <div className='gradient'>
        <div className="container-fluid">
          <TitreSection titre="Expériences" explication="Mes collaborations marquantes" />

          <div className="row experiences-container">
            {experiences.map((exp, index) => (
              <ExperienceItem key={index} exp={exp} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const ExperienceItem = ({ exp }: { exp: Experience }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="col-22 col-lg-11 experience-wrapper" onClick={toggleDetails}>
      <div className="instruction-container">
        <span className="instruction-arrow bottom-arrow">↓</span>
        <p className='instruction'>appuie pour plus d'infos</p>
        <span className="instruction-arrow bottom-arrow">↓</span>
      </div>

      <div className='experience-single'>
        <div className='img-exp-container'>
          <img src={exp.logo} alt={exp.nomEntreprise} />
        </div>

        <div className="infos-experience">
          <h3 style={{ color: exp.couleur }}>{exp.nomEntreprise}</h3>
          <h4>{exp.titrePoste}</h4>
          <p className="date">{exp.dates}</p>
          <p>{exp.description}</p>

          {/* Vérification et affichage conditionnel */}
          {exp.titreListe && exp.elementsListe && (
            <div className={`liste ${isOpen ? 'open' : ''}`}>
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
    </div>
  );
};

export default Experiences;
