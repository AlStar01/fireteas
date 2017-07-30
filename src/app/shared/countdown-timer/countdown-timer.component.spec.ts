import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

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

  it('should display the default time when no time provided', () => {
    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.time').textContent;

    expect(time).toEqual('03:00');
  });

  it('should display transformed time when input provided', () => {
    component.seconds = 150;

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.time').textContent;

    expect(time).toEqual('02:30');
  });

  it('should reset the timer', () => {
    component.seconds = 150;

    fixture.detectChanges();

    component.reset();

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.time').textContent;

    expect(time).toEqual('03:00');
  });
});
