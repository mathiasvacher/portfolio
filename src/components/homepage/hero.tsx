import LogoSocials from "../logos-socials";
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


                    <a href="#realisations" className='bouton'> Voir mes projets</a>
                </div>
            </div>
        </section>
    )
}
  
export default Hero;
