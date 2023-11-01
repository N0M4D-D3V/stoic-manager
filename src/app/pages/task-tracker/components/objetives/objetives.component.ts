import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardConfig, CardType } from 'src/app/shared/interfaces/card.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.scss'],
})
export class ObjetivesComponent implements OnInit, OnDestroy {
  private subObjetives!: Subscription;

  public objetives: CardConfig[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.subObjetives = this.tasksService.$objetives.subscribe(
      (res: CardConfig[]) => (this.objetives = res)
    );
  }

  public onUpdateList(res: CardConfig[]): void {
    if (res.length === 0) {
      this.tasksService.updateDailies([
        {
          id: 0,
          type: CardType.Objetive,
          title: '',
          description: '',
        },
      ]);
    } else this.tasksService.updateDailies(res);
  }

  ngOnDestroy(): void {
    this.subObjetives.unsubscribe();
  }
}
