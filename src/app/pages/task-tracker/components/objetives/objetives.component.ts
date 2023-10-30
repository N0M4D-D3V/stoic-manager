import { Component } from '@angular/core';
import { CardConfig } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-objetives',
  templateUrl: './objetives.component.html',
  styleUrls: ['./objetives.component.scss'],
})
export class ObjetivesComponent {
  public objetives: CardConfig[] = [
    {
      bootstrap: 'my-2 border-primary',
      title: 'Objetivo 12 semanas',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      bootstrap: 'my-2 border-secondary',
      title: 'Objetivo de esta semana',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      bootstrap: 'my-2 border-success',
      title: 'Objetivo del día',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
  ];
}
