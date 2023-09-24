import { Injectable, inject, signal } from '@angular/core';
import { LogisticState } from '../state/logistic-state.model';
import { LogisticDataService } from '../data-services/logistic-data.service';

const initialState: Readonly<LogisticState> = {};

@Injectable({
  providedIn: 'root',
})
export class LogisticFacadeService {
  readonly #logisticDataService = inject(LogisticDataService);

  readonly #state = signal(initialState);
  // add readonly state slices with computed(() => this.#state().someSlice)
}
