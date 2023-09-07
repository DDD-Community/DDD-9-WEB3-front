import IconAddress from '@assets/svg/address.svg';
import IconScrap from '@assets/svg/bookmarkIcon.svg';
import IconContact from '@assets/svg/contact.svg';
import IconDropArrow from '@assets/svg/dropArrow.svg';
import { Modal } from '@components/common';
import { ERROR } from '@constants/message';
import { useDeleteScrap } from '@hooks/queries/useScrap';
import palette from '@styles/palette';
import { useState } from 'react';
import { styled } from 'styled-components';

import type { LottoStore } from '@/_types/response/scrap';

interface ScrapStoreProps {
  storeInfo: LottoStore;
}

const ScrapStore = ({ storeInfo }: ScrapStoreProps) => {
  const [isOpenDeleteScrapModal, setIsOpenDeleteScrapModal] = useState(false);
  const { mutate: deleteScrapStore } = useDeleteScrap(storeInfo.storeId);

  const handleScrapButtonClick = () => {
    setIsOpenDeleteScrapModal(true);
  };

  return (
    <>
      <Wrapper>
        <ScrapHeader>
          <StoreName>{storeInfo.storeName}</StoreName>
          <ScrapButton onClick={handleScrapButtonClick}>
            <IconScrap />
          </ScrapButton>
        </ScrapHeader>
        <ScrapBody>
          <WinningInfo>1등 당첨 횟수</WinningInfo>
          <WinningCount>6회</WinningCount>
          <WinningListButton>
            <IconDropArrow />
          </WinningListButton>
        </ScrapBody>
        <ScrapFooter>
          <StoreInfo>
            <IconAddress />
            <Description>{storeInfo.address}</Description>
          </StoreInfo>
          <StoreInfo>
            <IconContact />
            <Description>{storeInfo.phone || ERROR.NO_DATA}</Description>
          </StoreInfo>
        </ScrapFooter>
      </Wrapper>
      <Modal
        isOpen={isOpenDeleteScrapModal}
        content={`스크랩북에서\n삭제하시겠어요?`}
        buttonContent="삭제하기"
        onClose={() => setIsOpenDeleteScrapModal(false)}
        onClick={deleteScrapStore}
      />
    </>
  );
};

export default ScrapStore;

const Wrapper = styled.div`
  padding: 1rem 1.25rem;
  border-bottom: 1px solid ${palette.grey_70};
`;

const ScrapHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StoreName = styled.h1`
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01rem;
`;

const ScrapButton = styled.button`
  padding-top: 0.18rem;
`;

const ScrapBody = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.87rem;
  font-weight: 700;
  line-height: 142%;
  color: ${palette.orange_30};
`;

const WinningInfo = styled.div`
  margin-right: 4px;
`;

const WinningCount = styled.div`
  margin-right: -1px;
`;

const WinningListButton = styled.button`
  padding: 2px 0 0;
`;

const ScrapFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 150%;
  color: ${palette.grey_30};
`;

const StoreInfo = styled.div`
  display: flex;
`;

const Description = styled.span`
  margin-left: 4px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  word-break: break-all;
`;
