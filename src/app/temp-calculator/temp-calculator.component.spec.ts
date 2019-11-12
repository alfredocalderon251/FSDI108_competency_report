import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TempCalculatorComponent } from './temp-calculator.component';

describe('TempCalculatorComponent', () => {
  let component: TempCalculatorComponent;
  let fixture: ComponentFixture<TempCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TempCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TempCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
