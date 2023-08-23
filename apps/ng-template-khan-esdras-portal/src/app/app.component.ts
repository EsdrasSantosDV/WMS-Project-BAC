import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseUrl,
  materialModules,
} from '@ng-template-khan-esdras/shared/utils';
import { HeaderComponent } from '@ng-template-khan-esdras/shared/ui';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'ng-template-khan-esdras-root',
  standalone: true,
  imports: [
    CommonModule,
    ...materialModules,
    HeaderComponent,
    RouterLink,
    RouterOutlet,
  ],
  template: `<mat-sidenav-container fullscreen>
    <mat-sidenav #sidenav [mode]="'push'">
      <mat-nav-list (click)="sidenav.close()"> </mat-nav-list>
    </mat-sidenav>
    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenav.open()">
        <mat-icon>menu</mat-icon>
      </button>
    </mat-toolbar>
    <section>
      <router-outlet></router-outlet>
    </section>
  </mat-sidenav-container>`,
  styles: [
    `
      mat-sidenav {
        width: 400px;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly baseUrl = inject(BaseUrl);
}
