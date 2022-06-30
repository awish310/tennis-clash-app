import { Box } from 'grommet';
import React, { useMemo } from 'react';
import AgilityAsset from '../../../assets/agility.png';
import BackhandAsset from '../../../assets/backhand.png';
import ForehandAsset from '../../../assets/forehand.png';
import ServeAsset from '../../../assets/serve.png';
import StaminaAsset from '../../../assets/stamina.png';
import VolleyAsset from '../../../assets/volley.png';
import ProgressBar from '../../ProgressBar/ProgressBar';
import {
  AbilityImage,
  TextsWrapper,
  ValueText,
  ValueWrapper,
  Wrapper,
} from './AbilityItem.styled';

interface AbilityItemProps {
  name: string;
  value: any;
}
const AbilityItem = ({ name, value }: AbilityItemProps) => {
  const abilityImageSrc = useMemo(() => {
    switch (name) {
      case 'agility':
        return AgilityAsset;
      case 'stamina':
        return StaminaAsset;
      case 'serve':
        return ServeAsset;
      case 'volley':
        return VolleyAsset;
      case 'forehand':
        return ForehandAsset;
      case 'backhand':
        return BackhandAsset;

      default:
        return BackhandAsset;
    }
  }, [name]);

  const progress = useMemo(() => (value / 50) * 100, [value]);

  return (
    <Wrapper>
      <Box>
        <AbilityImage src={abilityImageSrc} />
      </Box>
      <ValueWrapper>
        <TextsWrapper>
          <ValueText>{name.toUpperCase()}</ValueText>
          <ValueText>{value}</ValueText>
        </TextsWrapper>
        <ProgressBar progress={progress} />
      </ValueWrapper>
    </Wrapper>
  );
};

export default AbilityItem;
