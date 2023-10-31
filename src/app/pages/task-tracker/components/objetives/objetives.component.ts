import { Component, OnInit } from '@angular/core';
import { CardConfig } from 'src/app/shared/interfaces/card.interface';
import { TasksService } from 'src/app/shared/services/tasks.service';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.scss'],
})
export class ObjetivesComponent implements OnInit {
  public objetives: CardConfig[] = [];

  constructor(private readonly tasksService: TasksService) {}

  ngOnInit(): void {
    this.objetives = this.tasksService.getObjetives();
  }
}
