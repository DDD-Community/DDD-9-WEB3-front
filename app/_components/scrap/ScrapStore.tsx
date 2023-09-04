import IconAddress from '@assets/svg/address.svg';
import IconScrap from '@assets/svg/bookmarkIcon.svg';
import IconContact from '@assets/svg/contact.svg';
import IconDropArrow from '@assets/svg/dropArrow.svg';
import palette from '@styles/palette';
import { styled } from 'styled-components';

const ScrapStore = () => {
  return (
    <Wrapper>
      <ScrapHeader>
        <StoreName>잉크와복권 화곡2호점</StoreName>
        <ScrapButton>
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
          <Description>서울 강서구 가로공원로76가길 12</Description>
        </StoreInfo>
        <StoreInfo>
          <IconContact />
          <Description>010-1234-5678</Description>
        </StoreInfo>
      </ScrapFooter>
    </Wrapper>
  );
};

export default ScrapStore;

const Wrapper = styled.div`
  padding: 1rem 1.25rem;
  margin: 0 -1.25rem;
  border-bottom: 1px solid ${palette.grey_70};
`;

const ScrapHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

const StoreName = styled.h1`
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.01rem;
`;

const ScrapButton = styled.button``;

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
`;
