import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrightnessChartComponent } from './brightness-chart.component';

describe('BrightnessChartComponent', () => {
  let component: BrightnessChartComponent;
  let fixture: ComponentFixture<BrightnessChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrightnessChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrightnessChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
