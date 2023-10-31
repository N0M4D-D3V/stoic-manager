import { Component, Input, OnDestroy } from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';
import { Dialog } from '@angular/cdk/dialog';
import { CardEditComponent } from './card-edit/card-edit.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnDestroy {
  private subDialogClosed!: Subscription;

  @Input() config!: CardConfig;

  constructor(public dialog: Dialog) {}

  public onEditCard(): void {
    const dialogRef = this.dialog.open<CardConfig>(CardEditComponent, {
      width: '90%',
      data: this.config,
    });

    this.subDialogClosed = dialogRef.closed.subscribe((response) => {
      if (response) this.config = response;
    });
  }

  ngOnDestroy(): void {
    this.subDialogClosed?.unsubscribe();
  }
}
