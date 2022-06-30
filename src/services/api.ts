import { CardData, CardItem, CardType } from '../types';
import { charactersArray } from '../mocks/characters';
import { gripsArray } from '../mocks/grips';
import { nutritionsArray } from '../mocks/nutritions';
import { racketsArray } from '../mocks/rackets';
import { shoesArray } from '../mocks/shoes';
import { workoutsArray } from '../mocks/workouts';
import { wristbandsArray } from '../mocks/wristbands';
import { PropertyType } from '../components/PropertySelection/PropertySelection';

export const getCardsByType = (type: CardType): Array<CardData> => {
  switch (type) {
    case CardType.CHARACTERS:
      return charactersArray;

    case CardType.GRIPS:
      return gripsArray;

    case CardType.NUTRITIONS:
      return nutritionsArray;

    case CardType.RACKETS:
      return racketsArray;

    case CardType.SHOES:
      return shoesArray;

    case CardType.WORKOUTS:
      return workoutsArray;

    case CardType.WRISTBANDS:
      return wristbandsArray;

    default:
      return [];
  }
};

export const getCard = (
  cardName: string,
  type?: CardType
): CardData | undefined => {
  if (!type) {
    return;
  }
  const cards = getCardsByType(type);
  return cards.find((card) => card.name === cardName);
};
const storageKey = 'selectedCards';

export const getSelectedCards = () => {
  let localStorageValue = localStorage.getItem(storageKey);
  let selectedCards: { [key in CardType]: Array<any> } | any = {};
  if (typeof localStorageValue === 'string') {
    selectedCards = JSON.parse(localStorageValue);
  }
  return selectedCards;
};

export const getSelectedCardsByType = (type: CardType): Array<CardItem> => {
  const allSelectedCards = getSelectedCards();
  return allSelectedCards[type] || [];
};

const getAbilitiesByLevel = (
  cardName: string,
  type: CardType,
  level: string
) => {
  const card = getCard(cardName, type);
  return card?.values[level];
};

export const addCard = (type: CardType, { name, level }: CardItem) => {
  const allSelectedCards = getSelectedCards();
  const selectedCardsByType = allSelectedCards[type] || [];
  const abilities = getAbilitiesByLevel(name, type, level);
  const updatedSelectedCardsByType = {
    ...allSelectedCards,
    [type]: [...selectedCardsByType, { name, level, abilities }],
  };
  localStorage.setItem(storageKey, JSON.stringify(updatedSelectedCardsByType));
};

export const editCard = (type: CardType, { name, level }: CardItem) => {
  const allSelectedCards = getSelectedCards();
  const selectedCardsByType = allSelectedCards[type];
  if (!selectedCardsByType) {
    return;
  }
  const selectedCardIndex = [...selectedCardsByType].findIndex(
    (selectedCard) => selectedCard.name === name
  );

  const abilities = getAbilitiesByLevel(name, type, level);

  selectedCardsByType[selectedCardIndex] = { name, level, abilities };
  const updatedData = { ...allSelectedCards, [type]: [...selectedCardsByType] };
  localStorage.setItem(storageKey, JSON.stringify(updatedData));
};

export const removeCard = (type: CardType, cardName: string) => {
  const allSelectedCards = getSelectedCards();
  const selectedCardsByType = allSelectedCards[type];
  const updatedSelectedCards = [...selectedCardsByType].filter(
    (_card) => _card.name !== cardName
  );
  const updatedData = {
    ...allSelectedCards,
    [type]: [...updatedSelectedCards],
  };
  localStorage.setItem(storageKey, JSON.stringify(updatedData));
};

export const getOptionalCards = (type: CardType) => {
  const selectedCardsByType = getSelectedCardsByType(type) || [];
  const allCardsByType = getCardsByType(type);
  const selectedCardsNames = selectedCardsByType.map(
    (card: CardItem) => card.name
  );

  return allCardsByType.filter(
    (card) => !selectedCardsNames.includes(card.name)
  );
};

export const setSelectedCalcProps = (props: any) => {
  localStorage.setItem('selectedProps', JSON.stringify(props));
};

export const getSelectedCalcProps = () => {
  let localStorageValue = localStorage.getItem('selectedProps');
  let selectedProps = {
    [PropertyType.CHARACTERS]: [],
    [PropertyType.ABILITIES]: [],
    [PropertyType.COUNT]: 5,
  };
  if (typeof localStorageValue === 'string') {
    selectedProps = JSON.parse(localStorageValue);
  }

  const selectedCharactersNames = getSelectedCardsByType(
    CardType.CHARACTERS
  ).map((selectedCharacter) => selectedCharacter.name);
  const filteredCharactersProp = selectedProps?.characters.filter(
    (characterName: string) => selectedCharactersNames.includes(characterName)
  );
  return {
    ...selectedProps,
    [PropertyType.CHARACTERS]: filteredCharactersProp,
  };
};
