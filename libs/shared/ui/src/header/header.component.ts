import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-header',
  standalone: true,
  imports: [CommonModule, ...materialModules, RouterLink, RouterOutlet],
  template: ``,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
