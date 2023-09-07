import { Modal as ModalWrapper } from '@mui/material';
import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

import palette from '@/_styles/palette';

import Button from './Button';

interface ModalProps {
  isOpen: boolean;
  content: string;
  buttonContent: string;
  onClose: () => void;
  onClick: () => void;
}

const Modal = ({
  isOpen,
  content,
  buttonContent,
  onClose,
  onClick,
}: PropsWithChildren<ModalProps>) => {
  return (
    <ModalWrapper open={isOpen} onClose={onClose}>
      <ModalBody>
        <ModalContent>{content}</ModalContent>
        <ButtonGroup>
          <Button size="medium" $backgroundColor={palette.grey_20} onClick={onClose}>
            취소하기
          </Button>
          <Button size="medium" onClick={onClick}>
            {buttonContent}
          </Button>
        </ButtonGroup>
      </ModalBody>
    </ModalWrapper>
  );
};

export default Modal;

const ModalBody = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400;
  background-color: ${palette.white};
  padding: 1rem;
  border-radius: 0.5rem;
`;

const ModalContent = styled.div`
  text-align: center;
  font-weight: 700;
  line-height: 133%;
  letter-spacing: -0.18px;
  padding: 1.25rem 0 1.8rem;
  white-space: pre-line;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;
