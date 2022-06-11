import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HumidityWidgetComponent } from './humidity-widget.component';

describe('HumidityWidgetComponent', () => {
  let component: HumidityWidgetComponent;
  let fixture: ComponentFixture<HumidityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HumidityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HumidityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
