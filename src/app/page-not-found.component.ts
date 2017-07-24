import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  template: `<h2>Page not found</h2>`
})
export class PageNotFoundComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit() {
    this.title.setTitle('Fireteas | Page Not Found');
  }
}
