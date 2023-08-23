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
      <mat-nav-list (click)="sidenav.close()">
        <a mat-list-item routerLink="/">
          <mat-icon>library_books</mat-icon>
          <span>Books</span>
        </a>

        <a mat-list-item routerLink="about">
          <mat-icon>question_answer</mat-icon>
          <span>About</span>
        </a>

        <a mat-list-item>
          <mat-icon>person_add</mat-icon>
          <span>Register</span>
        </a>

        <a mat-list-item>
          <mat-icon>account_circle</mat-icon>
          <span>Login</span>
        </a>
      </mat-nav-list>
    </mat-sidenav>

    <mat-toolbar color="primary">
      <button mat-icon-button (click)="sidenav.open()">
        <mat-icon>menu</mat-icon>
      </button>

      <a mat-button>
        <mat-icon>person_add</mat-icon>
        Register
      </a>

      <a mat-button>
        <mat-icon>account_circle</mat-icon>
        Login
      </a>
    </mat-toolbar>

    <router-outlet></router-outlet>
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
