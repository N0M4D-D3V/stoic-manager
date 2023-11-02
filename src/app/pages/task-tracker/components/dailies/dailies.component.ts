import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card } from 'src/app/shared/interfaces/card.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent implements OnInit, OnDestroy {
  private subDailies!: Subscription;

  public dailies: Card[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.subDailies = this.tasksService.$dailies.subscribe(
      (res: Card[]) => (this.dailies = res)
    );
  }

  public onUpdateList(res: Card[]): void {
    this.tasksService.updateDailies(res);
  }

  ngOnDestroy(): void {
    this.subDailies.unsubscribe();
  }
}
