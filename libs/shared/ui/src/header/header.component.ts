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
    <mat-toolbar class="toolbar" color="primary">
      <button
        mat-icon-button
        (click)="sidenavOpenEmit()"
        class="toolbar__button"
      >
        <mat-icon class="toolbar__icon">menu</mat-icon>
      </button>

      <div class="toolbar__links">
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
  styles: [
    `
      .toolbar {
        &__button {
          // styles for the button
        }

        &__icon {
          // styles for the icon
        }

        &__links {
          // styles for the link container
          display: flex;
          gap: 1rem;

          > a {
            // styles for the individual links
            text-decoration: none;
            color: inherit; // Or any desired color
          }
        }
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  @Output() sidenavOpen: EventEmitter<void> = new EventEmitter<void>();

  sidenavOpenEmit(): void {
    this.sidenavOpen.emit();
  }
}
