import { HttpClient } from '@angular/common/http';
import { Injectable, Injector, Inject } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import type { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NzIconService } from 'ng-zorro-antd/icon';
import { Observable, zip, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';
import { I18NService } from '../i18n/i18n.service';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private menuService: MenuService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.menuService.menus.forEach(menu => {
          menu.hide = event.url !== `/${menu.key}` && !event.url.startsWith(`/${menu.key}/`);
          this.menuService.setItem(menu.key!, menu);
          // console.log("route", event, this.router.url, this.activatedRoute)
          // menu.hide = true //route !== "/manage"
          // this.menuService.setItem(menu.key!, menu)
          // this.activatedRoute.pathFromRoot.forEach(path => console.log(path.url))
          // console.log(event)
        });
      }
    });
  }

  private viaHttp(): Observable<void> {
    const defaultLang = this.i18n.defaultLang;
    return zip(this.i18n.loadLangData(defaultLang), this.httpClient.get('assets/tmp/app-data.json')).pipe(
      catchError((res: NzSafeAny) => {
        console.warn(`StartupService.load: Network request failed`, res);
        return [];
      }),
      map(([langData, appData]: [Record<string, string>, NzSafeAny]) => {
        // setting language data
        this.i18n.use(defaultLang, langData);

        // Application data
        // Application information: including site name, description, year
        this.settingService.setApp(appData.app);
        // User information: including name, avatar, email address
        this.settingService.setUser(appData.user);
        // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
        this.aclService.setFull(true);
        // Menu data, https://ng-alain.com/theme/menu
        this.menuService.add(appData.menu);
        // Can be set page suffix title, https://ng-alain.com/theme/title
        this.titleService.suffix = appData.app.name;
      })
    );
  }

  private viaMockI18n(): Observable<void> {
    const defaultLang = this.i18n.defaultLang;
    return this.i18n.loadLangData(defaultLang).pipe(
      map((langData: NzSafeAny) => {
        this.i18n.use(defaultLang, langData);

        this.viaMock();
      })
    );
  }

  private viaMock(): Observable<void> {
    // const tokenData = this.tokenService.get();
    // if (!tokenData.token) {
    //   this.injector.get(Router).navigateByUrl('/passport/login');
    //   return;
    // }
    // mock
    const app: any = {
      name: `ng-alain`,
      description: `Ng-zorro admin panel front-end framework`
    };
    const user: any = {
      name: 'Admin',
      avatar: './assets/tmp/img/avatar.jpg',
      email: 'cipchk@qq.com',
      token: '123456789'
    };
    // Application information: including site name, description, year
    this.settingService.setApp(app);
    // User information: including name, avatar, email address
    this.settingService.setUser(user);
    // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
    this.aclService.setFull(true);
    // Menu data, https://ng-alain.com/theme/menu
    this.menuService.add([
      {
        key: 'manage',
        text: 'Manage',
        group: true,
        children: [
          {
            text: 'Dashboard',
            i18n: 'menu.dashboard',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Command Center',
            i18n: 'menu.command-center',
            link: '/manage/command-center',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Device Info',
            i18n: 'menu.device-info',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Manage Account',
            i18n: 'menu.manage-account',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Enterprise Center',
            i18n: 'menu.enterprise-center',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Decommission',
            i18n: 'menu.decomission',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Security Center',
            i18n: 'menu.security-center',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Audit Center',
            i18n: 'menu.audit-center',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          },
          {
            text: 'Notifications',
            i18n: 'menu.notifications',
            link: '/function-unavailable',
            icon: { type: 'icon', value: 'appstore' }
          }
        ]
      }
    ]);
    // Can be set page suffix title, https://ng-alain.com/theme/title
    this.titleService.suffix = app.name;

    return of();
  }

  load(): Observable<void> {
    // http
    // return this.viaHttp();
    // mock: Don???t use it in a production environment. ViaMock is just to simulate some data to make the scaffolding work normally
    // mock??????????????????????????????????????????viaMock ????????????????????????????????????????????????????????????????????????
    return this.viaMockI18n();
  }
}
