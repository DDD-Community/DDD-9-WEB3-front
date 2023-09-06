'use client';

import { useState } from 'react';

import { Button } from './_components/common';
import BottomSheet from './_components/common/BottomSheet';
import Navigation from './_components/common/Navigation';
import AuthProvider from './_components/providers/AuthProvider';

export default function Home() {
  const [isOpenScrapBottomSheet, setIsOpenScrapBottomSheet] = useState(false);

  return (
    <>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
      <Button onClick={() => setIsOpenScrapBottomSheet(true)}>Bottom Sheet</Button>
      <BottomSheet
        isOpen={isOpenScrapBottomSheet}
        onOpen={() => setIsOpenScrapBottomSheet(true)}
        onClose={() => setIsOpenScrapBottomSheet(false)}
      />
    </>
  );
}
