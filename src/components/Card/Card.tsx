import { CardBody } from 'grommet';
import { Close } from 'grommet-icons';
import React, { useEffect, useMemo, useState } from 'react';
import { editCard, getCard } from '../../services/api';
import { CardItem, CardType } from '../../types';
import AbilitiesList from '../AbilitiesList/AbilitiesList';
import {
  AbilitiesListWrapper,
  CardWrapper,
  IconButton,
  Image,
  ImageWrapper,
  Name,
  NameWrapper,
  Thumbnail,
  Wrapper,
} from './Card.styled';
import CardFooter from './CardFooter/CardFooter';
import {
  getCardBgColor,
  getCharacterImageBgColor,
  getTextColor,
} from './utils';

interface CardProps {
  name: string;
  type?: CardType;
  level?: string;
  onClick?: (card: CardItem) => void;
  editable?: boolean;
  onDelete?: () => void;
}

const Card = ({
  name,
  type,
  level,
  onClick,
  onDelete,
  editable = true,
}: CardProps) => {
  const [selectedLevel, setSelectedLevel] = useState(level || '0');
  const [isHover, setIsHover] = useState(false);
  const cardData = getCard(name, type);
  const isCharacter = type === 'characters';
  const levels = useMemo(
    () => cardData?.values && Object.keys(cardData?.values),
    [cardData?.values]
  );

  useEffect(() => {
    if (!level) {
      setSelectedLevel(levels[0]);
    } else {
      setSelectedLevel(level);
    }
  }, [level, levels]);

  useEffect(() => {
    if (type && selectedLevel) {
      editCard(type, { name, level: selectedLevel });
    }
  }, [selectedLevel, type, name]);

  return (
    <Wrapper
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {editable && isHover && (
        <IconButton
          icon={<Close size="small" />}
          onClick={() => {
            onDelete && onDelete();
          }}
        />
      )}
      <CardWrapper
        editable={editable}
        onClick={() =>
          !!onClick && selectedLevel && onClick({ name, level: selectedLevel })
        }
        background={getCardBgColor(cardData?.rarity)}
      >
        <CardBody pad={{ horizontal: 'xsmall', top: 'xsmall' }} align="start">
          <Thumbnail>
            {isHover && cardData && editable && (
              <AbilitiesListWrapper isHover={isHover}>
                <AbilitiesList abilities={cardData?.values[selectedLevel]} />
              </AbilitiesListWrapper>
            )}
            <ImageWrapper background={getCharacterImageBgColor(name)}>
              <Image isCharacter={isCharacter} src={cardData?.imageSrc} />
            </ImageWrapper>
            <NameWrapper>
              <Name editable={editable} color={getTextColor(cardData?.rarity)}>
                {name}
              </Name>
            </NameWrapper>
          </Thumbnail>
        </CardBody>
        <CardFooter
          selectedLevel={selectedLevel}
          setSelectedLevel={setSelectedLevel}
          editable={editable}
          cardLevels={levels}
          isCharacter={isCharacter}
          isHover={isHover}
        />
      </CardWrapper>
    </Wrapper>
  );
};

export default Card;
