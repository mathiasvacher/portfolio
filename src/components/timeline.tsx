import { useState } from 'react';

type Formation = {
    nomEcole: string;
    niveauDiplome: string;
    nomDiplome: string;
    dates: string;
    description: string;
    titreListe: string;
    elementsListe: string[];
    lien: string;
    texteBouton: string;
};

type TimelineProps = {
  formations: Formation[];
};

const Timeline = ({ formations }: TimelineProps) => {
  return (
    <div className="timeline">
      {formations.map((formation, index) => (
        <TimelineItem key={index} formation={formation} />
      ))}
    </div>
  );
};

const TimelineItem = ({ formation }: { formation: Formation }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDetails = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="timeline-item">
      <div className="instruction-container">
        <span className="instruction-arrow bottom-arrow">↓</span>
        <p className='instruction'>appuie pour plus d'infos</p>
        <span className="instruction-arrow bottom-arrow">↓</span>
      </div>

      <div className="timeline-point"></div>
      <div className="timeline-content" onClick={toggleDetails}>
        <h4>{formation.nomEcole}</h4>
        <h3 className='diplome'>
          <span>{formation.niveauDiplome} </span> - {formation.nomDiplome}
        </h3>
        <p className='date'>{formation.dates}</p>

        <div className={`timeline-details ${isOpen ? 'open' : ''}`}>
          <p>{formation.description}</p>

          <p className='titre-liste'>{formation.titreListe}</p>

          <ul>
            {formation.elementsListe.map((element, idx) => (
              <li key={idx}>{element}</li>
            ))}
          </ul>

          <a className="bouton btn-formation" href={formation.lien} target="_blank" rel="noopener noreferrer">
            {formation.texteBouton}
          </a>
        </div>
      </div>
    </div>
  );
};

  

export default Timeline;
