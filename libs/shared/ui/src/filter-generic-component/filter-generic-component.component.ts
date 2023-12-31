import {
  ChangeDetectionStrategy,
  Component,
  inject,
  Injector,
  Input,
  OnInit,
  signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FieldBaseGeneric,
  materialModules,
} from '@ng-template-khan-esdras/shared/utils';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericDynamicFormsComponent } from '../generic-dynamic-forms/generic-dynamic-forms.component';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-template-khan-esdras-filter-generic-component',
  standalone: true,
  imports: [
    CommonModule,
    ...materialModules,
    ReactiveFormsModule,
    GenericDynamicFormsComponent,
  ],
  templateUrl: './filter-generic-component.component.html',
  styleUrls: ['./filter-generic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterGenericComponentComponent {
  @Input({ required: true }) formHeaderTitle!: string;
  @Input({ required: true }) fieldsGeneric: FieldBaseGeneric<string>[] = [];

  submitAction($event: any) {}
}
