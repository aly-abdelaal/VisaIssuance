import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'visa-issuance';

  get hideHeader(): boolean {
    return false;
  }

  get hideFooter(): boolean {
    return false;
  }

  constructor() {
  }
}
