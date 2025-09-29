import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    SharedModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  movies = [
    { img: 'https://es.web.img2.acsta.net/pictures/17/02/08/13/45/536055.jpg' },
    { img: 'https://es.web.img2.acsta.net/pictures/18/01/29/13/26/1361527.jpg' },
    { img: 'https://i.pinimg.com/736x/8d/f4/ca/8df4cabe87074e3d5ccc4d6b48831f94.jpg' },
    { img: 'https://i.redd.it/7w54k4ee9syd1.jpeg' },
    { img: 'https://lumiere-a.akamaihd.net/v1/images/tidalwave_payoff_poster_las_0a47c6a2.jpeg' },
    { img: 'https://m.media-amazon.com/images/M/MV5BMTQ1ODIzOGQtOGFkZC00MWViLTgyYmUtNWJkNmIxZjYxMTdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg' }
  ];

}
