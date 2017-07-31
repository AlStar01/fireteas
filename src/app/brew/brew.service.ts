import { Injectable } from '@angular/core';

import { Brew } from './brew';

const lightText = 'rgba(255, 255, 255, 1)';
const darkText = 'rgba(0, 0, 0, 0.87)';

const brews: Brew[] = [
  { type: 'green', cols: 3, rows: 1, backgroundColor: '#43a047', textColor: lightText, brewTime: 180 },
  { type: 'white', cols: 1, rows: 2, backgroundColor: '#ffeb3b', textColor: darkText, brewTime: 180 },
  { type: 'herbal', cols: 1, rows: 1, backgroundColor: '#cddc39', textColor: darkText, brewTime: 180 },
  { type: 'black', cols: 2, rows: 1, backgroundColor: '#795548', textColor: lightText, brewTime: 180 },
  { type: 'oolong', cols: 2, rows: 1, backgroundColor: '#e65100', textColor: lightText, brewTime: 180 },
  { type: 'pu-erh', cols: 2, rows: 1, backgroundColor: '#DDBDF1', textColor: darkText, brewTime: 180 }
];

@Injectable()
export class BrewService {
  getBrews(): Brew[] {
    return brews;
  }

  getBrewTime(type: string): number {
    const id = type.toLocaleLowerCase();
    const brew = brews.find(t => t.type === id);

    return brew.brewTime;
  }
}
