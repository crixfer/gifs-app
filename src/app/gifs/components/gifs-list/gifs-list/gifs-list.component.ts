import { Component } from '@angular/core';
import { GifsListItemsComponent } from './gifs-list-items/gifs-list-items.component';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemsComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {}
