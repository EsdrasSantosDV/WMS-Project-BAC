import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BaseUrl } from '@ng-template-khan-esdras/shared/utils';
import { ProductDto } from '@ng-template-khan-esdras/logistic/models';
import { Observable } from 'rxjs';
import { MockDataLogisticService } from '../mock-data.service/mock-data-logistic.service';

@Injectable({
  providedIn: 'root',
})
export class LogisticDataService {
  readonly #http = inject(HttpClient);
  readonly #baseUrl = inject(BaseUrl);
  readonly #mockService = inject(MockDataLogisticService);

  getAll(): Observable<ProductDto[]> {
    //return this.#http.get<ProductDto[]>(`${this.#baseUrl}/logistics`);
    return this.#mockService.getAll();
  }
}
