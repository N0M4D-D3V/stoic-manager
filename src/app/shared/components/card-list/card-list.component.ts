import { Component, Input } from '@angular/core';
import { CardConfig } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() configList!: CardConfig[];
}
