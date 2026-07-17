import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Skills } from '../skills';

@Component({
    selector: 'app-skills',
    templateUrl: './skills.component.html',
    styleUrls: ['./skills.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class SkillsComponent {
  private _skills = Skills;

  public get skills(): typeof Skills {
    return this._skills;
  }
}
