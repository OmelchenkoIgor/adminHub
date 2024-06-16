import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: 'establishments',
    loadComponent: () => import('./pages/establishments/establishments.component')
  },
  {
    path: 'shares',
    loadComponent: () => import('./pages/shares/shares.component')
  },
  {
    path: 'handbook',
    loadComponent: () => import('./pages/handbook/handbook.component')
  },
  {
    path: '',
    redirectTo: 'establishments',
    pathMatch: 'full'
  }
];
