'use client';

import { TopNavigation } from '@components/common';
import AuthProvider from '@components/providers/AuthProvider';
import ScrapStore from '@components/scrap/ScrapStore';
import { styled } from 'styled-components';

const ScrapbookPage = () => {
  return (
    <AuthProvider>
      <Wrapper>
        <TopNavigation version="BACK" title="스크랩북" />
        <ScrapStore />
      </Wrapper>
    </AuthProvider>
  );
};

export default ScrapbookPage;

const Wrapper = styled.div`
  height: calc(100vh - 2.9rem);
  padding-top: 2.9rem;
  display: flex;
  flex-direction: column;
`;
