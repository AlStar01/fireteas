import { Injectable } from '@angular/core';

declare const ga: Function;

@Injectable()
export class AnalyticsService {

  sendPageView(urlAfterRedirects: string) {
    ga('set', 'page', urlAfterRedirects);
    ga('send', 'pageview');
  }
}
