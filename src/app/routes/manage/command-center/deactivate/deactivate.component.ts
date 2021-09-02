import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzDrawerRef } from 'ng-zorro-antd/drawer';
import Device from 'src/app/core/models/device';
import { DeviceEventService } from 'src/app/core/services/device-event.service';

import { DEACTIVATE_REASONS } from '../../../../core/constants/lookup';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styles: []
})
export class DeactivateComponent {
  public device: Device;
  public deactivateReasons = DEACTIVATE_REASONS;
  public form: FormGroup;

  constructor(private fb: FormBuilder, private service: DeviceEventService, private nzDrawerRef: NzDrawerRef<string>) {
    this.form = this.fb.group({
      date: [null],
      onNextSync: [false],
      effectivity: ['normal', [Validators.required]],
      reason: [null, [Validators.required]],
      comment: ['']
    });
  }

  onSubmit = () => {
    const data = { ...this.form.value, deviceId: this.device.id };
    this.service.create(this.form.value).subscribe(() => {
      this.nzDrawerRef.close();
    });
  };

  onCancel = () => this.nzDrawerRef.close();
}
