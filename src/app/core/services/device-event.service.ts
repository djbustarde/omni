import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import DeviceEvent from '../models/device-event';

@Injectable({
  providedIn: 'root'
})
export class DeviceEventService {
  private subject: BehaviorSubject<DeviceEvent[]> = new BehaviorSubject<DeviceEvent[]>([]);
  public list$: Observable<DeviceEvent[]> = this.subject.asObservable();

  constructor(private http: HttpClient) {
    this.load().subscribe(result => this.subject.next(result.list));
  }

  load = () => this.http.get<{ total: number; list: DeviceEvent[] }>('/device-events');

  create = (deviceEvent: DeviceEvent) =>
    this.http.post<DeviceEvent>('/device-events', deviceEvent).pipe(
      tap(result => {
        const list = this.subject.getValue();
        list.push(result);
        this.subject.next(list);
      })
    );
}
