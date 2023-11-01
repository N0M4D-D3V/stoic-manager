import { Component } from '@angular/core';
import { CardConfig, CardType } from 'src/app/shared/interfaces/card.interface';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage {
  public planningOptions: CardConfig[] = [
    {
      id: 0,
      type: CardType.Schedule,
      title: '12 Weeks Planning',
      description: 'The way of build a 12 week plan',
      link: '/schedule/twelve-weeks-plan',
    },
    {
      id: 1,
      type: CardType.Schedule,
      title: '1 Week Planning',
      description:
        'Prepare yourself for the week. Plan it following the correct way.',
      link: '/schedule/one-week-plan',
    },
    {
      id: 2,
      type: CardType.Schedule,
      title: 'Daily Planning',
      description: 'Start your day by planning your main and secondary tasks.',
      link: '/schedule/daily-plan',
    },
  ];
}
