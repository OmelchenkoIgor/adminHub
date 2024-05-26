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
    path: 'reference-book',
    loadComponent: () => import('./pages/reference-book/reference-book.component')
  },
  {
    path: 'news',
    loadComponent: () => import('./pages/news/news.component')
  },
  {
    path: '',
    redirectTo: 'establishments',
    pathMatch: 'full'
  }
];
