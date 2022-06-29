import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunriseWidgetComponent } from './sunrise-widget.component';

describe('SunriseWidgetComponent', () => {
  let component: SunriseWidgetComponent;
  let fixture: ComponentFixture<SunriseWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunriseWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunriseWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
