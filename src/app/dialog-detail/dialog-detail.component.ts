import { Component, Inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../projects';

@Component({
    selector: 'app-dialog-detail',
    templateUrl: './dialog-detail.component.html',
    styleUrls: ['./dialog-detail.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class DialogDetailComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

}
