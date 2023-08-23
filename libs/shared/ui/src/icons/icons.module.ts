import { APP_INITIALIZER, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { IconInjectorFactory, IconsInjector } from './icons-injector';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, MatIconModule, HttpClientModule],
  providers: [
    IconsInjector,
    {
      provide: APP_INITIALIZER,
      useFactory: IconInjectorFactory,
      deps: [IconsInjector],
      multi: true,
    },
  ],
})
export class IconsModule {}
