import { Injectable, inject, signal, computed } from '@angular/core';
import { LogisticState } from '../state/logistic-state.model';
import { LogisticDataService } from '../data-services/logistic-data.service';

import {
  DropdownField,
  FieldBaseGeneric,
  TextBoxField,
} from '@ng-template-khan-esdras/shared/utils';
import { map, of, tap } from 'rxjs';
import { Product } from '@ng-template-khan-esdras/logistic/models';

const initialState: Readonly<LogisticState> = {
  fieldsFilter: [],
  products: [],
};

@Injectable({
  providedIn: 'root',
})
export class LogisticFacadeService {
  readonly #logisticDataService = inject(LogisticDataService);

  readonly #state = signal(initialState);

  readonly products = computed(() => this.#state().products);

  readonly fieldsFilter = computed(() => this.#state().fieldsFilter);

  loadProducts() {
    return this.#logisticDataService.getAll().pipe(
      map((products) =>
        products.map((c) => {
          const product: Product = {
            ...c,
          };
          return product;
        })
      ),
      tap((products) => this.#state.update((state) => ({ ...state, products })))
    );
  }

  loadInitForms() {
    const fieldsForm: FieldBaseGeneric<string>[] = [
      new DropdownField({
        key: 'productType',
        label: 'Tipo do Produto',
        options: [
          { key: 'typeOne', value: '' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextBoxField({
        key: 'skuProduct',
        label: 'SKU do Produto',
        value: '',
        required: true,
        order: 1,
      }),

      new DropdownField({
        key: 'categoryProduct',
        label: 'Categoria do Produto',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 2,
      }),

      new TextBoxField({
        key: 'nameProduct',
        label: 'Nome do Produto',
        value: '',
        required: true,
        order: 1,
      }),
    ];

    return of(fieldsForm.sort((a, b) => a.order - b.order)).pipe(
      tap((value) => {
        this.#state.update((state) => ({
          ...state,
          fieldsFilter: value,
        }));
      })
    );
  }
}
