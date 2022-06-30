import { Add } from 'grommet-icons';
import React, { useMemo, useState } from 'react';
import { AddCardModal } from '../../components/AddCardModal';
import Card from '../../components/Card/Card';
import DeleteCardModal from '../../components/DeleteCardModal';
import { getOptionalCards, getSelectedCardsByType } from '../../services/api';
import { CardType } from '../../types';
import { capitalize } from '../../utils';
import {
  AddButtonWrapper,
  CardsWrapper,
  Header,
  Title,
  Wrapper,
} from './CardsPage.styled';

interface CardsPageProps {
  type: CardType;
}

const CardsPage = ({ type }: CardsPageProps) => {
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [cardToDelete, setCardToDelete] = useState(undefined);
  const selectedCards = getSelectedCardsByType(type);
  const optionalCards = getOptionalCards(type);
  const cardsCounter = useMemo(
    () =>
      `${selectedCards?.length}/${
        selectedCards?.length + optionalCards?.length
      }`,
    [optionalCards, selectedCards]
  );

  const renderCards = () => {
    const cards = selectedCards.map((card: any) => {
      return (
        <Card
          key={`card-item-${card.name}`}
          name={card.name}
          type={type}
          level={card.level}
          onDelete={() => {
            setOpenDeleteModal(true);
            setCardToDelete(card.name);
          }}
        />
      );
    });

    if (!!optionalCards.length) {
      cards.push(
        <AddButtonWrapper
          key="card-item-add"
          onClick={() => setOpenAddModal(true)}
        >
          <Add />
        </AddButtonWrapper>
      );
    }
    return cards;
  };

  return (
    <Wrapper>
      <Header>
        <Title isTypeName>{capitalize(type)}</Title>
        <Title>{cardsCounter}</Title>
      </Header>
      <CardsWrapper>{renderCards()}</CardsWrapper>
      <AddCardModal
        open={openAddModal}
        setOpen={setOpenAddModal}
        optionalCards={optionalCards}
        type={type}
      />
      <DeleteCardModal
        open={openDeleteModal}
        setOpen={setOpenDeleteModal}
        type={type}
        name={cardToDelete}
      />
    </Wrapper>
  );
};

export default CardsPage;
