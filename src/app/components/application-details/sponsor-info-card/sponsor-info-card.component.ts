import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsor-info-card',
  templateUrl: './sponsor-info-card.component.html',
  styleUrls: ['./sponsor-info-card.component.scss']
})
export class SponsorInfoCardComponent implements OnInit {

  horizontal = true;
  imageURL = 'https://resources.premierleague.com/premierleague/photos/players/250x250/p118748.png';
  constructor() { }

  ngOnInit(): void {
  }

}
