export const getCardBgColor = (rarity?: string) => {
  switch (rarity) {
    case 'COMMON':
      return '#2f87eb';

    case 'EPIC':
      return '#b346cf';

    case 'RARE':
      return '#e36d29';

    default:
      return '#d9e0ef';
  }
};

export const getTextColor = (rarity?: string) => {
  switch (rarity) {
    case 'COMMON':
      return '#215887';

    case 'EPIC':
      return '#672994';

    case 'RARE':
      return '#754a2c';

    default:
      return '#fcfeff';
  }
};

export const getCharacterImageBgColor = (characterName: string) => {
  switch (characterName) {
    case 'Jonah':
      return 'linear-gradient(53deg, rgba(105,43,20,1) 0%, rgba(253,113,29,1) 50%, rgba(252,218,69,1) 86%)';

    case 'Hope':
      return 'linear-gradient(53deg, rgba(43,12,68,1) 0%, rgba(152,84,209,1) 45%, rgba(230,205,240,1) 86%)';

    case 'Florence':
      return 'linear-gradient(53deg, rgba(73,7,34,1) 0%, rgba(187,51,103,1) 45%, rgba(235,238,204,1) 93%)';

    case 'Leo':
      return 'linear-gradient(53deg, rgba(14,42,62,1) 14%, rgba(13,112,82,1) 62%, rgba(202,205,129,1) 96%)';

    case 'Kaito':
      return 'linear-gradient(53deg, rgba(69,13,20,1) 16%, rgba(217,48,48,1) 73%, rgba(218,132,134,1) 96%)';

    case 'Viktoria':
      return 'linear-gradient(53deg, rgba(8,121,201,1) 6%, rgba(29,112,215,1) 46%, rgba(106,255,207,1) 100%)';

    case 'Diana':
      return 'linear-gradient(53deg, rgba(45,5,54,1) 6%, rgba(205,29,215,1) 71%, rgba(181,240,221,1) 100%)';

    case 'Omar':
      return 'linear-gradient(53deg, rgba(38,61,13,1) 6%, rgba(103,175,59,1) 46%, rgba(227,238,183,1) 100%)';

    case 'Luc':
      return 'linear-gradient(53deg, rgba(50,36,10,1) 1%, rgba(227,180,16,1) 46%, rgba(245,227,189,1) 100%)';
    case 'Mei-Li':
      return 'linear-gradient(53deg, rgba(96,13,92,1) 1%, rgba(244,133,203,1) 46%, rgba(245,227,189,1) 100%)';

    default:
      return 'white';
  }
};
