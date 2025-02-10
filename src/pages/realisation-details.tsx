import { useParams } from "react-router-dom";
import { projetsDev, projetsCreation } from "../components/data/realisations-data.tsx";

const RealisationsDetails = () => {
  const { projetId } = useParams();
  const projet = [...projetsDev, ...projetsCreation].find((p) => p.idRea === projetId);

  if (!projet) {
    return <h2>Réalisation non trouvée</h2>;
  }

  return (
    <section id="realisation-details">
      <div className="container-fluid realisation-detail">
        <div className="row-top-title">
          <h1>{projet.titre}</h1>
        </div>

        <div className="row row-content">
          <div className="col-18 col-left">
            {projet.contentPage.map((content, index) => (
              <div key={index}>
                {content.leftSection.map((section, idx) => (
                  <div className='container-title-text' key={idx}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="col-5 col-right">
            {projet.contentPage.map((content, index) => (
              <div className='container-right' key={index}>
                {content.rightSection.map((section, idx) => (
                  <div className='container-title-text' key={idx}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ))}

            <div className="bouton-live-right">
              <a href={projet.lienBoutonLive} className="bouton btn-live">{projet.texteBoutonLive}</a>
            </div>
          </div>

          <div className="outils">
            <h3>Outils</h3>
            <p>
              {projet.outils.map((outil, index) => (
                <span key={index} className="outil-span">{outil}{index < projet.outils.length - 1 ? ', ' : ''}</span>
              ))}
            </p>
          </div>

          <div className="gallery">
            {projet.contentPage.map((content, index) => (
              <div key={index}>
                <h3>{content.imagesPage.title}</h3>
                <div className="image-gallery">
                  {content.imagesPage.images.map((image, imgIdx) => (
                    <div className="image-container" key={imgIdx}>
                      <img src={image} alt={`Illustration ${imgIdx + 1}`} className="gallery-image" />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealisationsDetails;
