import { Component } from '@angular/core';

@Component({
  selector: 'app-brew-list',
  templateUrl: './brew-list.component.html',
  styleUrls: ['./brew-list.component.css']
})
export class BrewListComponent {

  tiles: any[] = [
    {text: 'Green', cols: 3, rows: 1, color: '#43a047'},
    {text: 'White', cols: 1, rows: 2, color: '#ffeb3b'},
    {text: 'Herbal', cols: 1, rows: 1, color: '#cddc39'},
    {text: 'Black', cols: 2, rows: 1, color: '#795548'},
    {text: 'Oolong', cols: 2, rows: 1, color: '#e65100'},
    {text: 'Pu-erh',  cols: 2, rows: 1, color: '#DDBDF1'}
  ];
}
