import { Component, OnInit } from '@angular/core';
import { SFCascaderWidgetSchema, SFCheckboxWidgetSchema, SFRadioWidgetSchema, SFSchema, SFSchemaEnum, SFUISchema } from '@delon/form';

import { DEACTIVATE_REASONS } from '../../../../core/constants/lookup';

@Component({
  selector: 'app-deactivate',
  templateUrl: './deactivate.component.html',
  styles: []
})
export class DeactivateComponent {
  public deactivateReasons = DEACTIVATE_REASONS;

  constructor() {}
}
