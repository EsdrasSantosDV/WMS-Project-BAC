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

@Component({
  selector: 'ng-template-khan-esdras-generic-dynamic-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, GenericControlDynamicComponent],
  templateUrl: './generic-dynamic-forms.component.html',
  styleUrls: ['./generic-dynamic-forms.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericDynamicFormsComponent implements OnInit {
  @Input() fieldsGeneric: FieldBaseGeneric<string>[] = [];
  @Input({
    required: true,
  })
  resetForms!: Observable<boolean>;

  @Input({
    required: true,
  })
  submitForm!: Observable<boolean>;

  @Output() formValuesEmit = new EventEmitter<any>();

  form!: FormGroup;
  payLoad = '';
  constructor(private fieldServiceGeneric: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldServiceGeneric.toFormGroup(
      this.fieldsGeneric as FieldBaseGeneric<string>[]
    );
    this.resetForms
      .pipe(
        tap(() => {
          this.form.reset();
        })
      )
      .subscribe();

    this.submitForm
      .pipe(
        skip(1),
        withLatestFrom(
          of(JSON.stringify(this.form.getRawValue())),
          of(this.form.valid)
        ),
        switchMap(([_, formValue, formIsValid]) => {
          console.log(formValue);
          if (formIsValid) {
            return of(formValue);
          } else {
            this.form.markAllAsTouched();
            return EMPTY;
          }
        })
      )
      .subscribe((value) => {
        console.log(value);
        this.formValuesEmit.emit(this.form.getRawValue());
      });
  }
}
