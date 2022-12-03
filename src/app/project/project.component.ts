import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogData } from '../projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent {
@Input() project: any;
  constructor(public dialog: MatDialog) { }

  openDialog(projectData: DialogData){
    this.dialog.open(DialogDetailComponent, {data: projectData});
  }
}
