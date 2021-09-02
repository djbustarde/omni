import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { FunctionUnavailableComponent } from './function-unavailable/function-unavailable.component';
import { ModuleUnavailableComponent } from './module-unavailable/module-unavailable.component';
import { RouteRoutingModule } from './routes-routing.module';

const COMPONENTS: Array<Type<void>> = [FunctionUnavailableComponent, ModuleUnavailableComponent];

@NgModule({
  imports: [SharedModule, RouteRoutingModule, NzButtonModule],
  declarations: COMPONENTS
})
export class RoutesModule {}
