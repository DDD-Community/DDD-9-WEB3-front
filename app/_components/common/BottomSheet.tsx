import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import palette from '@styles/palette';
import { PropsWithChildren } from 'react';
import { styled } from 'styled-components';

interface BottomSheetProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const BottomSheet = ({
  children,
  isOpen,
  onOpen,
  onClose,
}: PropsWithChildren<BottomSheetProps>) => {
  return (
    <SwipeableDrawer
      anchor="bottom"
      open={isOpen}
      onOpen={onOpen}
      onClose={onClose}
      sx={{
        '.MuiPaper-root': {
          margin: '0 auto',
          paddingTop: '1.8rem',
          paddingX: '1.25rem',
          maxWidth: '23.4rem',
          borderTopLeftRadius: '1rem',
          borderTopRightRadius: '1rem',
        },
      }}
    >
      <HandleBar />
      {children}
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
