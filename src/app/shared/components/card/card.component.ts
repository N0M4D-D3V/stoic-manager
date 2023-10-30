import { Component, Input } from '@angular/core';
import { CardConfig } from './card.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() config!: CardConfig;
}
