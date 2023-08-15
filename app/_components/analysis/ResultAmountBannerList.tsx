import React from 'react';
import styled from 'styled-components';
import palette from '@/_styles/palette';
import { Swiper, SwiperSlide } from 'swiper/react';

type ResultAmountBannerListProps = {};

const ResultAmountBannerList: React.FC<ResultAmountBannerListProps> = () => {
  const testList = [
    {
      count: 1,
      amount: 2539849237,
    },
    {
      count: 1,
      amount: 2539849237,
    },
    {
      count: 1,
      amount: 2539849237,
    },
    {
      count: 1,
      amount: 2539849237,
    },
    {
      count: 1,
      amount: 2539849237,
    },
    {
      count: 1,
      amount: 2539849237,
    },
  ];

  return (
    <ResultAmountBannerListBlock
      direction={'horizontal'}
      slidesPerView={'auto'}
      className="swiper-banner"
    >
      {testList.map((test, i) => (
        <SwiperSlide key={i}>
          <ResultAmountBannerItem>
            <ItemInner>
              <p>{i + 1}등</p>
              <p>{test.count}명</p>
            </ItemInner>
            <ItemAmount>{test.amount.toLocaleString()}원</ItemAmount>
          </ResultAmountBannerItem>
        </SwiperSlide>
      ))}
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
  display: flex;
  flex-direction: column;
  padding: 20px 14px;
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
