import { Component } from '@angular/core';
import { SettingsService, User } from '@delon/theme';
import { LayoutDefaultOptions } from '@delon/theme/layout-default';
import { environment } from '@env/environment';

@Component({
  selector: 'layout-basic',
  template: `
    <layout-default [options]="options" [content]="contentTpl">
      <layout-default-header-item direction="right">
        <a layout-default-header-item-trigger routerLink="/manage">
          {{ 'header.nav.manage' | i18n }}
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a layout-default-header-item-trigger routerLink="/module-unavailable">
          {{ 'header.nav.monitor' | i18n }}
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a layout-default-header-item-trigger routerLink="/module-unavailable">
          {{ 'header.nav.measure' | i18n }}
        </a>
      </layout-default-header-item>
      <layout-default-header-item direction="right">
        <a layout-default-header-item-trigger routerLink="/module-unavailable">
          {{ 'header.nav.predict' | i18n }}
        </a>
      </layout-default-header-item>

      <ng-template #contentTpl>
        <router-outlet></router-outlet>
      </ng-template>
    </layout-default>
  `
})
export class LayoutBasicComponent {
  options: LayoutDefaultOptions = {
    logoExpanded: `./assets/logo-full.svg`,
    logoCollapsed: `./assets/logo.svg`
  };
  searchToggleStatus = false;
  showSettingDrawer = !environment.production;
  get user(): User {
    return this.settings.user;
  }

  constructor(private settings: SettingsService) {}
}
