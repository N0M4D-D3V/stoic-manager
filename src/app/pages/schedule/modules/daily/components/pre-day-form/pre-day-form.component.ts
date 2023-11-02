import { formatDate } from '@angular/common';
import { Component, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pre-day-form',
  templateUrl: './pre-day-form.component.html',
})
export class PreDayFormComponent implements OnInit {
  public preform!: FormGroup;

  public get tasks(): FormArray {
    return this.preform.get('tasks') as FormArray;
  }

  public get obstacles(): FormArray {
    return this.preform.get('obstacles') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.preform = this.fb.group({
      tasks: this.fb.array([]),
      obstacles: this.fb.array([]),
    });
  }

  public addTask(): void {
    const currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.tasks.push(
      this.fb.group({
        title: this.fb.control(''),
        description: this.fb.control(''),
        createdAt: this.fb.control(currentDate),
        scheduleAt: this.fb.control(currentDate),
      })
    );
  }

  public addObstacle(): void {
    const currentDate: string = formatDate(new Date(), 'yyyy-MM-dd', 'en');

    this.obstacles.push(
      this.fb.group({
        title: this.fb.control(''),
        description: this.fb.control(''),
        createdAt: this.fb.control(currentDate),
        scheduleAt: this.fb.control(currentDate),
      })
    );
  }

  public deleteTask(index: number): void {
    this.tasks.removeAt(index);
  }

  public deleteObstacle(index: number): void {
    this.obstacles.removeAt(index);
  }

  public onCompleted(): void {
    console.log(this.preform.value);
  }
}
