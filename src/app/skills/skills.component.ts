import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { Skills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})

export class SkillsComponent extends AppComponent {
  private _skills = Skills;

  public get skills(): typeof Skills {
    return this._skills;
  }
}
