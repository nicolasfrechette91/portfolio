import { Component, ChangeDetectionStrategy } from '@angular/core';
import { SupportedLocale, TranslationService } from '../translation/translation.service';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrls: ['./navigation-bar.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class NavigationBarComponent {

  constructor(protected readonly translationService: TranslationService) {}

  public ScrollTo(id: string): void {
    document.getElementById(id)!.scrollIntoView();
  }

  setLocale(locale: SupportedLocale): void {
    void this.translationService.setLocale(locale);
  }
}
