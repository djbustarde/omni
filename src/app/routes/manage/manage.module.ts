import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';

import { CommandCenterComponent } from './command-center/command-center.component';
import { DeactivateComponent } from './command-center/deactivate/deactivate.component';
import { ManageRoutingModule } from './manage-routing.module';

const COMPONENTS: Array<Type<void>> = [CommandCenterComponent, DeactivateComponent];

@NgModule({
  imports: [SharedModule, NzDatePickerModule, ReactiveFormsModule, NzButtonModule, ManageRoutingModule],
  declarations: COMPONENTS
})
export class ManageModule {}
