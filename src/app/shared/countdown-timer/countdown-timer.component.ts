import { Component, OnInit, OnDestroy, Input } from '@angular/core';

import { BlinkDirective } from '../directives/blink.directive';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId: number;
  seconds: number;

  shouldBlink = false;

  @Input()
  duration = 180;

  ngOnInit(): void {
    this.seconds = this.duration;
  }

  ngOnDestroy(): void {
    this.reset();
  }

  start(): void {
    this.countDown();
  }

  reset(): void {
    this.clearTimer();
    this.resetTimer();
  }

  getDisplayTime(time: number): string {
    const pad = '00';

    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);

    const minutesDisplay = this.padLeft(pad, minutes.toString());
    const secondsDisplay = this.padLeft(pad, seconds.toString());

    return `${minutesDisplay}:${secondsDisplay}`;
  }

  getSpinnerValue(): number {
    return this.getPercentRemaining();
  }

  getSpinnerColor(): string {
    const percentRemaining = this.getPercentRemaining();
    return percentRemaining < 25 ? 'warn' : 'primary';
  }

  isEnding(): boolean {
    const percentRemaining = this.getPercentRemaining();
    return percentRemaining < 25;
  }

  isStartVisible(): boolean {
    return !this.intervalId && (this.seconds === this.duration);
  }

  isRestartVisible(): boolean {
    return !!this.intervalId || (this.seconds < this.duration);
  }

  private getPercentRemaining(): number {
    const percentage = (this.seconds / this.duration) * 100;
    return Math.ceil(percentage);
  }

  private clearTimer(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  private resetTimer(): void {
    this.seconds = this.duration;
  }

  private countDown() {
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        this.clearTimer();
      }
    }, 1000);
  }

  private padLeft(pad: string, str: string): string {
    return (pad + str).slice(-pad.length);
  }
}
