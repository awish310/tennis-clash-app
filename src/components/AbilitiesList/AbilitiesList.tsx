import { Box } from 'grommet';
import React from 'react';
import { Wrapper } from './AbilitiesList.styled';
import AbilityItem from './AbilityItem/AbilityItem';

interface AbilitiesListProps {
  abilities?: any;
}
const AbilitiesList = ({ abilities }: AbilitiesListProps) => {
  if (!abilities) {
    return <Box></Box>;
  }
  const renderAbilities = () =>
    Object.entries(abilities).map(([name, value]) => (
      <AbilityItem
        key={`ability-item-${name}-${value}`}
        name={name}
        value={value}
      />
    ));

  return <Wrapper>{renderAbilities()}</Wrapper>;
};

export default AbilitiesList;
