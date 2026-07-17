import { Component, ChangeDetectionStrategy } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class NavigationBarComponent extends AppComponent {

  public ScrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView();
  }
}
