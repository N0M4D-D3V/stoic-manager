import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() configList!: CardConfig[];

  @Output() updateList: EventEmitter<CardConfig[]> = new EventEmitter<
    CardConfig[]
  >();

  public onDialogClosed(res: CardConfig): void {
    const index: number = this.configList.findIndex(
      (item: CardConfig) => item.id === res.id
    );

    if (index !== -1) {
      this.configList[index] = res;
      this.updateList.emit(this.configList);
    }
  }

  public onAdd(): void {
    this.updateList.emit([]);
  }
}
