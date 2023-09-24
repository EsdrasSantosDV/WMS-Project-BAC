import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  FieldBaseGeneric,
  FieldControlService,
} from '@ng-template-khan-esdras/shared/utils';
import { GenericControlDynamicComponent } from '../generic-control-dynamic/generic-control-dynamic.component';

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
  form!: FormGroup;
  payLoad = '';

  constructor(private fieldServiceGeneric: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldServiceGeneric.toFormGroup(
      this.fieldsGeneric as FieldBaseGeneric<string>[]
    );
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.getRawValue());
  }
}
