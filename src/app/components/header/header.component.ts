import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  appliactionNumber: number;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onSearchClicked(): void {
    this.router.navigate(['../application-details', this.appliactionNumber]);
  }

  onLogoutClicked(): void {

  }

}
