import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTrackerPage } from './pages/task-tracker/task-tracker.page';
import { SchedulePage } from './pages/schedule/schedule.page';
import { DailyPlanComponent } from './pages/schedule/modules/daily/daily-plan.component';
import { OneWeekPlanComponent } from './pages/schedule/modules/one-week/one-week-plan.component';
import { TwelveWeeksPlanComponent } from './pages/schedule/modules/twelve-weeks/twelve-weeks-plan.component';

const routes: Routes = [
  {
    path: 'task-tracker',
    component: TaskTrackerPage,
  },
  {
    path: 'schedule',
    component: SchedulePage,
  },
  { path: 'schedule/daily-plan', component: DailyPlanComponent },
  { path: 'schedule/one-week-plan', component: OneWeekPlanComponent },
  { path: 'schedule/twelve-weeks-plan', component: TwelveWeeksPlanComponent },
  {
    path: '',
    redirectTo: '/task-tracker',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: '/task-tracker',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
