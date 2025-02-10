import { useNavigate } from 'react-router-dom';

function Error() {
    const navigate = useNavigate();

    const handleHomeRedirect = () => {
        navigate('/portfolio/');
    };

    return (
        <section id="error">
            <h1>
                Oups, cette page n'existe pas !
            </h1>

            <p>
                Il y a peut-être une erreur dans le lien ? 
                <br />
                ou la page a peut-être été supprimée...
            </p>

            <button onClick={handleHomeRedirect} className='bouton'>
                Retour à l'accueil
            </button>
        </section>
    );
};

export default Error;
