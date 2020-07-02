import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-default',
  templateUrl: './app-default.component.html',
  styleUrls: ['./app-default.component.scss']
})
export class AppDefaultComponent implements OnInit {

  title = 'visa-issuance';
  constructor() { }

  ngOnInit(): void {
  }

}
