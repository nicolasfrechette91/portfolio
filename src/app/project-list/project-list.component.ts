import { Component } from '@angular/core';
import { Projects } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent {
  private _projects = Projects;

  public get projects(): typeof Projects {
    return this._projects;
  }
}
