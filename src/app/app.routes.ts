import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: '/client/home', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((m) => m.AUTH_ROUTES),
  },
  {
    path: 'client',
    loadChildren: () =>
      import('./pages/client/client.routes').then((m) => m.CLIENT_ROUTES),
  }
];
