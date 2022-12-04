export interface DialogData {
  title: '',
  description: '',
  tasks: [],
  images: '',
  video: '',
  titleFrench: '',
  descriptionFrench: '',
  tasksFrench: '',
}

/* personal projects*/
export const Projects = [
  {
    id: 1,
    github: 'https://github.com/nicolasfrechette91/nico_fanny_wedding_2020',
    image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/wedding_project.png',
    link: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index.html',
    name: 'Wedding Website',
    description: 'Creation from scratch of a website in preparation for my wedding. This was used to inform the guests of the location and gather all of the pictures in one location.',
    languages: 'HTML · jQuery · CSS',
    linkFrench: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index_fr.html',
    nameFrench: 'Site web pour mon mariage',
    descriptionFrench: "Création d'un site internet en préparation de mon mariage. Cela a été utilisé pour informer les invités de l'emplacement et rassembler toutes les photos en un seul endroit.",
    languagesFrench: 'HTML · jQuery · CSS',
    dialog: {
      title: 'My Wedding Website',
      description: 'This was built to preserve nice memories of my wedding and as a creative way to inform the guests.',
      tasks: ['Develop website and logic according to UI design made by my wife', 'Adjust the UI to fit on mobile', 'Structure and organize to be able to reuse components / styles when possible', 'Support 3 languages (English / French / Spanish)'],
      images:'',
      video:'',
      titleFrench: 'Site internet de mon mariage',
      descriptionFrench: "Cela a été construit pour préserver de beaux souvenirs de mon mariage et comme un moyen créatif d'informer les invités avec les nouvelles de l'événement.",
      tasksFrench: ["Développer le site Web en fonction du design réalisé par ma femme", "Ajuster l'interface utilisateur pour l'adapter au téléphone mobile", "Structurer et organiser pour pouvoir réutiliser les composants/styles lorsque cela était possible", "Traduction en 3 langues (Français/Anglais/Espagnol)"]
    }
  },
];
