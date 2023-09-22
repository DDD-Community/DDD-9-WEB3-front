import React from 'react';
import styled from 'styled-components';
import palette from '@/_styles/palette';
import { Swiper, SwiperSlide } from 'swiper/react';
import useLatestNumber from '@/_hooks/useLatestNumber';
import { LatestNumberResponseType } from '@/_types/analysis';

type ResultAmountBannerListProps = {
  roundNumbers: LatestNumberResponseType;
};

const ResultAmountBannerList: React.FC<ResultAmountBannerListProps> = ({ roundNumbers }) => {
  return (
    <ResultAmountBannerListBlock
      direction="horizontal"
      slidesPerView="auto"
      className="swiper-banner"
    >
      {roundNumbers && (
        <SwiperSlide>
          <ResultAmountBannerItem>
            <ItemInner>
              <p>1등</p>
              <p>{roundNumbers.first_win_count}명</p>
            </ItemInner>
            <ItemAmount>{roundNumbers.first_win_amount.toLocaleString()}원</ItemAmount>
          </ResultAmountBannerItem>
        </SwiperSlide>
      )}
    </ResultAmountBannerListBlock>
  );
};

const ResultAmountBannerListBlock = styled(Swiper)`
  display: flex;
  overflow: hidden;
  width: 100%;
  margin-bottom: 37px;

  .swiper-wrapper {
    display: flex;

    .swiper-slide {
      margin: 14px 6px;
      width: max-content;
    }
  }
`;

const ResultAmountBannerItem = styled.li`
  width: 108px;
  display: flex;
  flex-direction: column;
  padding: 20px 15px;
  background-color: ${palette.white};
  border-radius: 10px;
`;

const ItemInner = styled.div`
  display: flex;
  font-weight: bold;
  gap: 4px;
  margin-bottom: 7px;
`;

const ItemAmount = styled.p`
  font-size: 12px;
  color: ${palette.grey_40};
`;

export default ResultAmountBannerList;
