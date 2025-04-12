import { Component, input } from '@angular/core';
import { GifsListItemsComponent } from './gifs-list-items/gifs-list-items.component';
import { imageUrls } from 'src/app/gifs/pages/trending-page/trending-page.component';

@Component({
  selector: 'gifs-list',
  imports: [GifsListItemsComponent],
  templateUrl: './gifs-list.component.html',
})
export class GifsListComponent {
  gifs = input.required<string[]>();
}
