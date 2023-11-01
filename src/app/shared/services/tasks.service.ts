import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CardConfig, CardType } from '../interfaces/card.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private dailiesBS: BehaviorSubject<CardConfig[]> = new BehaviorSubject<
    CardConfig[]
  >([]);
  private objetivesBS: BehaviorSubject<CardConfig[]> = new BehaviorSubject<
    CardConfig[]
  >([
    {
      id: 0,
      type: CardType.Objetive,
      title: 'Objetivo 12 semanas',
      description: 'Tu objetivo a 12 semanas',
      bootstrap: 'text-bg-primary',
    },
    {
      id: 1,
      type: CardType.Objetive,
      title: 'Objetivo semanal',
      description: 'Tu objetivo de esta semana',
      bootstrap: 'text-bg-secondary',
    },
    {
      id: 2,
      type: CardType.Objetive,
      title: 'Objetivo del día',
      description: 'Tu objetivo de hoy',
      bootstrap: 'text-bg-success',
    },
  ]);

  public $dailies: Observable<CardConfig[]> = this.dailiesBS.asObservable();
  public $objetives: Observable<CardConfig[]> = this.objetivesBS.asObservable();

  constructor() {}

  public updateDailies(dailies: CardConfig[]): void {
    this.dailiesBS.next(dailies);
  }

  public updateObjetives(objetives: CardConfig[]): void {
    this.objetivesBS.next(objetives);
  }
}
