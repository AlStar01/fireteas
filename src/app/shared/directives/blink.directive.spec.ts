import { BlinkDirective } from './blink.directive';
import { ElementRef } from '@angular/core';

class MockElementRef extends ElementRef {
  nativeElement = {};

  constructor() { super(null); }
}

describe('BlinkDirective', () => {
  it('should create an instance', () => {
    const directive = new BlinkDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
