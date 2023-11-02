import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import {
  Task,
  TaskStatus,
  TaskType,
} from 'src/app/shared/interfaces/task.interface';

@Component({
  selector: 'app-post-day-form',
  templateUrl: './post-day-form.component.html',
})
export class PostDayFormComponent implements OnInit {
  @Input() tasks: Task[] = [
    {
      id: 0,
      type: TaskType.Objetive,
      status: TaskStatus.Uncompleted,
      createdAt: new Date(),
      scheduleAt: new Date(),
      title: 'Objetivo 12 semanas',
      description: 'Tu objetivo a 12 semanas',
    },
    {
      id: 1,
      type: TaskType.Objetive,
      status: TaskStatus.Uncompleted,
      createdAt: new Date(),
      scheduleAt: new Date(),
      title: 'Objetivo semanal',
      description: 'Tu objetivo de esta semana',
    },
    {
      id: 2,
      type: TaskType.Objetive,
      status: TaskStatus.Uncompleted,
      createdAt: new Date(),
      scheduleAt: new Date(),
      title: 'Objetivo del día',
      description: 'Tu objetivo de hoy',
    },
  ];

  public postform!: FormGroup;
  public completed: Task[] = [];

  public get uncompleted() {
    return this.postform.get('uncompleted') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    const currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.completed = this.tasks.filter(
      (task: Task) => task.status === TaskStatus.Completed
    );
    const uncompletedTaskList = this.tasks.filter(
      (task: Task) => task.status === TaskStatus.Uncompleted
    );

    this.postform = this.fb.group({
      welldone: [],
      wrongdone: [],
      uncompleted: this.fb.array([]),
    });

    uncompletedTaskList.forEach((task: Task) =>
      this.uncompleted.push(
        this.fb.group({
          title: this.fb.control(task.title),
          schedule: this.fb.control(currentDate),
          reason: this.fb.control(''),
        })
      )
    );

    console.log(this.uncompleted.value);
  }
}
