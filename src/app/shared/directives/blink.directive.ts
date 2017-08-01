import { Directive, Input, HostBinding, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnChanges, OnDestroy {
  intervalId: number;

  // tslint:disable-next-line:no-input-rename
  @Input() appBlink = true;

  @HostBinding('style.visibility') get visibility() {
    return this.appBlink ? 'hidden' : 'visible';
  }

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    changes['appBlink'].currentValue ? this.start() : this.stop();
  }

  ngOnDestroy(): void {
    this.stop();
  }

  start(): void {
    this.intervalId = window.setInterval(() => {
      this.appBlink = !this.appBlink;
    }, 499);
  }

  stop(): void {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
