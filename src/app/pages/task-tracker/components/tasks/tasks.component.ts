import { Component } from '@angular/core';
import { CardConfig } from 'src/app/shared/components/card/card.interface';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  public tasks: CardConfig[] = [
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
