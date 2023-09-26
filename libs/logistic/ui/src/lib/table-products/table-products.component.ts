import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from "@angular/material/card";
import {Product} from "@ng-template-khan-esdras/logistic/models";
import {
  TableGenericLogisticComponent
} from "../../../../../shared/ui/src/table-generic-logistic/table-generic-logistic.component";

@Component({
  selector: 'ng-template-khan-esdras-table-products',
  standalone: true,
  imports: [CommonModule, MatCardModule, TableGenericLogisticComponent],
  templateUrl: './table-products.component.html',
  styleUrls: ['./table-products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableProductsComponent {
  @Input({
    required:true
  }) products!: Product[];


  columnHeader = {
    id: 'ID',
    bookName: 'Book Name',
    price: 'Price',
    author: 'Author',
    actions: 'Actions'
  };






}
