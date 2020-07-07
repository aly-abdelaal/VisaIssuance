import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent implements OnInit {

  horizontal = true;
  imageURL = 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png';

  @Input() isSearch: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
