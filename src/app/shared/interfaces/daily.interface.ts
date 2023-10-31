import { CardConfig } from './card.interface';
import { Task } from './task.interface';

export interface Daily extends CardConfig {
  tasks?: Task[];
}
