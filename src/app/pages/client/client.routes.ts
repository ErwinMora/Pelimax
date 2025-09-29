import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ViewMoreComponent } from './view-more/view-more.component';
import { DownloadComponent } from './download/download.component';

export const CLIENT_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'viewmore', component: ViewMoreComponent },
    { path: 'download', component: DownloadComponent }
];