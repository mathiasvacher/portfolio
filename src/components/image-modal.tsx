import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  imageUrl: string;
  images: string[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const ImageModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  imageUrl,
  images,
  currentIndex,
  onNavigate,
}) => {
  if (!isOpen) return null;

  return (
    <div className="image-modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-modal bouton" onClick={onClose}>×</button>
        
        <div className="modal-image-container">
          <img src={imageUrl} alt="Large View" className="modal-image" />
        </div>

        {/* Bouton ouvrir dans un nouvel onglet */}
        <div className="open-new-tab-container">
          <a
            href={imageUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="open-new-tab-button bouton"
          >
            Ouvrir dans un nouvel onglet
          </a>
        </div>

        <div className="navigation-buttons-modal">
          <button
            className="prev-button-modal bouton"
            onClick={() => onNavigate(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className="next-button-modal bouton"
            onClick={() => onNavigate(currentIndex + 1)}
            disabled={currentIndex === images.length - 1}
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
