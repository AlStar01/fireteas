import { async, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { MdIconModule, MdProgressSpinnerModule } from '@angular/material';

import { CountdownTimerComponent } from './countdown-timer.component';
import { BlinkDirective } from '../directives/blink.directive';

describe('CountdownTimerComponent', () => {
  let component: CountdownTimerComponent;
  let fixture: ComponentFixture<CountdownTimerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MdIconModule,
        MdProgressSpinnerModule
      ],
      declarations: [
        BlinkDirective,
        CountdownTimerComponent
      ]
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

  it('should display the default formatted time when no time provided', () => {
    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.countdown-timer__duration').textContent;

    expect(time).toEqual('03:00');
  });

  it('should display formatted time when input provided', () => {
    component.seconds = 150;

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.countdown-timer__duration').textContent;

    expect(time).toEqual('02:30');
  });

  it('should reset the timer', () => {
    component.seconds = 150;

    fixture.detectChanges();

    component.reset();

    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;
    const time = compiled.querySelector('.countdown-timer__duration').textContent;

    expect(time).toEqual('03:00');
  });

  it('should set the color to primary when greater than 20% remaining', () => {
    const expected = 'primary';

    component.seconds = 150;

    fixture.detectChanges();

    const actual = component.getSpinnerColor();

    expect(actual).toEqual(expected);
  });

  it('should set color to warn when less than 20% remaining', () => {
    const expected = 'warn';

    component.seconds = 20;

    fixture.detectChanges();

    const actual = component.getSpinnerColor();

    expect(actual).toEqual(expected);
  });

  it('should get remaining time as a percentage rounded up', () => {
    const expected = 84;

    component.seconds = 150;

    fixture.detectChanges();

    const actual = component.getSpinnerValue();

    expect(actual).toEqual(expected);
  });

  it('should know when time remaining is ending', () => {
    const expected = true;

    component.seconds = 20;

    fixture.detectChanges();

    const actual = component.isEnding();

    expect(actual).toEqual(expected);
  });

  it('should not display start button once timer has started', () => {
    const expected = false;

    component.seconds = 150;

    fixture.detectChanges();

    const actual = component.isStartVisible();

    expect(actual).toEqual(expected);
  });

  it('should not display restart button if timer has not started', () => {
    const expected = false;

    const actual = component.isRestartVisible();

    expect(actual).toEqual(expected);
  });
});
