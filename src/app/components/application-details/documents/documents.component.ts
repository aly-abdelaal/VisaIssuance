import { Component, OnInit, ViewChild } from '@angular/core';

import {
  IgxCarouselComponent,
  IgxListComponent,
  IListItemClickEventArgs,
  ISlideEventArgs
} from 'igniteui-angular';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss']
})
export class DocumentsComponent implements OnInit {
  @ViewChild(IgxCarouselComponent, { static: true })
  public carousel: IgxCarouselComponent;

  @ViewChild(IgxListComponent, { static: true })
  public list: IgxListComponent;

  public slides: any[] = [];
  public currentIndex = 0;
  constructor() { }

  ngOnInit(): void {
    this.addSlides();

    this.list.onItemClicked.subscribe((args: IListItemClickEventArgs) => {
      this.currentIndex = args.item.index;
      this.carousel.select(this.carousel.get(this.currentIndex));
    });

    this.carousel.onSlideChanged.subscribe((args: ISlideEventArgs) => {
      this.currentIndex = args.slide.index;
    });
  }

  slideStyle(image: string): any {
    return {
      background: `url(${image})`,
      backgroundSize: 'cover',
      backgroundPosition: 'cover',
    };
  }

  addSlides(): void {
    this.slides.push(
      {
        title: 'Persoanl Photo',
        subTitle: '',
        image: 'https://facesymmetry.fun/images/person/mohamed-salah.jpg',
        thumb: 'https://facesymmetry.fun/images/person/mohamed-salah.jpg',
        price: 1299,
        description: 'Persoanl Photo'
      },
      {
        title: 'Sponsored Passport',
        subTitle: '',
        image: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Erik_Mustermann_nPA.jpg',
        thumb: 'https://upload.wikimedia.org/wikipedia/commons/2/25/Erik_Mustermann_nPA.jpg',
        price: 1949,
        description: 'Sponsored Passport'
      },
      {
        title: 'Proof of residency',
        subTitle: 'October to March',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/British_passport_cover_2020.png/190px-British_passport_cover_2020.png',
        thumb: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/British_passport_cover_2020.png/190px-British_passport_cover_2020.png',
        price: 2799,
        description: 'Proof of residency'
      }
    );
  }
}
