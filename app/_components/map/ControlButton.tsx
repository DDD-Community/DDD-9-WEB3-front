import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import MinusIcon from '@assets/svg/minusIcon.svg';
import PlusIcon from '@assets/svg/plusIcon.svg';
import palette from '@styles/palette';
import { styled } from 'styled-components';

interface ControlBtnProps {
  id?: string;
  onClick?: (e: MouseEventHandler<HTMLButtonElement>) => void;
}

const customStyles = {
  backgroundColor: palette.white,
  border: 1,
  borderColor: palette.grey_70,
  "&.MuiButton-root:hover": {
    backgroundColor: palette.grey_70,
  },
};

const ControlButton = ({ onClick, ...props }: ControlBtnProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        height: 'fit-content',
        '& > *': { m: 1, },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical contained button group"
        variant="contained"
      >
        <Button key="plus" onClick={() => onClick} sx={{ ...customStyles, borderBottom: 1, borderBottomColor: palette.grey_60 }}><PlusIcon /></Button>
        <Button key="minus" onClick={() => onClick} sx={{ ...customStyles }}><MinusIcon /></Button>
      </ButtonGroup>
    </Box>
  );
};

export default ControlButton;

const Wrapper = styled.div`
  display: flex;
  border-radius: 8px;
  border: 1px solid ${palette.grey_70};
  box-shadow:
    0 0 2px 0 rgba(0, 0, 0, 0.25),
    0 0 6px 0 rgba(117, 127, 143, 0.3);
`;

const CtrlButton = styled.div`
  width: 40px;
  height: 40px;
  padding: 10px;
  color: ${palette.white};
`;
