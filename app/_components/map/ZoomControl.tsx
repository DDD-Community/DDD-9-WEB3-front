import { MouseEventHandler } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';
import MinusIcon from '@assets/svg/minusIcon.svg';
import PlusIcon from '@assets/svg/plusIcon.svg';
import palette from '@styles/palette';

interface ControlProps {
  id?: string;
  zoomIn?: (e: MouseEventHandler<HTMLButtonElement>) => void;
  zoomOut?: (e: MouseEventHandler<HTMLButtonElement>) => void;
}

const customStyles = {
  backgroundColor: palette.white,
  border: 1,
  borderColor: palette.grey_70,
  "&.MuiButton-root:hover": {
    backgroundColor: palette.grey_70,
  },
};

const ZoomControl = ({ zoomIn, zoomOut, ...props }: ControlProps) => {
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
        <Button key="zoomIn" onClick={() => zoomIn} sx={{ ...customStyles, borderBottom: 1, borderBottomColor: palette.grey_60 }}><PlusIcon /></Button>
        <Button key="zoomOut" onClick={() => zoomOut} sx={{ ...customStyles }}><MinusIcon /></Button>
      </ButtonGroup>
    </Box>
  );
};

export default ZoomControl;
