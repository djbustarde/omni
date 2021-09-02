import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CommandCenterComponent } from './command-center/command-center.component';

const routes: Routes = [
  { path: '', redirectTo: 'command-center', pathMatch: 'full' },
  { path: 'command-center', component: CommandCenterComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageRoutingModule {}
