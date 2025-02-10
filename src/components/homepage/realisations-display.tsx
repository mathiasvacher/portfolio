import React from 'react';
import { Link } from "react-router-dom";

interface Section {
  title: string;
  content: string;
}

interface ImagePage {
  titleImage: string;
  image1: string;
  image2: string;
}

interface ContentPage {
  leftSection: Section[];
  rightSection: Section[];
  imagesPage: { title: string; images: string[] };
}

interface Realisation {
  imgMiniature: string;
  idRea: string;
  titre: string;
  shortDescription: string;
  outils: string[];
  texteBoutonProjet: string;
  lienBoutonProjet: string;
  texteBoutonLive: string;
  lienBoutonLive: string;
  contentPage: ContentPage[];
}

interface RealisationsDisplayProps {
  titre?: string;
  projets: Realisation[];
}

const RealisationsDisplay: React.FC<RealisationsDisplayProps> = ({ titre, projets }) => {
  return (
    <div className="realisations-container">
      {titre && <p className='title-realisation'>{titre}</p>} 
      {projets.map((realisation) => (
        <div className='realisation-single' key={realisation.idRea}>
          <div className='realisation-img'>
            {realisation.imgMiniature && <img src={realisation.imgMiniature} alt={realisation.titre} className='realisation-image' />}
          </div>
          <div className='realisation-text'>
            <h3>{realisation.titre}</h3>
            <p>{realisation.shortDescription}</p>
            <div className='realisation-outils'>
              <p>Outils :
                {realisation.outils.map((outil, i) => (
                  <span key={i}> {outil}</span>
                ))}
              </p>
            </div>
            <div className='realisation-buttons'>
              <Link to={realisation.lienBoutonProjet} className="bouton btn-projet">
                {realisation.texteBoutonProjet}
              </Link>
              <a href={realisation.lienBoutonLive} className='btn btn-live'>{realisation.texteBoutonLive}</a>
            </div>
            {/* Affichage du contentPage si disponible */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default RealisationsDisplay;
