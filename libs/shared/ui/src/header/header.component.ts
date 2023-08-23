import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { materialModules } from '@ng-template-khan-esdras/shared/utils';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-header',
  standalone: true,
  imports: [CommonModule, ...materialModules],
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenavOpenEmit()">
        <mat-icon svgIcon="chat"></mat-icon>
      </button>
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
