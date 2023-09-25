import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticFacadeService } from '@ng-template-khan-esdras/logistic/data-access';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { FilterGenericComponentComponent } from '@ng-template-khan-esdras/shared/ui';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { combineLatest } from 'rxjs';

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
  readonly fields = this.#logisticFacade.fieldsFilter;
  readonly products = this.#logisticFacade.products;
  readonly fields$ = this.#logisticFacade
    .loadInitForms()
    .pipe(takeUntilDestroyed());
  readonly products$ = this.#logisticFacade
    .loadProducts()
    .pipe(takeUntilDestroyed());
  readonly vm$ = combineLatest([this.fields$, this.products$]);
}
