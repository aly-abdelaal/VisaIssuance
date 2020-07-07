import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  horizontal = true;
  imageURL = 'https://facesymmetry.fun/images/person/mohamed-salah.jpg';

  @Input() isSearch: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
