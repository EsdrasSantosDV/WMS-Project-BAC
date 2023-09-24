import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticFacadeService } from '@ng-template-khan-esdras/logistic/data-access';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { FilterGenericComponentComponent } from '../../../../shared/ui/src/filter-generic-component/filter-generic-component.component';

@Component({
  selector: 'ng-template-khan-esdras-crud-feature',
  standalone: true,
  imports: [CommonModule, ...materialModules, FilterGenericComponentComponent],
  templateUrl: './crud-feature.component.html',
  styleUrls: ['./crud-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudFeatureComponent {
  readonly #logisticFacade = inject(LogisticFacadeService);
}
