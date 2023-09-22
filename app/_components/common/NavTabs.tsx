import React, { useState } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import palette from '@/_styles/palette';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

type NavTabsProps = {
  tabOptions: { label: string; queryParams: string; value: string }[];
};

const NavTabs: React.FC<NavTabsProps> = ({ tabOptions }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [value, setValue] = useState(searchParams.get(tabOptions[0].queryParams));

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
          onClick={() => {
            router.push(`${pathname}?${tab.queryParams}=${tab.value}`);
          }}
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
