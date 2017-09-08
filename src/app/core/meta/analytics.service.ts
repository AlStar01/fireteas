import { Injectable } from '@angular/core';

declare const ga: Function;

@Injectable()
export class AnalyticsService {

  sendPageView(urlAfterRedirects: string) {
    ga('set', 'page', urlAfterRedirects);
    ga('send', 'pageview');
  }

  sendEvent(eventCategory: string, eventAction: string, eventLabel: string) {
    const hitType = 'event';

    ga('send', {
      hitType,
      eventCategory,
      eventAction,
      eventLabel
    });
  }
}
