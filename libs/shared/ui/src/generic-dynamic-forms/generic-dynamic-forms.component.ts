import {
  ChangeDetectionStrategy,
  Component,
  effect,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Signal,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FieldBaseGeneric,
  FieldControlService,
} from '@ng-template-khan-esdras/shared/utils';
import { GenericControlDynamicComponent } from '../generic-control-dynamic/generic-control-dynamic.component';

import {
  EMPTY,
  iif,
  Observable,
  of,
  skip,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { logging } from '@angular-devkit/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'ng-template-khan-esdras-generic-dynamic-forms',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GenericControlDynamicComponent,
    MatButtonModule,
  ],
  templateUrl: './generic-dynamic-forms.component.html',
  styleUrls: ['./generic-dynamic-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericDynamicFormsComponent implements OnInit {
  @Input() fieldsGeneric: FieldBaseGeneric<string>[] = [];
  @Output() formEmitValues = new EventEmitter<any>();

  form!: FormGroup;
  constructor(private fieldServiceGeneric: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldServiceGeneric.toFormGroup(
      this.fieldsGeneric as FieldBaseGeneric<string>[]
    );
  }

  searchFilters() {
    if (this.form.valid) {
      this.formEmitValues.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.form.reset();
  }
}
