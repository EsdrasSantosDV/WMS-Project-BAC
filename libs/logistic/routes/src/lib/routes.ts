import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    children: [
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
