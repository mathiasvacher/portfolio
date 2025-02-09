import LogoSocials from "./logos-socials";
function Hero() {

    return (
        <section id="hero">
            <div className="gradient">
                <div className="content">

                    <p className="job-title">Développeur web & UX Designer</p>

                    <h2>Créer des expériences uniques par le code et le design</h2>
                    
                    <p className="description">
                        Salut, je suis Mathias ! Je crée et développe des idées pour les transformer en solutions élégantes, <br/>
                        alliant un code soigné à un design intuitif afin de proposer des expériences web et <br/>
                        mobiles de haute qualité.
                    </p>

                    <LogoSocials />


                    <a href="#projets" className='bouton'> Voir mes projets</a>
                </div>
            </div>
        </section>
    )
}
  
export default Hero;
