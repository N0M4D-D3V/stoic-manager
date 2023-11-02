import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { Task } from 'src/app/shared/interfaces/task.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.scss'],
})
export class ObjetivesComponent implements OnInit, OnDestroy {
  private subObjetives!: Subscription;

  public objetives: Card[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.subObjetives = this.tasksService.$objetives.subscribe(
      (res: Card[]) => (this.objetives = res)
    );
  }

  public onUpdateList(res: Card[]): void {
    this.tasksService.updateDailies(res);
  }

  ngOnDestroy(): void {
    this.subObjetives.unsubscribe();
  }
}
