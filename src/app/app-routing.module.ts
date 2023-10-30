import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskTrackerPage } from './pages/task-tracker/task-tracker.page';
import { SchedulePage } from './pages/schedule/schedule.page';

const routes: Routes = [
  {
    path: 'task-tracker',
    component: TaskTrackerPage,
  },
  {
    path: 'schedule',
    component: SchedulePage,
  },
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
