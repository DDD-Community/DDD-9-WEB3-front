import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import useMediaQuery from '@mui/material/useMediaQuery';
import palette from '@styles/palette';
import type { PropsWithChildren } from 'react';
import { styled } from 'styled-components';
import CloseIconSVG from '@assets/svg/close.svg';

const CUSTOM_STYLE = {
  margin: '0 auto',
  maxHeight: 'calc(100vh - 163px)',
  paddingTop: '1.8rem',
  borderTopLeftRadius: '1rem',
  borderTopRightRadius: '1rem',
  overflow: 'hidden',
};

const MOBILE_CUSTOM_STYLE = {
  '.MuiPaper-root': {
    ...CUSTOM_STYLE,
    width: '100%',
  },
};

const DESKTOP_CUSTOM_STYLE = {
  '.MuiPaper-root': {
    ...CUSTOM_STYLE,
    maxWidth: '23.4rem',
  },
};

interface BottomSheetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  title?: string;
}

const BottomSheet = ({
  children,
  isOpen,
  onOpen,
  onClose,
  title,
}: PropsWithChildren<BottomSheetProps>) => {
  const isMobile = useMediaQuery('(max-width:576px)');

  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      sx={isMobile ? MOBILE_CUSTOM_STYLE : DESKTOP_CUSTOM_STYLE}
    >
      <HandleBar />
      {title && (
        <Header>
          <Title>{title}</Title>

          <CloseButton onClick={onClose}>
            <CloseIcon />
          </CloseButton>
        </Header>
      )}
      <BottomSheetBody>{children}</BottomSheetBody>
    </SwipeableDrawer>
  );
};

export default BottomSheet;

const HandleBar = styled(Box)`
  position: absolute;
  top: 0.75rem;
  left: 50%;
  width: 5rem;
  height: 0.3rem;
  transform: translateX(-50%);
  border-radius: 0.18rem;
  background-color: ${palette.grey_60};
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-bottom: 32px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

const CloseButton = styled.button`
  position: absolute;
  right: 20px;
`;

const CloseIcon = styled(CloseIconSVG)`
  path {
    fill: ${palette.black};
  }
`;

const BottomSheetBody = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
`;
