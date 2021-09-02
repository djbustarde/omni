import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STColumnTag, STComponent } from '@delon/abc/st';
import { DrawerHelper } from '@delon/theme';

import { DeactivateComponent } from './deactivate/deactivate.component';
const TAG: STColumnTag = {
  1: { text: 'Processed', color: 'green' },
  2: { text: 'Sending', color: 'blue' },
  3: { text: '2. Alerts', color: 'red' }
};
@Component({
  selector: 'app-command-center',
  templateUrl: './command-center.component.html',
  styles: []
})
export class CommandCenterComponent {
  constructor(private drawer: DrawerHelper) {}
  url = `/devices?total=2&field=list`;
  params = { a: 1, b: 2 };

  columns: STColumn[] = [
    { title: 'Device Id', index: 'id' },
    { title: 'Customer Id', index: 'customerId' },
    { title: 'Profile', index: 'profile', sort: true },
    { title: 'Status', index: 'status', type: 'tag', tag: TAG },
    {
      title: 'Actions',
      buttons: [
        {
          text: 'Ping',
          click: (_record, modal) => {}
        },
        {
          text: 'Upgrade',
          click: (_record, modal) => {}
        },
        {
          text: 'Deactivate',
          click: (_record, modal) => {
            this.drawer.create('Deactivate', DeactivateComponent, { device: _record }, { size: 400 }).subscribe();
          }
        }
      ]
    }
  ];
}
