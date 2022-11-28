import { Component, OnInit } from '@angular/core';
import { Skills } from '../skills';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  private _skills = Skills;

  constructor() {}

  ngOnInit(): void {
  }

  public get skills(): typeof Skills {
    return this._skills;
  }
}
