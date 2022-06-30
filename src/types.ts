export type valueof<T> = T[keyof T];

export enum CardType {
  CHARACTERS = 'characters',
  RACKETS = 'rackets',
  GRIPS = 'grips',
  SHOES = 'shoes',
  WRISTBANDS = 'wristbands',
  NUTRITIONS = 'nutritions',
  WORKOUTS = 'workouts',
}

export enum AbilityType {
  AGILITY = 'agility',
  STAMINA = 'stamina',
  SERVE = 'serve',
  VOLLEY = 'volley',
  FOREHAND = 'forehand',
  backhand = 'backhand',
}

export interface CardData {
  name: string;
  imageSrc: string;
  values: any;
  abilities?: { [key: string]: number };
  rarity?: string;
}

export interface CardItem {
  name: string;
  level: string;
}

export interface NavbarLink {
  path: string;
  label: string;
}
