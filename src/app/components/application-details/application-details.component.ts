import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-application-details',
  templateUrl: './application-details.component.html',
  styleUrls: ['./application-details.component.scss']
})
export class ApplicationDetailsComponent implements OnInit {

  isSearch = true;
  fees: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.addFees();
  }

  addFees(): void {
    this.fees.push(
      {
        id: '1',
        name: 'Applicattion fee',
        amount: 150
      },
      {
        id: '2',
        name: 'Knowledge fee',
        amount: 10
      },
      {
        id: '3',
        name: 'Issunace fee',
        amount: 100
      },
      {
        id: '4',
        name: 'Inside the country fee',
        amount: 650
      }
    );
  }

}
