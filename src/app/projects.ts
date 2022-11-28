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
    id: 1,
    name: 'Wedding Website',
    image: 'https://nicolasfrechette91.github.io/portfolio/assets/images/wedding_project.png',
    description: 'Resdesigned dashboard web app for .NET Solutions Delivery Centre embedded into their Azure DevOps portal. Fetches metrics data using RESTful call to the .NET Core API.',
    tech: 'Angular 9 · REST API · RxJS · C# .NET Core · Azure Functions',
    dialog: {
      title: 'Front-end dashboard using Angular 9 framework and serverless REST APIs',
      purpose: 'To provide a one-stop website to visualize project ongoing QA test runs showing results from functional automation tests, unit tests, AODA tests, and security alerts.',
      tasks: ['Develop website and logic according to UI design mockup specification', 'Learn and apply data visualization chart libraries, and Azure fundamentals in a short period of time', 'Learned and apply advanced Angular 9 asynchonous data handling using RxJS, Subcriptions, Behaviour Subjects, and Observables', 'Created presentation and demonstrated solution to developers and manager', 'Implement angular routing, and service-oriented architecture', 'Update backend with new API endpoint to consolidate all QA tests REST calls and improved page load time by 4 minutes', 'Documented all project setup in Wiki for further product development'],
      images:'https://nicolasfrechette91.github.io/portfolio/assets/images/netsdc.png',
      video:'',
      document:''}
  },

];
