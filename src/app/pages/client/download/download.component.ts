import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-download',
  imports: [
    SharedModule,
    CommonModule,
    RouterLink
  ],
  templateUrl: './download.component.html',
  styleUrl: './download.component.css'
})
export class DownloadComponent {
  animeTerrorMovies = [
    { title: "[Oshi No Ko]" },
    { title: "Mushoku Tensei II: Isekai Ittara Honki Dasu" },
    { title: "Tokyo Ghoul" },
    { title: "Another: The Movie" },
    { title: "Parasyte: The Maxim" },
    { title: "Corpse Party" },
    { title: "Higurashi no Naku Koro ni" },
    { title: "Vampire Hunter D: Bloodlust" },
    { title: "Ajin: Demi-Human" },
    { title: "Jidou Hanbaiki ni Umarekawatta Ore wa Meikyuu wo Samayou" },
    { title: "Kakkou no Iinazuke" },
    { title: "Kowloon Generic Romance" },
    { title: "Kono Kaisha ni Suki na Hito ga Imasu" },
    { title: "Class no Daikirai na Joshi to Kekkon suru Koto ni Natta" },
    { title: "2.5-jigen no Ririsa" },
    { title: "Dosanko Gal wa Namara Menkoi" },
    { title: "Youkoso Jitsuryoku Shijou Shugi no Kyoushitsu e" },
    { title: "Kusuriya no Hitorigoto" },
    { title: "Keikenzumi na Kimi to, Keiken Zero na Ore ga, Otsukiai suru Hanashi" },
    { title: "Ghost Hunt" }
  ];

}
