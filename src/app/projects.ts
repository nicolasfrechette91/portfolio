export interface DialogData {
  translationKey: string,
  image: string,
  video: string,
}

/* personal projects*/
export const Projects = [
  {
    id: 2,
    github: 'https://github.com/nicolasfrechette91/LevelHabit',
    image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/levelHabit_login.png',
    link: 'https://nicolasfrechette91.github.io/LevelHabit/',
    linkFrench: 'https://nicolasfrechette91.github.io/LevelHabit/',
    translationKey: 'projects.items.levelHabit',
    dialog: {
      translationKey: 'projects.items.levelHabit.dialog',
      image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/levelHabit_habits.png',
      video: ''
    }
  },
  {
    id: 1,
    github: 'https://github.com/nicolasfrechette91/nico_fanny_wedding_2020',
    image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/wedding_project.png',
    link: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index.html',
    linkFrench: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index_fr.html',
    translationKey: 'projects.items.weddingWebsite',
    dialog: {
      translationKey: 'projects.items.weddingWebsite.dialog',
      images: '',
      video: 'https://nicolasfrechette91.github.io/portfolio/assets/videos/website.mp4'
    }
  },
];
