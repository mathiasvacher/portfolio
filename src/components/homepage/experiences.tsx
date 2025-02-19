import TitreSection from '../titresection.tsx';
import { experiences } from '../data/experiences-data.tsx'; // Import des données


function Experiences() {
  return (
    <section id="experiences">
      <div className='gradient'>
        <div className="container-fluid">
          <TitreSection titre="Expériences" explication="Mes collaborations marquantes" />
          
          <div className="row experiences-container">
            {experiences.map((exp, index) => (
              <div className="col-22 col-md-11 experience-single" key={index}>

              <div className='img-exp-container'>
                <img src={exp.logo} alt={exp.nomEntreprise} />
              </div>

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
