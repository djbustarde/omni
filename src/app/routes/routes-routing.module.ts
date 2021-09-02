import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { environment } from '@env/environment';

import { FunctionUnavailableGuard } from '../core/guards/function-unavailable.guard';
import { LayoutBasicComponent } from '../layout/basic/basic.component';
import { FunctionUnavailableComponent } from './function-unavailable/function-unavailable.component';
import { ModuleUnavailableComponent } from './module-unavailable/module-unavailable.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutBasicComponent,
    children: [
      { path: '', redirectTo: 'manage', pathMatch: 'full' },
      { path: 'exception', loadChildren: () => import('./exception/exception.module').then(m => m.ExceptionModule) },
      { path: 'manage', loadChildren: () => import('./manage/manage.module').then(m => m.ManageModule) },
      { path: 'module-unavailable', component: ModuleUnavailableComponent, data: { title: 'Module Not Available' } },
      {
        path: 'function-unavailable',
        component: FunctionUnavailableComponent,
        data: { title: 'Function Not Available' },
        canActivate: [FunctionUnavailableGuard]
      }
      // 业务子模块
      // { path: 'widgets', loadChildren: () => import('./widgets/widgets.module').then(m => m.WidgetsModule) },
    ]
  },
  // 空白布局
  // {
  //     path: 'blank',
  //     component: LayoutBlankComponent,
  //     children: [
  //     ]
  // },
  { path: '**', redirectTo: 'exception/404' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: environment.useHash,
      // NOTICE: If you use `reuse-tab` component and turn on keepingScroll you can set to `disabled`
      // Pls refer to https://ng-alain.com/components/reuse-tab
      scrollPositionRestoration: 'top'
    })
  ],
  exports: [RouterModule]
})
export class RouteRoutingModule {}
