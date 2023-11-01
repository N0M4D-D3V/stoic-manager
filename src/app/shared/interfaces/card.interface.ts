export interface CardConfig {
  id: number;
  type: CardType;

  title: string;
  description: string;

  link?: string;
  editable?: boolean;
  bootstrap?: string;
}

export enum CardType {
  Objetive,
  Daily,
  Schedule,
}
