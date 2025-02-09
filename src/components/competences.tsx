import TitreSection from './titresection.tsx';

const realisations = [
    {
        nom: 'HTML',
        couleur: '#E44D26', // Orange HTML5
    },
    {
        nom: 'CSS / SCSS',
        couleur: '#0369A1', // Bleu CSS3
    },
    {
        nom: 'JavaScript',
        couleur: '#F7DF1E', // Jaune JavaScript
    },
    {
        nom: 'React',
        couleur: '#61DAFB', // Bleu React
    },
    {
        nom: 'WordPress',
        couleur: '#21759B', // Bleu WordPress
    },
    {
        nom: 'Git',
        couleur: '#FFF', // Rouge Git
    },
    {
        nom: 'PHP',
        couleur: '#777BB4', // Violet PHP
    },
    {
        nom: 'SQL',
        couleur: '#00758F', // Bleu MySQL
    },
    {
        nom: 'Photoshop',
        couleur: '#31A8FF', // Bleu Photoshop
    },
    {
        nom: 'Illustrator',
        couleur: '#FF9A00', // Orange Illustrator
    },
    {
        nom: 'Premiere Pro',
        couleur: '#9999FF', // Violet Premiere Pro
    },
    {
        nom: 'Figma',
        couleur: '#9d00ff', // Violet personnalisé pour Figma
    }    
];


const Competences = () => {
    return (
        <section id="competences">
            <div className="container-fluid">
                <TitreSection titre="Compétences" explication="Mon stack technique" />
                <div className="competences-grid">
                    {realisations.map((item, index) => (
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
