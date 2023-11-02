import { Component } from '@angular/core';
import { Card } from 'src/app/shared/interfaces/card.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage {
  public planningOptions: Card[] = [
    {
      task: {
        title: '12 Weeks Planning',
        description: 'The way of build a 12 week plan',
      },
      config: {
        link: '/schedule/twelve-weeks-plan',
        bootstrap: 'text-bg-primary',
      },
    },
    {
      task: {
        title: '1 Week Planning',
        description:
          'Prepare yourself for the week. Plan it following the correct way.',
      },
      config: {
        link: '/schedule/one-week-plan',
        bootstrap: 'text-bg-secondary',
      },
    },
    {
      task: {
        title: 'Daily Planning',
        description:
          'Start your day by planning your main and secondary tasks.',
      },
      config: { link: '/schedule/daily-plan', bootstrap: 'text-bg-success' },
    },
  ];
}
