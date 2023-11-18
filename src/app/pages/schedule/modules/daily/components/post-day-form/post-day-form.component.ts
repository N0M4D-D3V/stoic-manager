import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { getTomorrowDate } from 'src/app/shared/functions/time.functions';
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
    this.completed = this.tasks.filter(
      (task: Task) => task.status === TaskStatus.Completed
    );
    const uncompletedTaskList = this.tasks.filter(
      (task: Task) => task.status === TaskStatus.Uncompleted
    );

    this.postform = this.fb.group({
      welldone: ['', Validators.required],
      wrongdone: ['', Validators.required],
      uncompleted: this.fb.array([]),
    });

    uncompletedTaskList.forEach((task: Task) =>
      this.uncompleted.push(
        this.fb.group({
          title: [{ value: task.title, disabled: true }],
          schedule: [getTomorrowDate(), Validators.required],
          reason: [''],
        })
      )
    );
  }

  public onComplete(): void {
    console.log('onComplete', this.postform.value);
  }
}
