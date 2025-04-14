import LogoSocials from "../logos-socials";
import CV from '../../assets/pdf/CV_Mathias_Vacher.pdf';
function Hero() {

    return (
        <section id="hero">
            <div className="gradient">
                <div className="content">

                    <p className="job-title">Développeur web</p>

                    <h2>Créer des expériences uniques par le code</h2>
                    
                    <p className="description">
                        Hello, moi c'est Mathias ! Passionné par le code et le design, je transforme des idées en solutions élégantes, <br/>
                        en combinant une approche technique réfléchie à un design intuitif. Mon objectif : créer des expériences web et <br/>
                        mobiles qui allient esthétisme et performance, tout en mettant l'utilisateur au cœur de la démarche.
                    </p>

                    <LogoSocials />


                    <div className="btn-hero">
                        <a href="#realisations" className='bouton'> Voir mes projets</a>
                        <a href={CV} target="_blank" rel="noopener noreferrer" className='bouton secondary'> Mon CV</a>
                    </div>
                </div>
            </div>
        </section>
    )
}
  
export default Hero;
