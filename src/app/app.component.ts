import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  private _isFrench: boolean = false;

  constructor() {}

  public get isFrench(): boolean {
    return this._isFrench;
  }
}
