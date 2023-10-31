import { Injectable } from '@angular/core';
import { Objetive } from '../interfaces/objetive.interface';
import { Daily } from '../interfaces/daily.interface';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  private dailies: Daily[] = [];
  private objetives: Objetive[] = [
    {
      title: 'Objetivo 12 semanas',
      description: 'Tu objetivo a 12 semanas',
    },
    {
      title: 'Objetivo semanal',
      description: 'Tu objetivo de esta semana',
    },
    {
      title: 'Objetivo del día',
      description: 'Tu objetivo de hoy',
    },
  ];

  constructor() {}

  public getObjetives(): Objetive[] {
    return this.objetives;
  }

  public getDailies(): Daily[] {
    return this.dailies;
  }
}
