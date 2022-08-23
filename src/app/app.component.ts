import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavigationStart, Router } from '@angular/router';
@Component({
  selector: 'my-app',
  template: `
    <button (click)="open()">
      Open New Tab
    </button>
    <button (click)="closeAll()">
      Close All
    </button>
  `,
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnDestroy {
  closedHomeboy = false;
  window = [];

  subscription: Subscription;
  browserRefresh = false;
  constructor(private router: Router) {
    this.subscription = router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.browserRefresh = !router.navigated;
        console.log('constructor browserRefresh', this.browserRefresh);
        console.log('constructor router.navigated', router.navigated);
        if(this.browserRefresh){
          console.log("Im In");
          this.window?.forEach((itm) => {
            itm.close();
          });
        }
      }
    });
  }

  ngOnInit() {
   
  }

  open() {
    var temp = window.open('https://google.com/', '_blank');
    this.window.push(temp);
  }

  closeAll() {
    this.window.forEach((itm) => {
      itm.close();
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
