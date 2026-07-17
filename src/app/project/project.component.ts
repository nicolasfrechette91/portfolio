import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogDetailComponent } from '../dialog-detail/dialog-detail.component';
import { DialogData } from '../projects';
import { TranslationService } from '../translation/translation.service';

@Component({
    selector: 'app-project',
    templateUrl: './project.component.html',
    styleUrls: ['./project.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class ProjectComponent {
  @Input() project: any;

  constructor(
    public dialog: MatDialog,
    protected readonly translationService: TranslationService
  ) {}

  openDialog(projectData: DialogData){
    this.dialog.open(DialogDetailComponent, {data: projectData});
  }
}
