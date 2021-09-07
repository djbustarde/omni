import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Device from 'src/app/core/models/device';
import { DeviceEventService } from 'src/app/core/services/device-event.service';

import { DEACTIVATE_REASONS } from '../../../../core/constants/lookup';
import DeviceEvent from '../../../../core/models/device-event';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styles: []
})
export class DeactivateComponent {
  public device: Device;
  public deactivateReasons = DEACTIVATE_REASONS;
  public form: FormGroup;
  public events$: Observable<DeviceEvent[]>;

  public showDateError: boolean = false;

  constructor(
    private fb: FormBuilder,
    private modal: NzModalService,
    private service: DeviceEventService,
    private nzDrawerRef: NzDrawerRef<string>
  ) {
    this.form = this.fb.group({
      date: [null],
      onNextSync: [false],
      effectivity: ['NORMAL', [Validators.required]],
      reason: [null, [Validators.required]],
      comment: ['']
    });

    this.events$ = this.service.list$.pipe(map(items => items.filter(item => item.deviceId === this.device.id)));
  }

  submit = (event: any) => {
    const isNow = event.submitter.getAttribute('data-type') === 'now';
    if (!isNow && !this.form.value.date) {
      this.showDateError = true;
      return;
    }

    if (this.form.invalid) {
      this.markInvalidDirty();
      return;
    }

    const data = { ...this.form.value, deviceId: this.device.id };

    if (isNow) data.date = new Date();
    this.service.create(data).subscribe(() => {
      this.modal.info({
        nzTitle: 'Device is successfully deactivated!'
      });
      this.nzDrawerRef.close();
    });
  };

  markInvalidDirty = () => {
    for (const control in this.form.controls) {
      if (this.form.controls[control].invalid) this.form.controls[control].markAsDirty();
    }
  };

  dateChange = () => {
    this.showDateError = false;
  };

  cancel = () => this.nzDrawerRef.close();

  disabledDate = (current: Date): boolean => current.getTime() < new Date().getTime();
}
