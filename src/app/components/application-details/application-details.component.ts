import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  isSearch = true;
  constructor() { }

  ngOnInit(): void {
  }

}
