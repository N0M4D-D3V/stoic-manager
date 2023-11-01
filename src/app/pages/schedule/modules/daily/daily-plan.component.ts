import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-daily-plan',
  templateUrl: './daily-plan.component.html',
})
export class DailyPlanComponent implements OnInit {
  public preform!: FormGroup;

  public postform!: FormGroup;

  public get tasks(): FormArray {
    return this.preform.get('tasks') as FormArray;
  }

  public get obstacles(): FormArray {
    return this.preform.get('obstacles') as FormArray;
  }

  public get completed(): FormArray {
    return this.postform.get('completed') as FormArray;
  }

  public get uncompleted(): FormArray {
    return this.postform.get('uncompleted') as FormArray;
  }

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.preform = this.fb.group({
      tasks: this.fb.array([]),
      obstacles: this.fb.array([]),
    });
    this.postform = this.fb.group({
      welldone: [],
      wrongdone: [],
      completed: this.fb.array([]),
      uncompleted: this.fb.array([]),
    });
  }

  public addTask(): void {
    this.tasks.push(this.fb.control(''));
  }

  public addObstacle(): void {
    this.obstacles.push(this.fb.control(''));
  }

  public onCompleted(): void {
    console.log(this.preform.value);
    console.log(this.postform.value);
  }
}
