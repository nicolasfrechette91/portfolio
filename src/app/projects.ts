export interface DialogData {
  title: '',
  description: '',
  tasks: [],
  images: '',
  video: '',
}

/* personal projects*/
export const Projects = [
  {
    id: 1,
    link: 'https://nicolasfrechette91.github.io/nico_fanny_wedding_2020/home/index.html',
    github: 'https://github.com/nicolasfrechette91/nico_fanny_wedding_2020',
    name: 'Wedding Website',
    image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/wedding_project.png',
    description: 'Creation from scratch of a website in preparation for my wedding. This was used to inform the guests of the location and gather all of the pictures in one location.',
    languages: 'HTML · jQuery · CSS',
    dialog: {
      title: 'My Wedding Website',
      description: 'This was built to preserve nice memories of my wedding and as a creative way to inform the guests.',
      tasks: ['Develop website and logic according to UI design made by my wife', 'Adjust the UI to fit on mobile', 'Structure and organize to be able to reuse components / styles when possible', 'Support 3 languages (English / French / Spanish)'],
      images:'',
      video:''}
  },
];
