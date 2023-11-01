import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardConfig, CardType } from 'src/app/shared/interfaces/card.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent implements OnInit, OnDestroy {
  private subDailies!: Subscription;

  public dailies: CardConfig[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.subDailies = this.tasksService.$dailies.subscribe(
      (res: CardConfig[]) => (this.dailies = res)
    );
  }

  public onUpdateList(res: CardConfig[]): void {
    if (res.length === 0) {
      this.tasksService.updateDailies([
        {
          id: 0,
          type: CardType.Daily,
          title: '',
          description: '',
          editable: true,
        },
      ]);
    } else this.tasksService.updateDailies(res);
  }

  ngOnDestroy(): void {
    this.subDailies.unsubscribe();
  }
}
