import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-about',
    templateUrl: './about.component.html',
    styleUrls: ['./about.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class AboutComponent extends AppComponent {}
