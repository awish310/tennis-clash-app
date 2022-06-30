import { Box, CheckBoxGroup, Drop, TextInput } from 'grommet';
import { Add, Checkmark } from 'grommet-icons';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { getSelectedCardsByType } from '../../services/api';
import { AbilityType, CardType } from '../../types';
import { capitalize } from '../../utils';
import {
  AddButton,
  InputWrapper,
  Text,
  Title,
  ValueWrapper,
  Wrapper,
} from './PropertySelection.styled';

export enum PropertyType {
  COUNT = 'count',
  CHARACTERS = 'characters',
  ABILITIES = 'abilities',
}
interface PropertySelectionProps {
  type: PropertyType;
  value: any;
  onSave: (value: any) => void;
}

const PropertySelection = ({ type, value, onSave }: PropertySelectionProps) => {
  const [edit, isEdit] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const targetRef = useRef<any>();

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const options = useMemo(() => {
    if (type === PropertyType.CHARACTERS) {
      const characters = getSelectedCardsByType(CardType.CHARACTERS);
      return characters.map(({ name }) => name);
    } else {
      return Object.values(AbilityType).reduce(
        (total: Array<any>, ability: string) => {
          return [...total, { value: ability, label: capitalize(ability) }];
        },
        []
      );
    }
  }, [type]);
  const renderInput = (type: PropertyType) => {
    if (type === PropertyType.COUNT) {
      return (
        <TextInput
          type="number"
          value={inputValue}
          textAlign="center"
          color="#fff"
          onChange={(e) => setInputValue(parseInt(e.target.value))}
        />
      );
    } else {
      return (
        <Drop
          overflow="unset"
          align={{ top: 'bottom', left: 'left' }}
          target={targetRef.current}
        >
          <Box pad="small">
            <CheckBoxGroup
              value={inputValue}
              options={options}
              onChange={(event: any) => setInputValue(event.value)}
            />
          </Box>
        </Drop>
      );
    }
  };

  const renderValue = (type: PropertyType, value: any) => {
    if (!value) {
      return null;
    }
    if (type === PropertyType.COUNT) {
      return <Text>{value}</Text>;
    } else {
      return value.map((v: string, index: number) => (
        <Text key={`value-item-${v}`} multi={value.length > 2}>
          {capitalize(v)}
          {index !== value.length - 1 && ', '}
        </Text>
      ));
    }
  };
  return (
    <Wrapper ref={targetRef} type={type}>
      <Title>{type.toUpperCase()}</Title>
      <InputWrapper disabled={!options.length}>
        <AddButton>
          {!edit ? (
            <Add
              size="medium"
              color="#14d72c"
              onClick={() => {
                !!options.length && isEdit(true);
              }}
            />
          ) : (
            <Checkmark
              size="medium"
              color="#14d72c"
              onClick={() => {
                onSave(inputValue);
                isEdit(false);
              }}
            />
          )}
        </AddButton>
        <ValueWrapper type={type}>
          {!edit ? renderValue(type, value) : renderInput(type)}
        </ValueWrapper>
      </InputWrapper>
    </Wrapper>
  );
};

export default PropertySelection;
