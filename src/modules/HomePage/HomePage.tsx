import { Box, Heading, Text } from 'grommet';
import React, { useEffect, useState } from 'react';
import AbilitiesList from '../../components/AbilitiesList/AbilitiesList';
import Card from '../../components/Card/Card';
import PropertySelection, {
  PropertyType,
} from '../../components/PropertySelection/PropertySelection';
import {
  getSelectedCalcProps,
  getSelectedCards,
  getSelectedCardsByType,
  setSelectedCalcProps,
} from '../../services/api';
import ConfigurationsService from '../../services/configurations.service';
import {
  AbilitiesListWrapper,
  Header,
  Main,
  ResultHeader,
  ResultsWrapper,
  ResultWrapper,
  SelectedResultCardsWrapper,
  SubmitButton,
  Wrapper,
} from './HomePage.styled';

const HomePage = () => {
  const selectedCards = getSelectedCards();
  const configurationsService = new ConfigurationsService(selectedCards);
  const [properties, setProperties] = useState({
    [PropertyType.COUNT]: 7,
    [PropertyType.CHARACTERS]: undefined,
    [PropertyType.ABILITIES]: undefined,
  });
  const [results, setResults] = useState([]);
  const [selectedResultIdx, setSelectedResultIdx] = useState<number>(0);

  useEffect(() => {
    const prevSelectedProps: any = getSelectedCalcProps();
    setProperties(prevSelectedProps);
  }, []);

  const onCheck = () => {
    const results = configurationsService.getBestConfigurations(properties);
    setResults(results);
    setSelectedResultIdx(0);
  };

  const onSave = (value: any, type: PropertyType) => {
    const updatedProps = { ...properties, [type]: value };
    setProperties(updatedProps);
    setSelectedCalcProps(updatedProps);
  };

  const isSelectedCardsValid = () => {
    let valid = true;
    if (
      Object.entries(selectedCards).length === 0 ||
      Object.entries(selectedCards).length !== 7
    ) {
      return false;
    }

    Object.values(selectedCards)?.forEach((cardTypeArr: any) => {
      if (!cardTypeArr.length) {
        valid = false;
        return;
      }
    });
    return valid;
  };

  const renderPropertySelections = () =>
    [PropertyType.COUNT, PropertyType.CHARACTERS, PropertyType.ABILITIES].map(
      (type: PropertyType) => (
        <PropertySelection
          key={`property-selection-item-${type}`}
          type={type}
          value={properties[type]}
          onSave={(value) => {
            onSave(value, type);
          }}
        />
      )
    );

  const renderResults = () => {
    return results?.length ? (
      results.map(({ abilities: { sum, ...rest } }: any, index: number) => (
        <ResultWrapper
          selected={selectedResultIdx === index}
          onClick={() => setSelectedResultIdx(index)}
        >
          <ResultHeader>
            <Text size="small">TOTAL POWER</Text>
            <Text size="small">{sum}</Text>
          </ResultHeader>
          <AbilitiesListWrapper>
            <AbilitiesList abilities={rest} />
          </AbilitiesListWrapper>
        </ResultWrapper>
      ))
    ) : (
      <Box margin="0 auto" align="center">
        <Heading level="2">Hey Jihrums!</Heading>
        <Heading level="4" textAlign="center">
          Please fill all your cards with levels, and let's go!
        </Heading>
      </Box>
    );
  };

  const renderSelectedResultCards = () => {
    const selectedResult = results[selectedResultIdx] as any;
    if (selectedResult || selectedResult !== undefined) {
      return Object.keys(selectedResult.cards).map((type: any, idx) => {
        const selectedCardsByType = getSelectedCardsByType(type);
        const cardName = Object.values(selectedResult.cards)[idx];
        const CardData = selectedCardsByType.find(
          (selectedCard) => selectedCard?.name === cardName
        );
        return (
          <Card
            key={`selected-result-card-item-${CardData?.name}`}
            type={type}
            name={CardData?.name || ''}
            level={CardData?.level}
            editable={false}
          />
        );
      });
    }
    return <></>;
  };

  console.log(isSelectedCardsValid());

  return (
    <Wrapper>
      <Header>
        {renderPropertySelections()}
        <SubmitButton
          label="CHECK"
          primary
          onClick={onCheck}
          disabled={!isSelectedCardsValid()}
        />
      </Header>
      <Main>
        <ResultsWrapper>{renderResults()}</ResultsWrapper>
        <SelectedResultCardsWrapper>
          {renderSelectedResultCards()}
        </SelectedResultCardsWrapper>
      </Main>
    </Wrapper>
  );
};

export default HomePage;
