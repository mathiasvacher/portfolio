import Competences from "../components/homepage/competences.tsx";
import Hero from "../components/homepage/hero.tsx";
import Realisations from "../components/homepage/realisations.tsx";
import Experiences from "../components/homepage/experiences.tsx";
import Formations from "../components/homepage/formations.tsx";

function Homepage() {
  return (

    <>
        <Hero />
        <Realisations />
        <Experiences />
        <Formations />
        <Competences />
    </>


  );
};

export default Homepage;
