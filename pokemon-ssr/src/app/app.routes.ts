import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'about',
    loadComponent: () => import('../app/pages/about/about'),
  },
  {
    path: 'contact',
    loadComponent: () => import('../app/pages/contact/contact'),
  },

  {
    path: 'pokemons',
    loadComponent: () => import('./pages/pokemons/pokemons'),
  },

  { path: '**', redirectTo: 'about' },
];
