import { Link } from "react-router-dom";

const includedItems = [
  "Un design sur mesure qui reflète votre établissement",
  "Une présentation claire de votre carte, de vos horaires et de votre univers",
  "Un site rapide, sécurisé et simple à parcourir",
  "Une base SEO locale pour être trouvé sur Google",
  "Une aide pour relier votre site à votre fiche Google",
  "Une mise en ligne prête à accueillir vos futurs clients",
];

const benefits = [
  {
    title: "Visible sur Google",
    text: "Le SEO local donne à votre établissement plus de chances d’apparaître lorsque des clients recherchent un restaurant, un bar ou un commerce comme le vôtre près de chez eux.",
  },
  {
    title: "Parfait sur mobile",
    text: "La majorité de vos visiteurs vous cherchera depuis son téléphone. Chaque page s’adapte naturellement à tous les écrans.",
  },
  {
    title: "À votre image",
    text: "Photos, ambiance, spécialités, carte et informations pratiques : une vitrine professionnelle qui renforce la confiance et donne envie d’entrer.",
  },
];

const subscriptionItems = [
  "Hébergement, certificat SSL et surveillance du site",
  "Nom de domaine inclus, dans la limite d’un domaine standard",
  "Sauvegardes régulières et maintenance technique",
  "Suivi de l’indexation et des performances via Google Search Console",
  "Optimisations SEO local de maintenance : titres, descriptions et informations clés",
  "Jusqu’à 30 minutes de petites modifications de contenu par mois, non cumulables",
  "Assistance par e-mail",
];

const frequentlyAskedQuestions = [
  {
    question: "Combien de temps faut-il pour créer mon site ?",
    answer: "En général, comptez 2 à 4 semaines après réception de vos textes, photos et informations pratiques. Le délai exact est confirmé ensemble avant le démarrage.",
  },
  {
    question: "Que comprend le site à 789 € ?",
    answer: "Une vitrine sur mesure pensée pour présenter votre établissement : accueil, carte ou prestations, horaires, coordonnées et accès. Le périmètre exact, notamment le nombre de pages, est défini avant la création.",
  },
  {
    question: "De quoi avez-vous besoin de ma part ?",
    answer: "De votre logo si vous en avez un, vos photos, votre carte ou vos prestations, vos horaires, vos coordonnées et les informations que vous souhaitez mettre en avant. Je vous guide pour rassembler le nécessaire.",
  },
  {
    question: "Le nom de domaine m’appartient-il ?",
    answer: "Oui. Le nom de domaine est enregistré à votre nom et vous reste associé. L’abonnement couvre sa gestion courante dans la limite d’un domaine standard.",
  },
  {
    question: "Puis-je arrêter le suivi mensuel ?",
    answer: "Oui, selon les conditions définies dans le devis. Avant toute mise en ligne, les modalités de paiement, de suivi et de résiliation sont écrites clairement.",
  },
];

function Services() {
  return (
    <div className="services-page">
      <section className="services-hero">
        <div className="services-hero__content">
          <p className="services-eyebrow">Votre vitrine, ouverte 24h/24</p>
          <h1>Un beau site, c’est bien. Un site qui vous apporte des clients, c’est mieux.</h1>
          <p className="services-hero__lead">
            Je crée des sites vitrines clés en main pour les établissements qui souhaitent se démarquer. Votre futur client doit comprendre en quelques secondes qui vous êtes, ce que vous proposez et pourquoi il doit vous choisir plutôt qu’un autre.
          </p>
          <div className="services-hero__actions">
            <Link className="bouton" to="/services#contact">Parlons de votre projet</Link>
          </div>
        </div>
      </section>

      <section className="services-offer" id="formule">
        <div className="services-offer__copy">
          <p className="services-eyebrow">Une formule simple et transparente</p>
          <h2>Une formule complète, sans mauvaise surprise.</h2>
          <p>
            Une offre pensée pour inspirer confiance, mettre votre savoir-faire en valeur et améliorer votre visibilité sur Google. Le but : attirer davantage de clients qualifiés et leur donner envie de passer votre porte.
          </p>
        </div>

        <div className="services-pricing" aria-label="Tarifs de création de site">
          <div className="services-price-card services-price-card--primary">
            <p className="services-price-card__label">La formule site vitrine clé en main</p>
            <p className="services-price"><span>789</span> €</p>
            <p className="services-price-card__description">Une seule formule pour obtenir un site professionnel, conçu pour votre activité, votre visibilité locale et pour transformer une recherche en visite.</p>
            <ul>
              {includedItems.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </div>
          <p className="services-monthly">
            <strong>Suivi du site : 59 € / mois</strong> — hébergement, maintenance et visibilité locale.
          </p>
          <details className="services-subscription">
            <summary>Ce que comprend l’abonnement de 59 € / mois <span aria-hidden="true">+</span></summary>
            <div className="services-subscription__content">
              <ul>
                {subscriptionItems.map((item) => <li key={item}>{item}</li>)}
              </ul>
              <p>
                Les nouvelles pages, les évolutions de design, les nouvelles fonctionnalités, la rédaction de contenus et les campagnes publicitaires font l’objet d’un devis. Le suivi SEO améliore les fondations et la visibilité locale; il ne garantit pas une position sur Google.
              </p>
            </div>
          </details>
        </div>
      </section>

      <section className="services-benefits">
        <div className="services-benefits__heading">
          <p className="services-eyebrow">Conçu pour convaincre</p>
          <h2>Chaque détail travaille pour votre établissement.</h2>
        </div>
        <div className="services-benefits__grid">
          {benefits.map((benefit, index) => (
            <article className="services-benefit" key={benefit.title}>
              <span className="services-benefit__number">0{index + 1}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="services-faq" aria-labelledby="services-faq-title">
        <div className="services-faq__heading">
          <p className="services-eyebrow">Les réponses utiles</p>
          <h2 id="services-faq-title">Tout est clair avant de démarrer.</h2>
          <p>Le devis précise toujours le périmètre, les délais et les conditions de l’accompagnement.</p>
        </div>
        <div className="services-faq__list">
          {frequentlyAskedQuestions.map((item) => (
            <details key={item.question}>
              <summary>{item.question}<span aria-hidden="true">+</span></summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="services-projects">
        <div>
          <p className="services-eyebrow">Des projets concrets</p>
          <h2>Découvrez des exemples de sites et d’expériences que j’ai réalisés.</h2>
          <p>
            Chaque projet est pensé pour répondre à un besoin précis, avec une attention particulière portée à l’identité, à la clarté et à l’expérience utilisateur.
          </p>
        </div>
        <Link className="bouton secondary" to="/realisations">Voir mes réalisations</Link>
      </section>

      <section className="services-cta">
        <p className="services-eyebrow">Prêt à passer à l’étape suivante ?</p>
        <h2>Votre établissement mérite une vitrine à sa hauteur.</h2>
        <p>Parlons de votre activité et imaginons un site qui améliore votre image, vous aide à être trouvé et donne envie à vos futurs clients de pousser votre porte.</p>
        <Link className="bouton" to="/services#contact">En discuter</Link>
      </section>
    </div>
  );
}

export default Services;
