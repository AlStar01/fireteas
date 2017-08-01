import { Directive, Input, HostBinding, ElementRef, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appBlink]'
})
export class BlinkDirective implements OnChanges, OnDestroy {
  intervalId: number;

  @Input()
  show = true;

  @HostBinding() get hidden() {
    return this.show;
  }

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    changes['show'] ? this.start() : this.stop();
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      this.stop();
    }
  }

  start(): void {
    this.intervalId = window.setInterval(() => {
      this.show = !this.show;
    }, 1000);
  }

  stop(): void {
    window.clearInterval(this.intervalId);
    this.intervalId = null;
  }
}
