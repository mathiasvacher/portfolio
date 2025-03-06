import exemple from "../../assets/img/realisations/exemple.webp";
import exemple2 from "../../assets/img/realisations/exemple2.webp";
import exemple3 from "../../assets/img/realisations/exemple3.webp";
import exemple4 from "../../assets/img/realisations/exemple4.webp";

import financileiphone1 from "../../assets/img/realisations/financile-iphone-1.jpg";
import financileiphone2 from "../../assets/img/realisations/financile-iphone-2.jpg";
import financilemacbook1 from "../../assets/img/realisations/financile-mac-1.jpg";
import financilemacbook2 from "../../assets/img/realisations/financile-mac-2.jpg";

import filtreBgeIphone1 from "../../assets/img/realisations/filtre-bge-iphone-1.jpg";
import filtreBgeIphone2 from "../../assets/img/realisations/filtre-bge-iphone-2.jpg";
import filtreBgeMacbook1 from "../../assets/img/realisations/filtre-bge-mac-1.jpg";
import filtreBgeMacbook2 from "../../assets/img/realisations/filtre-bge-mac-2.jpg";

import odysseeBourgIphone1 from "../../assets/img/realisations/odyssee-bourg-iphone-1.jpg";
import odysseeBourgIphone2 from "../../assets/img/realisations/odyssee-bourg-iphone-2.jpg";
import odysseeBourgMacbook1 from "../../assets/img/realisations/odyssee-bourg-mac-1.jpg";
import odysseeBourgMacbook2 from "../../assets/img/realisations/odyssee-bourg-mac-2.jpg";

import agenceDuLeasingIphone1 from "../../assets/img/realisations/agence-du-leasing-iphone-1.jpg";
import agenceDuLeasingIphone2 from "../../assets/img/realisations/agence-du-leasing-iphone-2.jpg";
import agenceDuLeasingMacbook1 from "../../assets/img/realisations/agence-du-leasing-mac-1.jpg";
import agenceDuLeasingMacbook2 from "../../assets/img/realisations/agence-du-leasing-mac-2.jpg";

import franckArchimbaudIphone1 from "../../assets/img/realisations/franck-archimbaud-iphone-1.jpg";
import franckArchimbaudIphone2 from "../../assets/img/realisations/franck-archimbaud-iphone-2.jpg";
import franckArchimbaudMacbook1 from "../../assets/img/realisations/franck-archimbaud-mac-1.jpg";
import franckArchimbaudMacbook2 from "../../assets/img/realisations/franck-archimbaud-mac-2.jpg";

import plurimmoIphone1 from "../../assets/img/realisations/plurimmo-iphone-1.jpg";
import plurimmoIphone2 from "../../assets/img/realisations/plurimmo-iphone-2.jpg";
import plurimmoMacbook1 from "../../assets/img/realisations/plurimmo-mac-1.jpg";
import plurimmoMacbook2 from "../../assets/img/realisations/plurimmo-mac-2.jpg";

import vivreAnnecyIphone1 from "../../assets/img/realisations/vivre-annecy-iphone-1.jpg";
import vivreAnnecyIphone2 from "../../assets/img/realisations/vivre-annecy-iphone-2.jpg";
import vivreAnnecyMacbook1 from "../../assets/img/realisations/vivre-annecy-mac-1.jpg";
import vivreAnnecyMacbook2 from "../../assets/img/realisations/vivre-annecy-mac-2.jpg";

import vivreVillarsIphone1 from "../../assets/img/realisations/vivre-villars-iphone-1.jpg";
import vivreVillarsIphone2 from "../../assets/img/realisations/vivre-villars-iphone-2.jpg";
import vivreVillarsMacbook1 from "../../assets/img/realisations/vivre-villars-mac-1.jpg";
import vivreVillarsMacbook2 from "../../assets/img/realisations/vivre-villars-mac-2.jpg";

