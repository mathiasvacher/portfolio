import Competences from "../components/homepage/competences.tsx";
import Hero from "../components/homepage/hero.tsx";
import Realisations from "../components/homepage/realisations.tsx";
import Experiences from "../components/homepage/experiences.tsx";
import Formations from "../components/homepage/formations.tsx";
import Animated from "../components/animated.tsx";
import ServicesPromo from "../components/homepage/services-promo.tsx";

function Homepage() {
  return (

    <>
        <Hero />
        <Animated>
          <ServicesPromo />
        </Animated>
        <Animated>
          <Realisations />
        </Animated>

        <Animated>
          <Experiences />
        </Animated>

        <Animated>
          <Formations />
        </Animated>

        <Animated>
          <Competences />
        </Animated>

    </>


  );
};

export default Homepage;
