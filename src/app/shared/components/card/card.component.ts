import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from '@angular/core';
import { CardConfig } from '../../interfaces/card.interface';
import { Dialog } from '@angular/cdk/dialog';
import { CardEditComponent } from './card-edit/card-edit.component';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnDestroy {
  private subDialogClosed!: Subscription;

  @Input() config!: CardConfig;
  @Output() dialogClosed: EventEmitter<CardConfig> =
    new EventEmitter<CardConfig>();

  constructor(
    private readonly router: Router,
    private readonly dialog: Dialog
  ) {}

  public onEditCard(): void {
    console.log(this.config.link);
    if (this.config.link) this.router.navigate([`${this.config.link}`]);
    if (!this.config.editable) return;

    const dialogRef = this.dialog.open<CardConfig>(CardEditComponent, {
      width: '90%',
      data: this.config,
    });

    this.subDialogClosed = dialogRef.closed.subscribe((res) => {
      if (res)
        this.dialogClosed.emit({
          ...this.config,
          title: res.title,
          description: res.description,
        });
    });
  }
  ngOnDestroy(): void {
    this.subDialogClosed?.unsubscribe();
  }
}
