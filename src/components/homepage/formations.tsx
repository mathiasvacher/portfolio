import TitreSection from '../titresection.tsx';
import Timeline from './timeline.tsx';

import { formations } from '../data/formations-data.tsx'; // Import des données


function Formation() {
  return (
    <section id="formations">
      <div className="container-fluid">
        <TitreSection titre="Formations" explication="Mes formations académiques" />
        
        <Timeline formations={formations} />
      </div>
    </section>
  );
}

export default Formation;
