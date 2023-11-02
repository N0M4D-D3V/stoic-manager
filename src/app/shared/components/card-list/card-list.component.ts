import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../interfaces/card.interface';
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
})
export class CardListComponent {
  @Input() configList!: Card[];

  @Output() updateList: EventEmitter<Card[]> = new EventEmitter<Card[]>();

  public onDialogClosed(res: Task): void {
    const index: number = this.configList.findIndex(
      (item: Card) => item.task.id === res.id
    );

    if (index !== -1) {
      this.configList[index].task = res;
      this.updateList.emit(this.configList);
    }
  }
}
