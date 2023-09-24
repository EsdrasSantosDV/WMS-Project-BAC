import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';

@Component({
  selector: 'ng-template-khan-esdras-home',
  standalone: true,
  imports: [CommonModule, ...materialModules],
  templateUrl: '/home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
