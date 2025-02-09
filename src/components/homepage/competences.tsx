import TitreSection from '../titresection.tsx';
import { competences } from '../data/competences-data.tsx'; // Import des données



const Competences = () => {
    return (
        <section id="competences">
            <div className="container-fluid">
                <TitreSection titre="Compétences" explication="Mon stack technique" />
                <div className="competences-grid">
                    {competences.map((item, index) => (
                        <div 
                            key={index} 
                            className="competence-item" 
                            style={{ borderBottom: `2px solid ${item.couleur}` }} 
                        >
                            <p style={{ color: item.couleur }}>{item.nom}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Competences;
