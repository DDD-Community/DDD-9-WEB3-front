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
  padding: 2.9rem 1.25rem 0 1.25rem;
  display: flex;
  flex-direction: column;
`;
