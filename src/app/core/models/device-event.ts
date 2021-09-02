class deviceEvent {
  public id: string;
  public date?: Date;
  public onNextSync: boolean;
  public effectivity: string;
  public reason: string;
  public comment: string;
  public deviceId: string;

  public constructor(data: {
    id?: string;
    date?: Date;
    onNextSync?: boolean;
    effectivity?: string;
    reason?: string;
    comment?: string;
    deviceId?: string;
  }) {
    this.id = data.id || '';
    this.date = data.date;
    this.onNextSync = data.onNextSync || false;
    this.effectivity = data.effectivity || '';
    this.reason = data.reason || '';
    this.comment = data.comment || '';
    this.deviceId = data.deviceId || '';
  }
}

export default deviceEvent;
