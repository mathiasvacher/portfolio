import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  projetsDev,
  projetsCreation,
} from "../components/data/realisations-data.tsx";
import Error from '../components/404.tsx';
import ImageModal from '../components/image-modal.tsx';  // Importer le composant ImageModal

const RealisationsDetails = () => {
  const { projetId } = useParams();
  const navigate = useNavigate();

  const allProjets = [...projetsDev, ...projetsCreation];
  const projet = allProjets.find((p) => p.idRea === projetId);

  if (!projet) {
    return <Error />;
  }

  const currentIndex = allProjets.findIndex((p) => p.idRea === projetId);
  const previousProjet = allProjets[currentIndex - 1];
  const nextProjet = allProjets[currentIndex + 1];

  // Gestion de la galerie
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  // Ouvrir la modale et afficher l'image sélectionnée
  const openModal = (image: string, index: number) => {
    setCurrentImage(image);
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  // Fermer la modale
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Naviguer entre les images de la galerie
  const navigateImage = (index: number) => {
    if (index >= 0 && index < projet.contentPage[0].imagesPage.images.length) {
      setCurrentImage(projet.contentPage[0].imagesPage.images[index]);
      setCurrentImageIndex(index);
    }
  };

  return (
    <section id="realisation-details">
      <div className="container-fluid realisation-detail">
        <div className="row-top-title">
          <h1>{projet.titre}</h1>
        </div>

        <div className="navigation-buttons">
          {previousProjet && (
            <button
              className="bouton btn-navigation prec"
              onClick={() => navigate(`/realisations/${previousProjet.idRea}`)}
            >
              <span>←</span> Réalisation précédente 
            </button>
          )}

          <Link to="/realisations" className="btn-back-to-rea">
            Retour aux réalisations
          </Link>

          {nextProjet && (
            <button
              className="bouton btn-navigation suiv"
              onClick={() => navigate(`/realisations/${nextProjet.idRea}`)}
            >
              Réalisation suivante <span>→</span>
            </button>
          )}
        </div>

        <div className="row row-content">
          <div className="col-lg-18 col-24 col-left">
            {projet.contentPage.map((content, index) => (
              <div key={index}>
                {content.leftSection.map((section, idx) => (
                  <div className="container-title-text" key={idx}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>

          <div className="col-lg-5 col-24 col-right">
            {projet.contentPage.map((content, index) => (
              <div className="container-right" key={index}>
                {content.rightSection.map((section, idx) => (
                  <div className="container-title-text" key={idx}>
                    <h3>{section.title}</h3>
                    <p>{section.content}</p>
                  </div>
                ))}
              </div>
            ))}

            <div className="bouton-live-right mobile">
              <a href={projet.lienBoutonLive} className="bouton" target="_blank" rel="noopener noreferrer">
                {projet.texteBoutonLive}
              </a>
            </div>
          </div>

          <div className="outils">
            <h3>Outils</h3>
            <p>
              {projet.outils.map((outil, index) => (
                <span key={index} className="outil-span">
                  {outil}
                  {index < projet.outils.length - 1 ? ", " : ""}
                </span>
              ))}
            </p>
          </div>

          <div className="bouton-live-right desktop">
            <a href={projet.lienBoutonLive} className="bouton">
              {projet.texteBoutonLive}
            </a>
          </div>

          <div className="gallery">
            {projet.contentPage.map((content, index) => (
              <div key={index}>
                <h3>{content.imagesPage.title}</h3>
                <div className="image-gallery">
                  {content.imagesPage.images.map((image, imgIdx) => (
                    <div className="image-container" key={imgIdx}>
                      <img
                        src={image}
                        alt={`Illustration de réalisation ${imgIdx + 1}`}
                        className="gallery-image"
                        onClick={() => openModal(image, imgIdx)} // Ouvre la modale avec l'image cliquée
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Afficher la modale avec l'image en grand */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageUrl={currentImage || ""}
        images={projet.contentPage[0].imagesPage.images}
        currentIndex={currentImageIndex}
        onNavigate={navigateImage}
      />
    </section>
  );
};

export default RealisationsDetails;
