import { Injectable } from '@angular/core';

import { Brew } from './brew';

const brews: Brew[] = [
  { type: 'green', cols: 3, rows: 1, color: '#43a047', brewTime: 180 },
  { type: 'white', cols: 1, rows: 2, color: '#ffeb3b', brewTime: 180 },
  { type: 'herbal', cols: 1, rows: 1, color: '#cddc39', brewTime: 180 },
  { type: 'black', cols: 2, rows: 1, color: '#795548', brewTime: 180 },
  { type: 'oolong', cols: 2, rows: 1, color: '#e65100', brewTime: 180 },
  { type: 'pu-erh', cols: 2, rows: 1, color: '#DDBDF1', brewTime: 180 }
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
