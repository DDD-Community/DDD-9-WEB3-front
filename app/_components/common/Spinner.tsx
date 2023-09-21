import { Box, CircularProgress } from '@mui/material';
import palette from '@styles/palette';

const Spinner = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        margin: '3rem 0',
        '.MuiCircularProgress-root': { color: palette.grey_60 },
      }}
    >
      <CircularProgress size="1.5rem" sx={{ margin: '0 auto' }} />
    </Box>
  );
};

export default Spinner;
