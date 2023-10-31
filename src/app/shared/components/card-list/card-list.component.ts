import { Component, Input } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() configList!: CardConfig[];

  public onAdd(): void {
    this.configList.push({
      title: 'Title',
      description: 'Touch for edit',
    });
  }
}
