import React from 'react';

interface Realisation {
  img: string;
  titre: string;
  description: string;
  outils: string[];
  texteBoutonProjet: string;
  lienBoutonProjet: string;
  texteBoutonLive: string;
  lienBoutonLive: string;
}

interface RealisationsDisplayProps {
  titre: string;
  projets: Realisation[];
}

const RealisationsDisplay: React.FC<RealisationsDisplayProps> = ({ titre, projets }) => {
  return (
    <div className="realisations-container">
      <p>{titre}</p>
      {projets.map((realisation, index) => (
        <div className='realisation-single' key={index}>
          <div className='realisation-img'>
            {realisation.img && <img src={realisation.img} alt={realisation.titre} className='realisation-image' />}
          </div>
          <div className='realisation-text'>
            <h3>{realisation.titre}</h3>
            <p>{realisation.description}</p>
            <div className='realisation-outils'>
              <p>Outils :
                {realisation.outils.map((outil, i) => (
                  <span key={i}>{outil}</span>
                ))}
              </p>
            </div>
            <div className='realisation-buttons'>
              <a href={realisation.lienBoutonProjet} className='bouton btn-projet'>{realisation.texteBoutonProjet}</a>
              <a href={realisation.lienBoutonLive} className='btn btn-live'>{realisation.texteBoutonLive}</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RealisationsDisplay;
