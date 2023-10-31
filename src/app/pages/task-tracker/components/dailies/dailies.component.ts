import { Component, OnInit } from '@angular/core';
import { CardConfig } from 'src/app/shared/interfaces/card.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent implements OnInit {
  public dailies: CardConfig[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.dailies = this.tasksService.getDailies();
  }
}
