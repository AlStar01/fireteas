import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `
    <div class="content">
      <h2>Page not found</h2>
      <p>Oops! Go back to <a routerLink="/teas">tea list</a></p>
    </div>
  `
})
export class PageNotFoundComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Fireteas | Page Not Found');
  }
}
