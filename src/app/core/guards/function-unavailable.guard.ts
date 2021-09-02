import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';

import { I18NService } from '../i18n/i18n.service';

@Injectable({
  providedIn: 'root'
})
export class FunctionUnavailableGuard implements CanActivate {
  constructor(private modal: NzModalService, private i18n: I18NService) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    this.modal.info({
      nzTitle: 'Function not available'
    });
    return false;
  }
}
