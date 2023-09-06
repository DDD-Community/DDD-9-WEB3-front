'use client';

import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import palette from '@styles/palette';
import { useState } from 'react';
import { styled } from 'styled-components';

import ScrapStore from '../scrap/ScrapStore';
import Button from './Button';

const BottomSheet = () => {
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
            paddingTop: '1.8rem',
            paddingX: '1.25rem',
            maxWidth: '23.4rem',
            borderTopLeftRadius: '1rem',
            borderTopRightRadius: '1rem',
          },
        }}
      >
        <HandleBar />
        <ScrapStore />
        <ScrapStore />
        <ScrapStore />
      </SwipeableDrawer>
    </>
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
