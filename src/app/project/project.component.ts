import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogData } from '../projects';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})

export class ProjectComponent extends AppComponent {
  @Input() project: any;

  constructor(
    public dialog: MatDialog,
    public override _ActivatedRoute: ActivatedRoute
  ) {
    super(_ActivatedRoute);
  }

  openDialog(projectData: DialogData){
    this.dialog.open(DialogDetailComponent, {data: projectData});
  }
}
