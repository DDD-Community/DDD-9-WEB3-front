import palette from '@styles/palette';
import { Stack, Switch, Typography } from '@mui/material';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react';

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

  const getOptionLabelStyle = ({ isFocused }: { isFocused: boolean }) => {
    return {
      position: 'absolute',
      maxHeight: 'calc(100vh - 163px)',
      top: '24%',
      zIndex: '1',
      cursor: 'pointer',
      userSelect: 'none',
      fontSize: ' 14px',
      transition: 'color 0.3s ease-in-out',
      fontWeight: isFocused ? 'bold' : 'normal',
      color: isFocused ? palette.black : palette.grey_40,
    };
  };

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
      <Typography
        onClick={handleSwitchChange}
        sx={{
          ...getOptionLabelStyle({
            isFocused:
              !searchParams.get(leftOption.queryParams) ||
              searchParams.get(leftOption.queryParams) === leftOption.value,
          }),
          left: '26%',
          transform: 'translateX(-50%)',
        }}
      >
        {leftOption.label}
      </Typography>
      <Switch
        defaultChecked={false}
        checked={isChecked}
        onChange={handleSwitchChange}
        inputProps={{ 'aria-label': 'ant design' }}
        sx={{
          width: '100%',
          height: 40,
          padding: 0,
          display: 'flex',
          '&.MuiTypography-root': {
            fontSize: 14,
          },
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
      <Typography
        onClick={handleSwitchChange}
        sx={{
          ...getOptionLabelStyle({
            isFocused: searchParams.get(rightOption.queryParams) === rightOption.value,
          }),
          right: '26%',
          transform: 'translateX(50%)',
        }}
      >
        {rightOption.label}
      </Typography>
    </Stack>
  );
};

export default ToggleSwitch;
