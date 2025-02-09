interface TitreSectionProps {
    titre: string;
    explication: string;
}
  
function TitreSection ({ titre, explication }: TitreSectionProps) {
    return (
        
      <div id="titre-section">
        <h2> * <span>{titre}</span> </h2>

        <h3>{explication}</h3>
      </div>
      
    );
}
    
export default TitreSection;