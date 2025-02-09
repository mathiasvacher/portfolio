import { projetsDev, projetsCreation } from '../data/realisations-data.tsx'; // Import des données
import TitreSection from '../titresection.tsx';
import RealisationsDisplay from '../homepage/realisations-display.tsx';


function ListeRealisations() {

    return (
        <section id="liste-realisations">
            <div className='container-fluid'>
            <TitreSection titre="Projets de développement" explication="Sites web WordPress, React, landing pages..." />
            

                <RealisationsDisplay  projets={projetsDev}  />



            <TitreSection titre="Projets de création numérique" explication="Maquettage d'application/de site web, création de logo, motion design, modélisation 3D..." />


                <RealisationsDisplay projets={projetsCreation}  />
            </div>
        </section>
    )
}
  
export default ListeRealisations;
