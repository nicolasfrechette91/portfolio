export interface DialogData {
  title: '',
  purpose: '',
  tasks: [],
  images: '',
  video: '',
  document:''
}
/* featured projects*/
export const projects = [

  {
    id: 2,
    name: 'Health Quality Dashboard',
    image: '../../assets/images/feature_dashboard.png',
    description: 'Resdesigned dashboard web app for .NET Solutions Delivery Centre embedded into their Azure DevOps portal. Fetches metrics data using RESTful call to the .NET Core API.',
    tech: 'Angular 9 · REST API · RxJS · C# .NET Core · Azure Functions',
    dialog: {
      title: 'Front-end dashboard using Angular 9 framework and serverless REST APIs',
      purpose: 'To provide a one-stop website to visualize project ongoing QA test runs showing results from functional automation tests, unit tests, AODA tests, and security alerts.',
      tasks: ['Develop website and logic according to UI design mockup specification', 'Learn and apply data visualization chart libraries, and Azure fundamentals in a short period of time', 'Learned and apply advanced Angular 9 asynchonous data handling using RxJS, Subcriptions, Behaviour Subjects, and Observables', 'Created presentation and demonstrated solution to developers and manager', 'Implement angular routing, and service-oriented architecture', 'Update backend with new API endpoint to consolidate all QA tests REST calls and improved page load time by 4 minutes', 'Documented all project setup in Wiki for further product development'],
      images:'../../assets/images/netsdc.png',
      video:'',
      document:''}
  },
  {
    id: 1,
    name: 'Yoga Learning Assistant',
    image: '../../assets/images/feature_capstone.png',
    description: 'Web platform that provides real-time feedback on live webcam capture. The application live detects 17 body joints of the user in 2D space and compares it to the position of the instructor on the yoga video. ',
    tech: 'React · TensorFlow.js · PoseNet ·  Node.js · Express.js · MongoDB · AWS S3',
    link: 'http://capstone.dev.fast.sheridanc.on.ca/grpTechCatDream/',
    awards:[' 1st Place Capstone Award Winner in SDNE Program', ' 1st Place Sheridan Student Experience Award'],
    dialog: {
      title: 'Fitness assistant with real-time feedback',
      purpose: 'Create a motion-tracking prototype to teach yoga using a machine learning model for a Sheridan community partner.',
      tasks: ['My role was implementing features including API for cloud database access, AWS S3 bucket storage, React interface for CRUD functionality, timer countdown, game webcam recording and playback, game menu UI', 'Nominated by Applied Computing Professor Sasipriya Arun to present and compete for award at 2020 Capstone Showcase', 'Gather requirements by interviewing Sheridan community partner, Kinetica.ca', 'Designed prototype and wireframe using MarvelApp', 'Created diagrams to convert requirements into technical solution: System Context diagram, Data Flow diagram, ER (Database) diagram, Use Case diagram, architecture diagram', 'Select software tools', 'Market segmentation and competitive analysis', 'Weekly agile team meetings to ensure deliverables were on schedule', 'Error handling and code review and testing'],
      images:'',
      video: 'https://www.youtube.com/embed/bYvSkJg537s?start=123',
      document: ''}
  },

];
