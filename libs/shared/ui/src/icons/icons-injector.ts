import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { CustomIcons } from './const-custom-icons';

@Injectable()
export class IconsInjector {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}

  injectAllIcons() {
    CustomIcons.forEach((customIcon) =>
      this.matIconRegistry.addSvgIcon(
        customIcon.label,
        this.domSanitizer.bypassSecurityTrustResourceUrl(customIcon.path)
      )
    );
  }
}

export const IconInjectorFactory = (iconsInjector: IconsInjector) => () =>
  iconsInjector.injectAllIcons();
