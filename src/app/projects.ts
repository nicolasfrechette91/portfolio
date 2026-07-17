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
    description: 'Personalized UI design for a major event. The website was used to inform the event details as well as to create announcements, photo repository and souvenir details in one location.',
    languages: 'HTML · jQuery · CSS',
    linkFrench: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index_fr.html',
    nameFrench: 'Site web pour mon mariage',
    descriptionFrench: "Création d'un site internet en préparation de mon mariage. Cela a été utilisé pour informer les invités de l'emplacement et rassembler toutes les photos en un seul endroit.",
    languagesFrench: 'HTML · jQuery · CSS',
    dialog: {
      title: 'My Wedding Website',
      description: 'This website was built to preserve memories while keeping a personalized and creative style throughout the website.',
      tasks: ['Develop website and logic according to UI design made by my wife', 'Adjust the UI to fit on mobile', 'Structure and organize to be able to reuse components / styles when possible', 'Support 3 languages (English / French / Spanish)'],
      images:'',
      video:[''],
      titleFrench: 'Site internet de mon mariage',
      descriptionFrench: "Ce site Web a été créé pour préserver les souvenirs tout en conservant un style personnalisé et créatif.",
      tasksFrench: ["Développer le site Web en fonction du design réalisé par ma femme", "Ajuster l'interface utilisateur pour l'adapter au téléphone mobile", "Structurer et organiser pour pouvoir réutiliser les composants/styles lorsque cela était possible", "Traduction en 3 langues (Français/Anglais/Espagnol)"]
    }
  },
];
