import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { DailyPlanComponent } from './daily-plan.component';
import { PreDayFormComponent } from './components/pre-day-form/pre-day-form.component';
import { PostDayFormComponent } from './components/post-day-form/post-day-form.component';

@NgModule({
  declarations: [DailyPlanComponent, PreDayFormComponent, PostDayFormComponent],
  exports: [DailyPlanComponent],
  imports: [CommonModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [],
})
export class DailyPlanModule {}
