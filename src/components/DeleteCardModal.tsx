import { Box, Button, Text } from 'grommet';
import React from 'react';
import { removeCard } from '../services/api';
import { CardType } from '../types';
import Modal from './Modal/Modal';

interface DeleteCardModalProps {
  handleDelete?: (type: CardType, name: string) => void;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  name?: string;
  type: CardType;
}
const DeleteCardModal = ({
  open,
  setOpen,
  name,
  type,
}: DeleteCardModalProps) => {
  const onClose = () => setOpen(false);

  return (
    <Modal open={open} setOpen={setOpen} title="Confirm" size="small">
      <Box margin="auto">
        <Text size="large" color="#fff">
          Are you sure you want to delete?
        </Text>
        <Box
          as="footer"
          gap="small"
          direction="row"
          align="center"
          justify="center"
          pad={{ top: 'medium', bottom: 'small' }}
        >
          <Button
            onClick={onClose}
            color="dark-3"
            label={
              <Text color="white">
                <strong>Cancel</strong>
              </Text>
            }
          />
          <Button
            label={
              <Text color="white">
                <strong>Delete</strong>
              </Text>
            }
            onClick={() => {
              if (name) {
                removeCard(type, name);
              }
              onClose();
            }}
            primary
            color="status-critical"
          />
        </Box>
      </Box>
    </Modal>
  );
};

export default DeleteCardModal;
