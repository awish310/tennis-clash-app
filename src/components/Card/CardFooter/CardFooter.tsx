import React, { useEffect, useRef } from 'react';
import { Input, InputWrapper, Level, Wrapper } from './CardFooter.styled';

interface CardFooterProps {
  selectedLevel: string | undefined;
  setSelectedLevel: React.Dispatch<React.SetStateAction<string>>;
  editable: boolean;
  cardLevels: Array<string>;
  isCharacter: boolean;
  isHover: boolean;
}
const CardFooter = ({
  editable,
  selectedLevel,
  setSelectedLevel,
  cardLevels,
  isCharacter,
  isHover,
}: CardFooterProps) => {
  const inputRef = useRef<any>();
  useEffect(() => {
    if (!!isHover && !!editable && inputRef?.current) {
      inputRef?.current.focus();
    }
  }, [isHover, editable]);

  return (
    <Wrapper editable={editable}>
      {!editable ? (
        <Level editable={editable} isCharacter={isCharacter}>
          {selectedLevel}
        </Level>
      ) : (
        <InputWrapper>
          <Input
            ref={inputRef}
            isCharacter={isCharacter}
            placeholder="type here"
            value={selectedLevel}
            type="number"
            min={cardLevels[0]}
            max={cardLevels[cardLevels.length - 1]}
            onChange={(event) => setSelectedLevel(event.target.value)}
          />
        </InputWrapper>
      )}
    </Wrapper>
  );
};

export default CardFooter;
