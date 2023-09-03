import React from 'react';
import styled from 'styled-components';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import palette from '@/_styles/palette';

type SelectorProps = {
  selectOption: { label: string; value: number };
  onChange: (e: SelectChangeEvent<unknown>) => void;
  options: { label: string; value: number }[];
};

const Selector: React.FC<SelectorProps> = ({ selectOption, onChange, options }) => {
  return (
    <SelectorBlock
      value={selectOption.value}
      onChange={onChange}
      displayEmpty
      inputProps={{ 'aria-label': 'Without label' }}
      sx={{
        height: 42,
        width: '100%',
        color: palette.black,
        '.MuiOutlinedInput-notchedOutline': {
          borderColor: palette.grey_60,
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.grey_60,
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
          borderColor: palette.grey_60,
        },
        '.MuiSvgIcon-root ': {
          fill: 'palette.black !important',
        },
      }}
    >
      {options.map((option, i) => (
        <MenuItem key={i} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </SelectorBlock>
  );
};

const SelectorBlock = styled(Select)``;

export default Selector;
