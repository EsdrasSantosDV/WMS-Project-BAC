import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'ng-template-khan-esdras-filter-generic-component',
  standalone: true,
  imports: [CommonModule, ...materialModules, ReactiveFormsModule],
  templateUrl: './filter-generic-component.component.html',
  styleUrls: ['./filter-generic-component.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterGenericComponentComponent {
  submitForm() {}
}
