import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit, signal, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableDataSource, MatTableModule} from "@angular/material/table";
import {
  MatPaginatorModule} from "@angular/material/paginator";

@Component({
  selector: 'ng-template-khan-esdras-table-generic-logistic',
  standalone: true,
  imports: [CommonModule, MatPaginatorModule, MatTableModule],
  templateUrl: './table-generic-logistic.component.html',
  styleUrls: ['./table-generic-logistic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableGenericLogisticComponent  implements OnInit{
  @Input() tableData:any;
  columnsGeneric=signal<string[]>([]);
  dataSource: any;
  ngOnInit() {
    this.dataSource = new MatTableDataSource(this.tableData);
    this.columnsGeneric.update(()=> Object.keys(this.tableData[0]));
  }






}
