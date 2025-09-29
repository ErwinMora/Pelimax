import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-view-more',
  imports: [
    SharedModule,
    CommonModule, RouterLink
  ],
  templateUrl: './view-more.component.html',
  styleUrl: './view-more.component.css'
})
export class ViewMoreComponent {
  movies = [
    { img: 'https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg' },
    { img: 'https://es.web.img2.acsta.net/pictures/18/01/29/13/26/1361527.jpg' },
    { img: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/film-poster-design-template-81f17589e382892e2b3ec385f7fa232c_screen.jpg?ts=1636980640' },
    { img: 'https://i.redd.it/7w54k4ee9syd1.jpeg' },
    { img: 'https://moviepostermexico.com/cdn/shop/files/spiderman_across_the_spiderverse_ver5_xlg_1024x1024@2x.jpg?v=1686681051' },
    { img: 'https://es.web.img2.acsta.net/pictures/18/01/29/13/26/1361527.jpg' }
  ];

}
