import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FieldBaseGeneric,
  materialModules,
  TypeControlEnum,
} from '@ng-template-khan-esdras/shared/utils';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ng-template-khan-esdras-generic-control-dynamic',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ...materialModules],
  templateUrl: './generic-control-dynamic.component.html',
  styleUrls: ['./generic-control-dynamic.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericControlDynamicComponent {
  @Input() fieldGeneric!: FieldBaseGeneric<string>;
  @Input() form!: FormGroup;
  protected readonly TypeControlEnum = TypeControlEnum;
}
