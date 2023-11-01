import { NgModule } from '@angular/core';
import { SchedulePage } from './schedule.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { DailyPlanComponent } from './modules/daily/daily-plan.component';
import { OneWeekPlanComponent } from './modules/one-week/one-week-plan.component';
import { TwelveWeeksPlanComponent } from './modules/twelve-weeks/twelve-weeks-plan.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SchedulePage,
    DailyPlanComponent,
    OneWeekPlanComponent,
    TwelveWeeksPlanComponent,
  ],
  exports: [SchedulePage],
  imports: [CommonModule, ReactiveFormsModule, SharedModule],
  providers: [],
  bootstrap: [],
})
export class ScheduleModule {}
