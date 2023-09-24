import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticFacadeService } from '@ng-template-khan-esdras/logistic/data-access';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { FilterGenericComponentComponent } from '@ng-template-khan-esdras/shared/ui';

@Component({
  selector: 'ng-template-khan-esdras-crud-feature',
  standalone: true,
  imports: [CommonModule, ...materialModules, FilterGenericComponentComponent],
  templateUrl: './crud-feature.component.html',
  styleUrls: ['./crud-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudFeatureComponent implements OnInit {
  readonly #logisticFacade = inject(LogisticFacadeService);
  readonly fields = this.#logisticFacade.fieldsFilter;

  ngOnInit(): void {
    this.#logisticFacade.loadInitForms();
  }
}
