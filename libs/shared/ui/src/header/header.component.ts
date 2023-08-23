import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnDestroy,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'ng-template-khan-esdras-header',
  standalone: true,
  imports: [CommonModule, ...materialModules, RouterLink, RouterOutlet],
  template: ``,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {}
