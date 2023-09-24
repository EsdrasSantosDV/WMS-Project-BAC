import { Injectable, inject, signal, computed } from '@angular/core';
import { LogisticState } from '../state/logistic-state.model';
import { LogisticDataService } from '../data-services/logistic-data.service';
import { of, tap } from 'rxjs';
import {
  DropdownField,
  FieldBaseGeneric,
  TextBoxField,
} from '@ng-template-khan-esdras/shared/utils';

const initialState: Readonly<LogisticState> = {
  fieldsFilter: [],
};

@Injectable({
  providedIn: 'root',
})
export class LogisticFacadeService {
  readonly #logisticDataService = inject(LogisticDataService);

  readonly #state = signal(initialState);

  readonly fieldsFilter = computed(() => this.#state().fieldsFilter);

  loadInitForms() {
    const fieldsForm: FieldBaseGeneric<string>[] = [
      new DropdownField({
        key: 'brave',
        label: 'Bravery Rating',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new DropdownField({
        key: 'test',
        label: 'dassd',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new DropdownField({
        key: 'teasdst',
        label: 'dasssd',
        options: [
          { key: 'solid', value: 'Solid' },
          { key: 'great', value: 'Great' },
          { key: 'good', value: 'Good' },
          { key: 'unproven', value: 'Unproven' },
        ],
        order: 3,
      }),

      new TextBoxField({
        key: 'firstName',
        label: 'First name',
        value: '',
        required: true,
        order: 1,
      }),

      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
      new TextBoxField({
        key: 'emailAddress',
        label: 'Email',
        type: 'email',
        order: 2,
      }),
    ];
    this.#state.update((state) => ({
      ...state,
      fieldsFilter: fieldsForm,
    }));
  }
}
