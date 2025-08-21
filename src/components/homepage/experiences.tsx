import { useState } from 'react';
import TitreSection from '../titresection.tsx';
import { experiences } from '../data/experiences-data.tsx'; // Import des données

type Experience = {
  nomEntreprise: string;
  titrePoste: string;
  dates: string;
  descriptionPremierePartie: string;
  descriptionSecondePartie: string;
  titreListe?: string;
  elementsListe?: string[];
  lien: string;
  texteBouton: string;
  logo?: string; // <-- rendu optionnel
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
        {/* Affiche le logo seulement si présent */}
        {exp.logo && (
          <div className='img-exp-container'>
            <img src={exp.logo} alt={exp.nomEntreprise} />
          </div>
        )}

        <div className="infos-experience">
          <h3 style={{ color: exp.couleur }}>{exp.nomEntreprise}</h3>
          <h4>{exp.titrePoste}</h4>
          <p className="date">{exp.dates}</p>
          <p>{exp.descriptionPremierePartie}</p>

          {/* Ajout de la classe open pour afficher ou cacher more-infos */}
          <div className={`more-infos ${isOpen ? 'open' : ''}`}>
            <div className='desc-wrapper'>
              <p>{exp.descriptionSecondePartie}</p>
            </div>

            {/* Vérification et affichage conditionnel */}
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

            {exp.lien === "#contact" ? (
              <a className="bouton" href={exp.lien}>
                {exp.texteBouton}
              </a>
            ) : (
              <a
                className="bouton"
                href={exp.lien}
                target="_blank"
                rel="noopener noreferrer"
              >
                {exp.texteBouton}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};



export default Experiences;
