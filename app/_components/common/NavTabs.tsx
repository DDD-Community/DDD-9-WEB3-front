import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Link from 'next/link';
import palette from '@/_styles/palette';

type NavTabsProps = {
  tabOptions: { label: string; value: string }[];
};

const NavTabs: React.FC<NavTabsProps> = ({ tabOptions }) => {
  const [value, setValue] = useState(tabOptions[0].value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      textColor="inherit"
      variant="fullWidth"
      sx={{
        borderBottom: `1px solid ${palette.grey_60}`,
        '& .MuiTabs-indicator': {
          backgroundColor: palette.black,
        },
      }}
    >
      {tabOptions.map((tab, i) => (
        <Tab
          label={tab.label}
          value={tab.value}
          key={i}
          component={Link}
          href={tab.value}
          sx={{
            '&.Mui-selected': {
              fontWeight: 700,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default NavTabs;
