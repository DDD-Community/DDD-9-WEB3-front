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
      MenuProps={{
        PaperProps: {
          style: {
            marginTop: 7,
            maxHeight: 275,
          },
        },
      }}
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
        '.MuiSvgIcon-root': {
          fill: 'palette.black !important',
        },
        '&.MuiSelect-root::-webkit-scrollbar': {
          width: '120px',
        },
        '&.MuiSelect-root::-webkit-scrollbar-thumb': {
          backgroundColor: '#888',
          borderRadius: '6px',
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

const SelectorBlock = styled(Select)`
  &::-webkit-scrollbar {
    width: '120px'; // 스크롤바의 너비를 조절할 수 있습니다.
  }

  &::-webkit-scrollbar-thumb {
    background-color: '#888'; // 스크롤바 색상을 설정할 수 있습니다.
    border-radius: '6px'; // 스크롤바의 모서리를 둥글게 만들 수 있습니다.
  }
`;

export default Selector;
