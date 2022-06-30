// @ts-nocheck
class ConfigurationsService {
  cardTypes = [
    'characters',
    'rackets',
    'grips',
    'shoes',
    'wristbands',
    'nutritions',
    'workouts',
  ];
  private data = {};

  constructor(selectedData) {
    this.data = this.prepareData(selectedData);
    this.cardTypes = this.prepareCardTypeArr();
  }

  private sortBySum(configurationsByValues) {
    return configurationsByValues.sort((a, b) => b.sum - a.sum);
  }

  private getAbilitiesTotal(obj, abilities) {
    return abilities.reduce((total, abilityName) => {
      return total + obj[abilityName];
    }, 0);
  }

  private cartesian(...a) {
    return a.reduce((a, b) => a.flatMap((d) => b.map((e) => [d, e].flat())));
  }

  private prepareDataByType(selectedCardsByType) {
    return selectedCardsByType.reduce((total, { name, abilities }) => {
      total[name] = abilities;
      return total;
    }, {});
  }

  private prepareCardTypeArr() {
    return this.cardTypes.map((type) => this.data[type]);
  }

  private prepareData(selectedCards) {
    return Object.keys(selectedCards).reduce((total, cardType) => {
      const preparedDataByType = this.prepareDataByType(
        selectedCards[cardType]
      );

      total[cardType] = preparedDataByType;
      return total;
    }, {});
  }

  private generateAllConfigurations(
    charactersArr,
    { characters, rackets, grips, shoes, wristbands, nutritions, workouts }
  ) {
    const charactersNames = charactersArr?.length
      ? charactersArr
      : Object.keys(characters);
    return this.cartesian(
      charactersNames,
      Object.keys(rackets),
      Object.keys(grips),
      Object.keys(shoes),
      Object.keys(wristbands),
      Object.keys(nutritions),
      Object.keys(workouts)
    );
  }

  private getCardAbilities(card) {
    return Object.entries(card).map(([key, value]) => {
      return [key, value];
    });
  }

  private parseConfigurationValues(configuration, index) {
    let totalAbilities = { index, sum: 0 };
    this.cardTypes.forEach((cardType, index) => {
      const card = cardType[configuration[index]];
      const abilities = this.getCardAbilities(card);
      abilities
        .filter(() => !undefined || typeof array)
        .forEach((ability) => {
          if (ability === undefined) {
            return;
          }
          const [key, value] = ability;
          if (!totalAbilities[key]) {
            totalAbilities[key] = 0;
          }
          totalAbilities[key] = totalAbilities[key] + value;
          totalAbilities.sum += value;
        });
    });

    return totalAbilities;
  }

  private getTopConfigurations(
    sortedConfigurations,
    allConfigurationsByName,
    count
  ) {
    const topConfigurationsArr = sortedConfigurations.slice(0, count);

    return topConfigurationsArr.map(({ index, ...rest }) => {
      const [
        characters,
        rackets,
        grips,
        shoes,
        wristbands,
        nutritions,
        workouts,
      ] = allConfigurationsByName[index];

      return {
        cards: {
          characters,
          rackets,
          grips,
          shoes,
          wristbands,
          nutritions,
          workouts,
        },
        abilities: rest,
      };
    });
  }

  getBestConfigurations({ characters, count = 5, abilities }) {
    const allConfigurationsByName = this.generateAllConfigurations(
      characters,
      this.data
    );
    const configurationsByValues = allConfigurationsByName.map(
      (configuration, index) =>
        this.parseConfigurationValues(configuration, index, this.cardTypes)
    );

    let sortedConfigurations = [];

    if (abilities && !!abilities.length) {
      sortedConfigurations = configurationsByValues.sort((a, b) => {
        return (
          this.getAbilitiesTotal(b, abilities) -
          this.getAbilitiesTotal(a, abilities)
        );
      });

      const configurationsByAbility = sortedConfigurations.slice(0, count);
      sortedConfigurations = this.sortBySum(configurationsByAbility);
    } else {
      sortedConfigurations = this.sortBySum(configurationsByValues);
    }

    return this.getTopConfigurations(
      sortedConfigurations,
      allConfigurationsByName,
      count
    );
  }
}

export default ConfigurationsService;
