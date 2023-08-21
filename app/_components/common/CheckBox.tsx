import type { ChangeEvent, InputHTMLAttributes } from 'react';
import { styled } from 'styled-components';

import palette from '@styles/palette';
import Checkbox from '@mui/material/Checkbox';

interface CheckBoxProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  label: string;
  isChecked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const CheckBox = ({ id, label, isChecked, onChange }: CheckBoxProps) => {
  return (
    <Label>
      <Checkbox
        id={id}
        checked={isChecked}
        onChange={onChange}
        sx={{
          color: palette.grey_60,
          '&.Mui-checked': {
            color: palette.orange_30,
          },
          '& .MuiSvgIcon-root': { fontSize: 32 },
          '&.MuiButtonBase-root': { padding: 0, marginRight: '4px' },
        }}
      />
      {label}
    </Label>
  );
};
CheckBox.displayName = 'CheckBox';

export default CheckBox;

const Label = styled.label`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 142%;
  height: 24px;
  letter-spacing: -0.14px;
`;
