import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdIconModule } from '@angular/material';

import { CountdownTimerComponent } from './countdown-timer.component';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ MdIconModule ],
      declarations: [ CountdownTimerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownTimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
