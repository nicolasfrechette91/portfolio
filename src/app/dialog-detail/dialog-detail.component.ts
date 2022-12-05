import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AppComponent } from '../app.component';
import { DialogData } from '../projects';

@Component({
  selector: 'app-dialog-detail',
  templateUrl: './dialog-detail.component.html',
  styleUrls: ['./dialog-detail.component.scss']
})

export class DialogDetailComponent extends AppComponent {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    public override _ActivatedRoute: ActivatedRoute
  ) {
    super(_ActivatedRoute);
  }

}
