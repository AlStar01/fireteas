import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css']
})
export class CountdownTimerComponent implements OnInit, OnDestroy {
  @Input()
  seconds = 180;

  intervalId = 0;

  ngOnInit(): void {}

  ngOnDestroy(): void { this.clearTimer(); }

  start(): void {
    this.countDown();
  }

  clearTimer(): void {
    clearInterval(this.intervalId);
  }

  getDisplayTime(time: number): string {
    const pad = '00';

    const minutes = Math.floor(time / 60);
    const seconds = time - (minutes * 60);

    const minutesDisplay = this.padLeft(pad, minutes.toString());
    const secondsDisplay = this.padLeft(pad, seconds.toString());

    return `${minutesDisplay}:${secondsDisplay}`;
  }

  private countDown() {
    this.clearTimer();

    this.intervalId = window.setInterval(() => {
      this.seconds -= 1;
      if (this.seconds === 0) {
        // completed
      }
    }, 1000);
  }

  private padLeft(pad: string, str: string): string {
    return (pad + str).slice(-pad.length);
  }
}
