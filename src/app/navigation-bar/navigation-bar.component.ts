import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})

export class NavigationBarComponent extends AppComponent {

  public ScrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView();
  }
}
