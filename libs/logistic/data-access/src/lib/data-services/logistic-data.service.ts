import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@ng-template-khan-esdras/shared/utils';

type LogisticType = unknown;

@Injectable({
  providedIn: 'root',
})
export class LogisticDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);

  get(id: string) {
    return this.#http.get<LogisticType>(`${this.#baseUrl}/logistic/${id}`);
  }

  getAll() {
    return this.#http.get<LogisticType[]>(`${this.#baseUrl}/logistics`);
  }
}
