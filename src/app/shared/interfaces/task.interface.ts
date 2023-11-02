export interface Task {
  id?: number;

  type?: TaskType;
  status?: TaskStatus;

  title: string;
  description: string;

  editable?: string;

  createdAt?: Date;
  scheduleAt?: Date;
}

export enum TaskStatus {
  Completed,
  Uncompleted,
}

export enum TaskType {
  Objetive,
  Task,
}
