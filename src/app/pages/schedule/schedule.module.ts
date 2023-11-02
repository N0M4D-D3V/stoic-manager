import { NgModule } from '@angular/core';
import { SchedulePage } from './schedule.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { OneWeekPlanComponent } from './modules/one-week/one-week-plan.component';
import { TwelveWeeksPlanComponent } from './modules/twelve-weeks/twelve-weeks-plan.component';
import { CommonModule } from '@angular/common';
import { DailyPlanModule } from './modules/daily/daily-plan.module';

@NgModule({
  declarations: [SchedulePage, OneWeekPlanComponent, TwelveWeeksPlanComponent],
  exports: [SchedulePage],
  imports: [CommonModule, SharedModule, DailyPlanModule],
  providers: [],
  bootstrap: [],
})
export class ScheduleModule {}
