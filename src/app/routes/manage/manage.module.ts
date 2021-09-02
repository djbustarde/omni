import { NgModule, Type } from '@angular/core';
import { SharedModule } from '@shared';

import { CommandCenterComponent } from './command-center/command-center.component';
import { DeactivateComponent } from './command-center/deactivate/deactivate.component';
import { ManageRoutingModule } from './manage-routing.module';

const COMPONENTS: Array<Type<void>> = [CommandCenterComponent, DeactivateComponent];

@NgModule({
  imports: [SharedModule, ManageRoutingModule],
  declarations: COMPONENTS
})
export class ManageModule {}
