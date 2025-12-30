import CvFile from '../assets/cv/CV_Mathias_Vacher.pdf';
import CvImg from '../assets/cv/CV_Mathias_Vacher.jpg';

function CV() {
  return (
    <section id="cv-page">
      <div className="gradient">
        <div className="content">

          <img src={CvImg} alt="CV Mathias Vacher" />

          <div className="btn-hero">
            <a
              href={CvFile}
              className="bouton"
              download="CV_Mathias_Vacher.pdf"
            >
              Télécharger
            </a>

            <a
              href={CvFile}
              className="bouton secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ouvrir
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CV;
