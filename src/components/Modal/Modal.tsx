import { Button, Layer } from 'grommet';
import { Close } from 'grommet-icons';
import React from 'react';
import {
  ChildrenWrapper,
  CloseButtonWrapper,
  ContentCard,
  Header,
  Title,
  Wrapper,
} from './Modal.styled';

interface ModalProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  size?: 'small' | 'medium';
  children: any;
}

const Modal = ({
  open,
  setOpen,
  title,
  size = 'medium',
  children,
}: ModalProps) => {
  const onClose = () => setOpen(false);
  return (
    <Wrapper>
      {open && (
        <Layer position="center" modal onClickOutside={onClose} onEsc={onClose}>
          <ContentCard size={size}>
            <Header>
              <Title>{title}</Title>
              <CloseButtonWrapper>
                <Button icon={<Close color="#359af4" />} onClick={onClose} />
              </CloseButtonWrapper>
            </Header>
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </ContentCard>
        </Layer>
      )}
    </Wrapper>
  );
};

export default Modal;
