import { Component, OnInit } from '@angular/core';
import { Projects } from '../projects';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  private _projects = Projects;

  constructor() {}

  ngOnInit(): void {
  }

  public get projects(): typeof Projects {
    return this._projects;
  }
}
