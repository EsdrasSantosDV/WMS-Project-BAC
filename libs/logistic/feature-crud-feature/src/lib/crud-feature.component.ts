import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogisticFacadeService } from '@ng-template-khan-esdras/logistic/data-access';

@Component({
  selector: 'ng-template-khan-esdras-crud-feature',
  standalone: true,
  imports: [CommonModule],
  template: `<p>CrudFeature works!</p>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CrudFeatureComponent {
  readonly #logisticFacade = inject(LogisticFacadeService);
}
