import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Task, TaskStatus, TaskType } from '../interfaces/task.interface';
import { Card } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private dailiesBS: Subject<Card[]> = new Subject<Card[]>();
  private objetivesBS: BehaviorSubject<Card[]> = new BehaviorSubject<Card[]>([
    {
      task: {
        id: 0,
        type: TaskType.Objetive,
        status: TaskStatus.Uncompleted,
        createdAt: new Date(),
        scheduleAt: new Date(),
        title: 'Objetivo 12 semanas',
        description: 'Tu objetivo a 12 semanas',
      },
    },
    {
      task: {
        id: 1,
        type: TaskType.Objetive,
        status: TaskStatus.Uncompleted,
        createdAt: new Date(),
        scheduleAt: new Date(),
        title: 'Objetivo semanal',
        description: 'Tu objetivo de esta semana',
      },
    },
    {
      task: {
        id: 2,
        type: TaskType.Objetive,
        status: TaskStatus.Uncompleted,
        createdAt: new Date(),
        scheduleAt: new Date(),
        title: 'Objetivo del día',
        description: 'Tu objetivo de hoy',
      },
    },
  ]);

  public $dailies: Observable<Card[]> = this.dailiesBS.asObservable();
  public $objetives: Observable<Card[]> = this.objetivesBS.asObservable();

  constructor() {}

  public updateDailies(dailies: Card[]): void {
    this.dailiesBS.next(dailies);
  }

  public updateObjetives(objetives: Card[]): void {
    this.objetivesBS.next(objetives);
  }
}
