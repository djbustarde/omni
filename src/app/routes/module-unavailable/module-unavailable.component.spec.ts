import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleUnavailableComponent } from './module-unavailable.component';

describe('ModuleUnavailableComponent', () => {
  let component: ModuleUnavailableComponent;
  let fixture: ComponentFixture<ModuleUnavailableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModuleUnavailableComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleUnavailableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
