'use client';

import { Spinner, TopNavigation } from '@components/common';
import AuthProvider from '@components/providers/AuthProvider';
import ScrapStore from '@components/scrap/ScrapStore';
import { useGetScrap } from '@hooks/queries/useScrap';
import { useIsLoggedIn } from '@store/auth';
import { styled } from 'styled-components';

const ScrapbookPage = () => {
  const isLoggedIn = useIsLoggedIn();
  const { data: scrapList, isLoading } = useGetScrap({ enabled: isLoggedIn });

  return (
    <AuthProvider>
      <Wrapper>
        <TopNavigation version="BACK" title="스크랩북" />
        {isLoading ? (
          <Spinner />
        ) : (
          scrapList?.map(scrapItem => <ScrapStore key={scrapItem.storeId} storeInfo={scrapItem} />)
        )}
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
