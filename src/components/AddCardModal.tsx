import React from 'react';
import { addCard } from '../services/api';
import { CardData, CardType } from '../types';
import Card from './Card/Card';
import Modal from './Modal/Modal';

interface AddCardModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  optionalCards: Array<CardData>;
  type: CardType;
}

export const AddCardModal = ({
  open,
  setOpen,
  optionalCards,
  type,
}: AddCardModalProps) => {
  const onClose = () => setOpen(false);

  const renderCards = () => {
    return optionalCards?.map(({ name }) => (
      <Card
        key={`add-card-modal-item-${name}`}
        name={name}
        type={type}
        editable={false}
        onClick={(card) => {
          addCard(type, card);
          onClose();
        }}
      />
    ));
  };

  return (
    <Modal open={open} setOpen={setOpen} title="Add Card">
      {renderCards()}
    </Modal>
  );
};
