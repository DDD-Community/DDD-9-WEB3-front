import palette from '@/_styles/palette';
import { Stack, Switch, Typography } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import styled from 'styled-components';

type ToggleSwitchProps = {
  leftOption: {
    label: string;
    queryParams: string;
    value: string;
  };
  rightOption: {
    label: string;
    queryParams: string;
    value: string;
  };
};

const ToggleSwitch: React.FC<ToggleSwitchProps> = ({ leftOption, rightOption }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const newParams = new URLSearchParams(searchParams.toString());

  const [isChecked, setIsChecked] = useState(
    searchParams.get(rightOption.queryParams) === rightOption.value,
  );

  const handleSwitchChange = () => {
    setIsChecked(!isChecked);

    isChecked
      ? newParams.set(leftOption.queryParams, leftOption.value)
      : newParams.set(rightOption.queryParams, rightOption.value);

    router.push(`${pathname}?${newParams.toString()}`);
  };

  return (
    <Stack
      sx={{
        position: 'relative',
      }}
    >
      <LeftLabel
        onClick={handleSwitchChange}
        isfocused={searchParams.get(leftOption.queryParams) === leftOption.value}
      >
        {leftOption.label}
      </LeftLabel>
      <Switch
        checked={isChecked}
        onChange={handleSwitchChange}
        inputProps={{ 'aria-label': 'ant design' }}
        sx={{
          width: '100%',
          height: 40,
          padding: 0,
          display: 'flex',
          '&.MuiSwitch-root': {
            margin: 0,
          },
          '& .MuiSwitch-switchBase': {
            padding: 0.5,
            '&.Mui-checked': {
              transform: 'translateX(155px)',
              color: palette.white,
              '& + .MuiSwitch-track': {
                opacity: 1,
                backgroundColor: '#f0f1f5',
              },
            },
          },
          '& .MuiSwitch-thumb': {
            boxShadow:
              '0px 0px 2px 0px rgba(0, 0, 0, 0.25), 0px 0px 6px 0px rgba(117, 127, 143, 0.3)',
            width: 170,
            height: 32,
            borderRadius: 6,
            transition: 'right 0.4s ease-in-out',
            backgroundColor: palette.white,
          },
          '& .MuiSwitch-track': {
            borderRadius: 16 / 2,
            opacity: 1,
            backgroundColor: '#f0f1f5',
            boxSizing: 'border-box',
          },
        }}
      />
      <RightLabel
        onClick={handleSwitchChange}
        isfocused={searchParams.get(rightOption.queryParams) === rightOption.value}
      >
        {rightOption.label}
      </RightLabel>
    </Stack>
  );
};

const Label = styled(Typography)<{ isfocused: boolean }>`
  position: absolute;
  top: 24%;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  font-size: 14px;
  color: ${({ isfocused }) => (isfocused ? palette.black : palette.grey_40)};
  font-weight: ${({ isfocused }) => isfocused && 'bold'};
  transition: color 0.3s ease-in-out;
`;

const LeftLabel = styled(Label)<{ isfocused: boolean }>`
  left: 26%;
  transform: translateX(-50%);
`;

const RightLabel = styled(Label)<{ isfocused: boolean }>`
  right: 26%;
  transform: translateX(50%);
`;

export default ToggleSwitch;
