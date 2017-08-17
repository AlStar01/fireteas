import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Tea } from './tea';
import { WikipediaExtract } from '../shared/models/wikipedia-extract';

@Injectable()
export class TeaService {
  private wikipediaUrl =
    'https://en.wikipedia.org/w/api.php?action=query&format=json' +
    '&smaxage=3600&maxage=3600&prop=extracts%7Cpageimages%7Cinfo' +
    '&exintro=1&explaintext=1&inprop=url&pithumbsize=200&origin=*';

  private teas: { type: string; title: string }[] = [
    { type: 'green', title: 'Green_tea' },
    { type: 'white', title: 'White_tea' },
    { type: 'herbal', title: 'Herbal_tea' },
    { type: 'black', title: 'Black_tea' },
    { type: 'pu-erh', title: 'Pu%27er_tea' },
    { type: 'oolong', title: 'Oolong' }
  ];

  constructor(private http: HttpClient) { }

  getTeas(): { type: string; title: string }[] {
    return this.teas;
  }

  getTea(type: string): Observable<Tea> {
    const url = this.getUrl(type);
    return this.http.get<WikipediaExtract>(url).map(data => this.formatData(data, type));
  }

  private getUrl(type: string): string {
    const title: string = this.getTitle(type);
    return this.wikipediaUrl + `&titles=${title}`;
  }

  private getTitle(type: string): string {
    return this.teas.find(tea => tea.type === type).title;
  }

  private formatData(data: WikipediaExtract, type: string): Tea {
    const pages = data.query.pages;
    const pageKeys = Object.keys(pages);

    const page = pages[pageKeys[0]];

    const { title, extract, thumbnail: { source: thumbnail }, fullurl } = page;

    const tea: Tea = { type, title, extract, thumbnail, fullurl };

    return tea;
  }
}
