import { Task } from './task.interface';

export interface CardConfig {
  link?: string;
  bootstrap?: string;
}

export interface Card {
  task: Task;
  config?: CardConfig;
}
