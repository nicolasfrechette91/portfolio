import { Component, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})

export class AppComponent implements OnDestroy {
  private _isFrench: boolean = false;
  private _subscription: Subscription[] = [];

  constructor(
    public _ActivatedRoute: ActivatedRoute
  ) {
    this._subscription.push(this.SubscribeToRouteParameter());
  }

  ngOnDestroy(): void {
    this._subscription.forEach(subscription => {
      subscription.unsubscribe();
    })
  }

  private SubscribeToRouteParameter(): Subscription {
    return this._ActivatedRoute.queryParams
      .pipe(
        filter(Boolean)
      ).subscribe((params: any) => {
        if(Object.keys(params).length !== 0) {
          if(params['lang'] === 'fr'){
            this._isFrench = true;
          }
        }
      });
  }

  public get isFrench(): boolean {
    return this._isFrench;
  }
}
