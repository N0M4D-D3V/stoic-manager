import { Component } from '@angular/core';
import { CardConfig } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-dailies',
  templateUrl: './dailies.component.html',
  styleUrls: ['./dailies.component.scss'],
})
export class DailiesComponent {
  public dailies: CardConfig[] = [
    {
      title: 'Tocar la guitarra',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Trabajar',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Entrenar',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Dropsher',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Programar',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Estiramientos',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
    {
      title: 'Leer',
      description:
        'Lorem ipsum temper fideles vade retro mortificatum lorem impum temper fidelis.',
    },
  ];
}
