import { Snackbar } from '@mui/material';
import palette from '@styles/palette';

interface ToastProps {
  isOpen: boolean;
  message: string;
  onClose: () => void;
}

const Toast = ({ isOpen, message, onClose }: ToastProps) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      autoHideDuration={3000}
      open={isOpen}
      onClose={onClose}
      message={message}
      sx={{
        '& .MuiPaper-root': {
          fontFamily: 'Pretendard',
          padding: '10px 16px',
          borderRadius: '12px',
          background: palette.grey_10,
          color: palette.grey_70,
          fontSize: '14px',
        },
        '& .MuiSnackbarContent-message': {
          padding: 0,
        },
      }}
    />
  );
};

export default Toast;
