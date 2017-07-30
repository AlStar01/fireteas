import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  intervalId: number;
  seconds: number;

  @Input()
  duration = 180;

  ngOnInit(): void {
    this.seconds = this.duration;
  }

  ngOnDestroy(): void { this.clearTimer(); }

  start(): void {
    this.countDown();
  }

  reset(): void {
    this.clearTimer();
  }

  getDisplayTime(time: number): string {
    const pad = '00';

    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);

    const minutesDisplay = this.padLeft(pad, minutes.toString());
    const secondsDisplay = this.padLeft(pad, seconds.toString());

    return `${minutesDisplay}:${secondsDisplay}`;
  }

  private clearTimer(): void {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.resetTimer();
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
