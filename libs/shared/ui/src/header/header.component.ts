import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-header',
  standalone: true,
  imports: [CommonModule, ...materialModules, RouterLink],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenavOpenEmit()">
        <mat-icon>menu</mat-icon>
      </button>

      <div>
        <a routerLink="logistic">
          <span>Produto</span>
        </a>
        <a routerLink="storage">
          <span>Armazém</span>
        </a>
        <a routerLink="inventory">
          <span>Inventário</span>
        </a>
      </div>
    </mat-toolbar>
  `,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() sidenavOpen: EventEmitter<void> = new EventEmitter<void>();

  sidenavOpenEmit(): void {
    this.sidenavOpen.emit();
  }
}