export const projetsDev = [
  // Filtre BGE
  {
    imgMiniature: filtreBgeMacbook1,
    idRea: "filtre-bge", // ID unique pour chaque projet
    titre: "Création de site WordPress - Filtre BGE",
    shortDescription:
      "Conception & éveloppement d'un site WordPress - WooCommerce complexe sur-mesure pour de la demande de devis.",
    outils: [
      "PHP",
      "WordPress",
      "WooCommerce",
      "Plugins sur mesure",
      "Gestion de projet",
      "Autonomie",
      "Tenue de réunions",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/filtre-bge",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.filtre-bge.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "L'entreprise Filtre BGE est spécialisée dans les équipements aéraulique. Ils font lintermédiaire entre les fournisseurs et les clients de ce type de produits. En 2023, ils décident de m'engager en temps que stagiaire pour concevoir et réaliser leur site.   ",
          },
          {
            title: "Objectifs",
            content:
              "Ils ont plusieurs consignes : il leur faut un site moderne, et qui sorte des codes de leur industrie (de la ventilation, de l'usine, de la poussière...). Leur attente principale de ce site est la possibilité pour les clients de sélectionner des filtres (ainsi que d'entrer leurs caractéristiques), et de les ajouter à une demande de devis. Après avoir prit le temps de réfléchir à la meilleure manière d'appréhender ce projet, j'ai trouvé qu'un site e-commerce type WordPress / WooCommerce allait parfaitement remplir les conditions fixées par l'entreprise. C'est donc en utilisant une combinaison d'Elementor, de Wordpress, de WooCommerce ainsi que de plugins annexes que j'ai réussi à arriver un résultat tout à fait satisfaisant pour Filtre BGE. Ils m'ont indiqué que leurs demandes de contact & leurs conversions ont explosées depuis la mise en ligne du site, et que j'étais allé bien au delà de leurs attentes. Pour rentrer un peu plus dans le côté technique du projet : j'ai utilisé un thème enfant pour modifier des composants de WooCommerce (affichage panier, gestion des caractéristiques des filtres à afficher / à gérer dans les mails, j'ai créé des designs de A à Z sur Figma puis intégrés sur Elementor, j'ai du adapter certains plugins qui n'étaient pas compatibles entre-eux et qui m'ont permis de gagner des heures de développement...",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "En stage de Licence 3" },
          {
            title: "Type de projet",
            content: "Projet de développement web / WordPress",
          },
          { title: "Date du projet", content: "2023" },
          { title: "Client", content:"Filtre BGE"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            filtreBgeMacbook1,
            filtreBgeIphone1,
            filtreBgeIphone2,
            filtreBgeMacbook2,
          ],
        },
      },
    ],
  },

  // Franck Archimbaud
  {
    imgMiniature: franckArchimbaudMacbook1,
    idRea: "franck-archimbaud", // ID unique pour chaque projet
    titre: "Création de site WordPress - Franck Archimbaud",
    shortDescription:
      "Conception & développement d'un site WordPress pour un client Kinésithérapeute - Freelance",
    outils: [
      "PHP",
      "WordPress",
      "Elementor",
      "Plugins sur mesure",
      "Gestion de projet",
      "Autonomie complète",
      "Recherche de client",
      "Conception de A à Z",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/franck-archimbaud",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://franckarchimbaud.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "En recherche de client pour développer mon portfolio, j'ai contacté tous types de clients pour leur proposer de développer leur site / leur image en ligne. Franck Archimbaud, masseur kinésithérapeute m'a répondu qu'il était très intéressé, mais que son domaine était très réglementé. Après m'y être intéressé et avoir vu si j'étais apte à répondre à ses attentes, nous avons commencé à discuter de celles-ci. ",
          },
          {
            title: "Objectifs",
            content:
              "Les attentes de M. Archimbaud étaient assez claires : avoir une présence en ligne (autre que simplement Doctolib / les pages jaunes), et d'avoir un endroit ou centraliser ses demandes de contact ou/et de rendez-vous. Il n'avait pas plus d'attentes, et ne m'a pas précisé de thème, de couleurs, ou d'inspirations pour le site. J'ai donc du me creuser la tête pour lui proposer quelque chose que je trouvais cohérent avec son activité, mais surtout qui respectait les conditions fixées par l'ordre des médecins. Je suis arrivé à un résultat qui convient très bien à mon client et à moi aussi. Je continue d'intervenir sur son site pour mettre à jour les actualités, pour régler les problèmes qui peuvent survenir...",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "En freelance" },
          {
            title: "Type de projet",
            content: "Projet de développement web / wordpress",
          },
          { title: "Date du projet", content: "de 2023 à aujourd'hui" },
          { title: "Client", content:"Franck Archimbaud"},

        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            franckArchimbaudMacbook1,
            franckArchimbaudIphone1,
            franckArchimbaudIphone2,
            franckArchimbaudMacbook2,
          ],
        },
      },
    ],
  },

  // Financ'ile
  {
    imgMiniature: financilemacbook1,
    idRea: "financile", // ID unique pour chaque projet
    titre: "Création de site WordPress - Financ'ile",
    shortDescription:
      "Dans le cadre de mon stage en agence, j'ai pu travailler en autonomie complète sur un site WordPress complexe, une bonne introduction sur un projet qui a du sens pour l'agence.",
    outils: [
      "PHP",
      "WordPress",
      "ACF",
      "Bootstrap",
      "JQuery",
      "NodeJS",
      "Sass",
      "JS",
      "Éditeur Gutenberg",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/financile",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://financile.adjectif.com/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Pour un client de l'agence Adjectif lors de mon alternance, j'ai eu la chance de travailler sur le site de l'entreprise Financile. Ce site avait été maquetté par une UX Designer externe à l'agence sur Figma, que j'ai pu suivre au mieux pour créer chacune des pages et animations présentes sur le site.",
          },
          {
            title: "Objectifs",
            content:
              "Le principal objectif était d'être le plus fidèle à la maquette possible, ce qui est chose faite. À la fin du mois de février 2025 le site est encore en preprod, car le client n'a pas le encore prit le temps de vérifier et de valider le site. Comme précisé dans les outils, ce site est le résultat d'une combinaison de blocks gutenberg, de champs ACF, de code PHP/JS, de bootstrap/sass. J'ai développé 100% de ce qui est visible en ligne, et c'est évidemment développé pour mobile & desktop. La technique de ce projet résidait vraiment dans le côté administrable de ce site. Il fallait que les pages et leur contenu soient toutes administrables via des blocks Gutenberg, et/ou des champs ACF. C'est chose faite, l'énorme majorité du contenu est administrable depuis les pages d'administration, ils ont aussi une page 'Options' d'ACF qui leur permet de gérer les numéros de téléphones affichées, les informations des agences, quand la nouvelle agence ouvrira ils auront la possibilité de la créer et elle s'ajoutera automatiquement au divers endroits du site... Un projet technique à prendre en main, mais qui s'est très bien déroulé et que j'ai hâte de mettre en production.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          { title: "Type de projet", content: "Projet de développement web" },
          { title: "Date du projet", content: "2024" },
          { title: "Client", content:"Financile"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            financilemacbook1,
            financileiphone1,
            financileiphone2,
            financilemacbook2,
          ],
        },
      },
    ],
  },

  // Agence du Leasing
  {
    imgMiniature: agenceDuLeasingMacbook2,
    idRea: "agence-du-leasing", // ID unique pour chaque projet
    titre:
      "Développement de fonctionnalités - WordPress - ACF - Agence du Leasing",
    shortDescription:
      "J'ai pu travailler sur un site WordPress complexe pour une agence de location de voiture, utilisant des champs ACF, des données d'API...",
    outils: [
      "PHP",
      "WordPress",
      "Gestion d'API",
      "Gestion complexe de champs ACF",
      "JS",
      "Création de d'espace d'administration",
      "Dev. de fonctions sur-mesures",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/agence-du-leasing",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.agenceduleasing.com/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "J'ai eu l'opportunité de travailler sur le site d'un client développé par un précédent développeur de l'agence Adjectif durant mon alternance : le site de l'Agence du Leasing. Ce site WordPress est très complexe, il fait appel à une API pour créer et remplir des Custom Post Type de voitures, et les afficher sur le site pour les proposer à la location. En passant outre les détails techniques, ce site était très dense et délicat à appréhender.",
          },
          {
            title: "Objectifs",
            content:
              "J'ai été chargé de modifications plus ou moins importantes en fonction des attentes et besoins du client. De la simple création de nouvelle page avec de légères sections administrables via champs ACF à la gestion des importations des voitures via API + utilisation pour la création de template-parts pour des carousels complexes, j'ai pu m'améliorer et prendre en compétences sur WordPress de manière très rapide et sur des points que je n'avais pas encore eu l'occasion d'aborder. Côté technique maintenant, mes missions étaient très diverses. J'ai pu par exemple créer une fonction qui allait récupérer des informations dans l'API du client et qui, grâce à celles-ci et à une liaison à des informations entrées dans des champs ACF, générait les patchs sur les carousels / cartes des voitures. J'ai pu aussi créer des systèmes de fonctionnement complexe d'affichage et de gestion des voitures, la gestion des prises de contact avec des champs dynamiques dans les formulaires CF7... Un projet très complet qui m'a grandement apprit et auxquel je suis très chanceux d'avoir pu prendre part.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          {
            title: "Type de projet",
            content: "Projet de développement web / wordpress complexe",
          },
          { title: "Date du projet", content: "2024 - 2025" },
          { title: "Client", content:"Yooliz / Agence du Leasing"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            agenceDuLeasingMacbook1,
            agenceDuLeasingIphone1,
            agenceDuLeasingIphone2,
            agenceDuLeasingMacbook2,
          ],
        },
      },
    ],
  },

  // Plurimmo
  {
    imgMiniature: plurimmoIphone1,
    idRea: "plurimmo", // ID unique pour chaque projet
    titre: "Refonte des pages 'Programmes' - WordPress - API - Plurimmo",
    shortDescription:
      "J'ai participé au dev. de la refonte des pages programmes du site Plurimmo.",
    outils: ["PHP", "API", "WordPress", "HTML", "Sass", "ACF"],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/plurimmo",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.plurimmo.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Dans une quête de remise à neuf de son site web WordPress, le client Plurimmo de l'agence Adjectif à souhaité que nous retravaillons les pages 'Programmes' en ligne. J'ai donc pu, après avoir étudié la maquette créé par le studio de l'agence, m'attaquer au développement de ce modèle de page. Il y avait énormément d'informations à récupérer soit de champs ACF, soit de serveurs externes via une API, soit dans des custom post type.",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif principal était de donner un aspect plus moderne au site du client, tout en permettant de retrouver les mêmes informations qu'avant. Nous avons donc un hero de page relativement simple, avec les infos clés sur la gauche et des boutons importants en dessous, puis dans la suite de la page certaines sections clés. Des tableaux de prix administrables complètement, ou autonome en fonction des données récupérées dans l'API (par exemple : si tous les prix sont cachés, on décide de ne pas afficher la colonne de prix..., ou encore de la gestion de variable/du nom des données). J'ai donc pu toucher à une API très complexe, à la gestion de custom post type, de l'intégration de maquette, de la gestion de librairies pour les carousel, de la création de blocks pour gérer les sections \"voir plus\"... Un projet très dense et qui m'a prit du temps, mais que j'ai pris plaisir à voir évoluer. Pour mentionner le côté plus technique maintenant : le plus complexe sur la refonte des pages Programmes était de complexe les données de l'API, et toutes les subtilités qui venaient avec. Certains logements étaient nommés des 'Studio', d'autres simplement des 'T1', il a fallu faire un gros travail en amont de préparation des données avant de les afficher et de créer la structure du site. En ajoutant à cela le fait que chacune des sections (hors celles qui affichées des données de l'API) est administrable mais pas obligatoire, cela donne un site très complet et qui nous pousse à prendre un temps de réflexion avant de procéder à des modifications.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          {
            title: "Type de projet",
            content: "Projet de développement web / wordpress complexe",
          },
          { title: "Date du projet", content: "2024" },
          { title: "Client", content:"Plurimmo"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            plurimmoMacbook1,
            plurimmoIphone1,
            plurimmoIphone2,
            plurimmoMacbook2,
          ],
        },
      },
    ],
  },

  // Vivre Villars
  {
    imgMiniature: vivreVillarsMacbook1,
    idRea: "vivre-villars", // ID unique pour chaque projet
    titre: "Création de landing page - Vivre Villars",
    shortDescription:
      "Développement d'une landing page pour UTEI visant à faciliter la prise de contact d'un programme immo.",
    outils: [
      "PHP",
      "JS",
      "Sass",
      "HTML",
      "NodeJS",
      "Suivi de maquette",
      "Gulp",
      "NPM",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/vivre-villars",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.vivre-villars.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Adjectif, agence de publicité spécialisée dans l'immobilier propose de créer des landing page pour des programmes immobiliers. C'est donc dans ce cadre que j'ai eu l'opportunité de travailler sur cette landing page que j'ai pris énormément de plaisir à voir évoluer.",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif principal était de faciliter la prise de contact et d'avoir un site de redirection pour les campagnes de marketing digital. J'ai donc développé ce site en m'appuyant sur une maquette créée par le studio de l'agence, et permis la vente de nombreux appartement via la redirection des contacts vers les commerciaux du promoteur client de l'agence. Bref passage technique : le site est développé avec une combinaison de HTML / PHP / JS / Sass. PHP pour le formulaire avec gestion des champs, JS pour toutes les fonctionnalités plus techniques et Sass pour tout le style. Nous travaillons toutes nos landings pages avec le Task Runner Gulp, qui permet d'automatiser tout le processus de construction des fichiers.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          { title: "Type de projet", content: "Projet de développement web" },
          { title: "Date du projet", content: "2024" },
          { title: "Client", content:"U.T.E.I."},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            vivreVillarsMacbook1,
            vivreVillarsIphone1,
            vivreVillarsIphone2,
            vivreVillarsMacbook2,
          ],
        },
      },
    ],
  },

  // Vivre Annecy
  {
    imgMiniature: vivreAnnecyIphone1,
    idRea: "vivre-annecy", // ID unique pour chaque projet
    titre: "Création de landing page - Vivre Annecy",
    shortDescription:
      "Développement d'une landing page pour Eiffage visant à faciliter la prise de contact d'un programme immo.",
    outils: [
      "PHP",
      "JS",
      "Sass",
      "HTML",
      "NodeJS",
      "Suivi de maquette",
      "Gulp",
      "NPM",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/vivre-annecy",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.vivre-annecy.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Dans le cadre de mon travail à l'agence Adjectif, spécialisée dans la publicité pour l'immobilier, j'ai participé à la création d'une landing page pour un programme immobilier. ",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif était d'optimiser le processus de contact et de créer une passerelle efficace pour les campagnes marketing. En m'appuyant sur la maquette réalisée par le studio de l'agence, j'ai développé un site intuitif qui a permis une redirection fluide des prospects vers les commerciaux du promoteur, contribuant ainsi à la vente de nombreux appartements. Bref passage technique : le site est développé avec une combinaison de HTML / PHP / JS / Sass. PHP pour le formulaire avec gestion des champs, JS pour toutes les fonctionnalités plus techniques et Sass pour tout le style. Nous travaillons toutes nos landings pages avec le Task Runner Gulp, qui permet d'automatiser tout le processus de construction des fichiers.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          { title: "Type de projet", content: "Projet de développement web" },
          { title: "Date du projet", content: "2024" },
          { title: "Client", content:"Eiffage"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            vivreAnnecyMacbook1,
            vivreAnnecyIphone1,
            vivreAnnecyIphone2,
            vivreAnnecyMacbook2,
          ],
        },
      },
    ],
  },

  // Odyssée bourg
  {
    imgMiniature: odysseeBourgMacbook1,
    idRea: "odyssee-bourg", // ID unique pour chaque projet
    titre: "Création de landing page - Odysée Bourg",
    shortDescription:
      "Développement d'une landing page pour Care Immobilier visant à faciliter la prise de contact d'un programme immo.",
    outils: [
      "PHP",
      "JS",
      "Sass",
      "HTML",
      "NodeJS",
      "Suivi de maquette",
      "Gulp",
      "NPM",
    ],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/odyssee-bourg",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://www.odyssee-bourg.fr/",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "En tant que membre de l'agence Adjectif, spécialisée dans l'immobilier, j'ai eu l'opportunité de travailler sur la création d'une landing page dédiée à un programme immobilier. Le but principal était de simplifier le processus de contact et d'assurer une redirection optimale pour les campagnes de marketing digital.",
          },
          {
            title: "",
            content:
              "En suivant la maquette fournie par le studio de l'agence, j'ai développé un site qui a non seulement facilité la prise de contact, mais a également généré un grand nombre de ventes d'appartements en dirigeant les prospects vers les commerciaux du promoteur immobilier. Bref passage technique : le site est développé avec une combinaison de HTML / PHP / JS / Sass. PHP pour le formulaire avec gestion des champs, JS pour toutes les fonctionnalités plus techniques et Sass pour tout le style. Nous travaillons toutes nos landings pages avec le Task Runner Gulp, qui permet d'automatiser tout le processus de construction des fichiers.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Avec l'Agence Adjectif" },
          { title: "Type de projet", content: "Projet de développement web" },
          { title: "Date du projet", content: "2024" },
          { title: "Client", content:"CARE Promotion"},
        ],
        imagesPage: {
          title: "Aperçu",
          images: [
            odysseeBourgMacbook1,
            odysseeBourgIphone1,
            odysseeBourgIphone2,
            odysseeBourgMacbook2,
          ],
        },
      },
    ],
  },
];

