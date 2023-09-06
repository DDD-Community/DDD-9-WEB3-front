'use client';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import palette from '@styles/palette';
import { PropsWithChildren, useState } from 'react';
import { styled } from 'styled-components';

import Button from './Button';

const BottomSheet = ({ children }: PropsWithChildren) => {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <Button onClick={() => setIsShow(true)}>Bottom Sheet</Button>
      <SwipeableDrawer
        anchor="bottom"
        open={isShow}
        onClose={() => setIsShow(false)}
        onOpen={() => setIsShow(true)}
        sx={{
          '.MuiPaper-root': {
            margin: '0 auto',
            paddingTop: '30px',
            paddingX: '20px',
            maxWidth: '23.4rem',
            borderTopLeftRadius: '16px',
            borderTopRightRadius: '16px',
          },
        }}
      >
        <HandleBar />
        {children}
      </SwipeableDrawer>
    </>
  );
};

export default BottomSheet;

const HandleBar = styled(Box)`
  width: 80px;
  height: 6px;
  background-color: ${palette.grey_60};
  border-radius: 3px;
  position: absolute;
  top: 12px;
  left: 50%;
  transform: translateX(-50%);
`;
