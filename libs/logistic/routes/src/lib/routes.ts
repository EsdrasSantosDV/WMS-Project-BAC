import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: async () =>
          (
            await import(
              '@ng-template-khan-esdras/logistic/feature-crud-feature'
            )
          ).CrudFeatureComponent,
      },
    ],
  },
];