export const projetsCreation = [
  // INVITE ETOILE
  {
    imgMiniature: exemple3,
    idRea: "invite-etoile", // ID unique pour chaque projet
    titre: "Création de DA - Invité Étolé",
    shortDescription:
      "J'ai pu créer, imaginer et donner une identité à une marque fictive de livraison de repas gastronomique.",
    outils: ["Figma", "Illustrator", "Figma Slides", "Photoshop", "InDesign"],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/invite-etoile",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive:
      "https://www.figma.com/deck/thFG2apzHX8q8WRHxsM2Cy/Dossier-invit%C3%A9-%C3%A9toil%C3%A9?node-id=1-25&t=xTJGnx4AmS2K8Ef0-1",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Dans mon master 2, j'ai la chance d'avoir une composante web majeure, mais aussi de matières qui me permettent d'exprimer ma créativité grâce à des projets de grande envergure. Dans ce cas, c'était la création d'une identité pour une marque de livraison de repas gastronomique à domicile. Logo, identité propre, mockup, concept... Il a fallu tout imaginer et concevoir",
          },
          {
            title: "Objectifs",
            content:
              "Je suis resté très classique dans mes décisions, des couleurs très simples et classiques de l'univers de la gastronomie, mais la ou mon idée se distingue : le concept. Grâce au concept que vous pourrez retrouver sur mon document Figma Slides, j'ai pu concevoir des idées d'éléments marketing très pertinent et quio nt du sens. Une expérience très enrichissante, et qui m'a permis de mieux découvrir des logiciels comme InDesign ou Illustrator.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Dans le cadre de mon Master 2 - CIM" },
          {
            title: "Type de projet",
            content: "Projet de création d'identité de marque",
          },
          { title: "Date du projet", content: "2025" },
        ],
        imagesPage: {
          title: "Aperçu",
          images: [exemple, exemple2, exemple3, exemple4],
        },
      },
    ],
  },

  // Come-on
  {
    imgMiniature: exemple4,
    idRea: "come-on", // ID unique pour chaque projet
    titre: "Maquette - Application Come On",
    shortDescription:
      "Création et maquettage d'une application de mise en relation de salle de concert & d'artistes.",
    outils: ["Figma", "Photoshop", "Illustrator"],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/come-on",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive:
      "https://www.figma.com/proto/2OftsdFPf8sxbVeFXgiWrQ/Application-UX-Musicien-%2F-Salle---Mathias-VACHER?node-id=4402-28&t=T7c71fKeOhIMxy7u-1",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Dans le cadre de mon Master 2, j'ai eu l'occasion de beaucoup m'intéresser à l'UX des sites Internet, mais aussi des applications mobiles. Ce projet, Come On, a été imaginé et créé de A à Z sur Figma, en incorporant des designs et images avec Illustrator/Photoshop. Il a aussi été maquetté et est disponible en ligne.",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif était de proposer un design d'application mobile pour mettre en relation des salles de concert & des artistes. Les seules consignes étaient d'avoir un minimum de pages, que j'ai largement dépassé. Les couleurs, le logo, les différentes pages, la création de composants atomiques sur Figma, le respect de règles élémentaires de l'UX... ce projet m'a permis d'aborder tout cela d'un oeil professionnel, et m'a permis de grandemenet m'améliorer en design, mais aussi pour mes choix quand je développe des sites Internet par exemple.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Dans le cadre de mon Master 2 - CIM" },
          {
            title: "Type de projet",
            content: "Projet de création & de maquettage d'application mobile",
          },
          { title: "Date du projet", content: "2024" },
        ],
        imagesPage: {
          title: "Aperçu",
          images: [exemple, exemple2, exemple3, exemple4],
        },
      },
    ],
  },

  // Appli cusset
  {
    imgMiniature: exemple4,
    idRea: "cusset-histoire", // ID unique pour chaque projet
    titre: "Maquette - Application Visite Historique - Cusset",
    shortDescription:
      "Création et maquettage d'une application de visite de lieux historiques de la région Lyonnaise.",
    outils: ["Figma", "Photoshop", "Illustrator"],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/cusset-histoire",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive:
      "https://www.figma.com/proto/BU0UrpVoj4XkhMTQVruvSu/Application-Histoire-de-l'art?node-id=0-1&t=NoDaCaF43XRX53xV-1",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Dans le cadre de mon Master 2, j'ai eu l'opportunité de travailler sur des projets innovants alliant technologie et expérience utilisateur. Ce projet, qui porte sur une application de visite de lieux historiques en réalité augmentée (AR), a été conçu de A à Z. Tout a été imaginé sur Figma, avec une attention particulière aux détails visuels, tout en intégrant des éléments interactifs créés avec des outils comme Illustrator et Photoshop. Le prototype est fonctionnel et disponible en ligne pour une exploration immersive des lieux historiques.",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif était de créer une application mobile permettant aux utilisateurs de découvrir des lieux historiques à travers la réalité augmentée, enrichissant leur expérience avec des informations contextuelles en temps réel. Les contraintes étaient de proposer une interface simple et intuitive, tout en garantissant un contenu riche et interactif. J'ai pris soin d'incorporer des éléments graphiques modernes, des animations fluides et une navigation sans friction pour une expérience immersive. Ce projet m'a permis d'affiner mes compétences en UX/UI design, tout en me confrontant aux défis techniques et ergonomiques spécifiques aux applications de réalité augmentée.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Dans le cadre de mon Master 2 - CIM" },
          {
            title: "Type de projet",
            content: "Projet de création & de maquettage d'application mobile",
          },
          { title: "Date du projet", content: "2024" },
        ],
        imagesPage: {
          title: "Aperçu",
          images: [exemple, exemple2, exemple3, exemple4],
        },
      },
    ],
  },

  // Motion design logo
  {
    imgMiniature: exemple4,
    idRea: "motion-design-logo", // ID unique pour chaque projet
    titre: "Motion design - Logo",
    shortDescription:
      "Création d'un motion design très simple d'un logo d'une marque fictive - Go Fresh",
    outils: ["After Effect", "Illustrator"],
    texteBoutonProjet: "Voir le projet",
    lienBoutonProjet: "/realisations/motion-design-logo-gofresh",
    texteBoutonLive: "Voir en direct",
    lienBoutonLive: "https://youtu.be/StG4Q6yNf3E",

    contentPage: [
      {
        leftSection: [
          {
            title: "Contexte",
            content:
              "Un projet très bref d'introduction au motion design, et à quelques principes clés du montage vidéo / du sound design.",
          },
          {
            title: "Objectifs",
            content:
              "L'objectif clé de ce projet était d'animer un logo très rapidement (quelques secondes maximum) pour comprendre le fonctionnement d'After Effect, et de nous donner des pistes pour du montage vidéo. Le sound design n'était pas imposé et totalement volontaire.",
          },
        ],
        rightSection: [
          { title: "Cadre", content: "Dans le cadre de mon Master 2 - CIM" },
          {
            title: "Type de projet",
            content: "Projet de motion design - sound design",
          },
          { title: "Date du projet", content: "2024" },
        ],
        imagesPage: {
          title: "Aperçu",
          images: [exemple, exemple2, exemple3, exemple4],
        },
      },
    ],
  },
];
