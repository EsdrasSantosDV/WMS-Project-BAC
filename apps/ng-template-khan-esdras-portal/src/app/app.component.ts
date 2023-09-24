import {
  ChangeDetectionStrategy,
  Component,
  inject,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  BaseUrl,
  materialModules,
} from '@ng-template-khan-esdras/shared/utils';
import { HeaderComponent } from '@ng-template-khan-esdras/shared/ui';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

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
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  readonly baseUrl = inject(BaseUrl);

  @ViewChild('sidenav') sidenav!: MatSidenav;

  sidenavOpen() {
    this.sidenav.open();
  }
}
