import './scss/style.scss';
import CursorEffect from './components/cursoreffect.tsx';
import HeroEffect from './components/heroeffect.tsx';
import Header from './components/header.tsx'; 
import Hero from './components/hero.tsx'; 
import Realisations from './components/realisations.tsx'; 
import Experiences from './components/experiences.tsx'; 
import Formations from './components/formations.tsx'; 
import Footer from './components/footer.tsx'; 
import Competences from './components/competences.tsx';

function App() {

  return (
    <main>
      {/* <CursorEffect /> */}
      {/* <HeroEffect /> */}
      <Header />
      <Hero />
      <Realisations />
      <Experiences />
      <Formations />
      <Competences />
      <Footer />
    </main>

  )
}

export default App
