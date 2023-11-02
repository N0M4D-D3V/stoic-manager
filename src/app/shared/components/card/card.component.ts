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
import { Task } from '../../interfaces/task.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnDestroy {
  private subDialogClosed!: Subscription;

  @Input() config: CardConfig | undefined;
  @Input() task!: Task;

  @Output() dialogClosed: EventEmitter<Task> = new EventEmitter<Task>();

  constructor(
    private readonly router: Router,
    private readonly dialog: Dialog
  ) {}

  public onEditCard(): void {
    if (this.config?.link) this.router.navigate([`${this.config.link}`]);
    if (!this.task.editable) return;

    const dialogRef = this.dialog.open<Task>(CardEditComponent, {
      width: '90%',
      data: this.config,
    });

    this.subDialogClosed = dialogRef.closed.subscribe((res) => {
      if (res)
        this.dialogClosed.emit({
          ...this.task,
          title: res.title,
          description: res.description,
        });
    });
  }
  ngOnDestroy(): void {
    this.subDialogClosed?.unsubscribe();
  }
}
