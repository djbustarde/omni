import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionUnavailableComponent } from './function-unavailable.component';

describe('FunctionUnavailableComponent', () => {
  let component: FunctionUnavailableComponent;
  let fixture: ComponentFixture<FunctionUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FunctionUnavailableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FunctionUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
