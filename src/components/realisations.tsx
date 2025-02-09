import TitreSection from './titresection.tsx';

import googleLogo from '../assets/img/experiences/google.png';


const realisations = [
  {
    img: googleLogo,
    titre: 'Réalisation #1',
    description: 'Realisation lorem ipsum azdjb aizbd aubd zaida izd',
    outils: ['PHP', 'TypeScript', 'CSS', 'HTML'],
    texteBoutonProjet: 'Voir le projet',
    lienBoutonProjet: '/',
    texteBoutonLive: 'Voir en direct',
    lienBoutonLive: '/',
  },
  {
    img: googleLogo,
    titre: 'Réalisation #2',
    description: 'Realisation lorem ipsum azdjb aizbd aubd zaida izd',
    outils: ['PHP', 'TypeScript', 'CSS', 'HTML'],
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

        <div className="realisations-container">

          {realisations.map((realisation, index) => (

            <div className='realisation-single' key={index}>

              <div className='realisation-img'>
                {realisation.img && <img src={realisation.img} alt={realisation.titre} className='realisation-image' />}
              </div>

              <div className='realisation-text'>

                <h3>{realisation.titre}</h3>
                <p>{realisation.description}</p>

                <div className='realisation-outils'>
                  <p> Outils :
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
      </div>
    </section>
  );
}

export default Realisations;