import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class FooterComponent extends AppComponent {}
