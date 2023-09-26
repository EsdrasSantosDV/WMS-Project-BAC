import { Injectable, inject } from '@angular/core';

import {
  ProductDto,
  ProductStatusEnum,
} from '@ng-template-khan-esdras/logistic/models';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MockDataLogisticService {
  private products: ProductDto[] = [];

  constructor() {
    for (let i = 0; i < 5; i++) {
      this.products.push(this.generateRandomProduct());
    }
  }

  getAll(): Observable<ProductDto[]> {
    return of(this.products);
  }

  private generateRandomProduct(): ProductDto {
    return {
      id: Math.floor(Math.random() * 1000),
      name: `Product ${Math.floor(Math.random() * 1000)}`,
      description: `Description ${Math.floor(Math.random() * 1000)}`,
      itemsInStock: Math.floor(Math.random() * 100),
      manufacturingDate: new Date(
        +new Date() - Math.floor(Math.random() * 10000000000)
      ),
      dueDate: new Date(+new Date() + Math.floor(Math.random() * 10000000000)),
      price: +(Math.random() * 100).toFixed(2),
      quantity: Math.floor(Math.random() * 100),
      status:
        Math.random() > 0.5
          ? ProductStatusEnum.Active
          : ProductStatusEnum.Inactive,
    };
  }
}
