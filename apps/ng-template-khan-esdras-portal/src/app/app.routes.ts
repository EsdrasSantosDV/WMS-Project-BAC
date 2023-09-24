import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    loadComponent: async () =>
      (await import('@ng-template-khan-esdras/shared/ui')).HomeComponent,
  },
  {
    path: 'logistic',
    loadChildren: async () =>
      (await import('@ng-template-khan-esdras/logistic/routes')).routes,
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];
