import React from 'react';
import styled from 'styled-components';
import PrizeAmountListItem from './PrizeAmountListItem';
import useRankDetail from '@/_hooks/useRankDetail';
import { useSearchParams } from 'next/navigation';

type PrizeAmountListProps = {};

const PrizeAmountList: React.FC<PrizeAmountListProps> = () => {
  const searchParams = useSearchParams();
  const { rankDetailData } = useRankDetail({
    size: 5,
    sortOption: searchParams.get('type') || 'desc',
  });

  console.log(rankDetailData);

  return (
    <PrizeAmountListBlock>
      <PrizeAmountTopBox>
        <Title>
          당첨금이 가장 높은 순서대로
          <br />
          확인할 수 있어요.
        </Title>

        <PrizeAmountListBox>
          {rankDetailData.map((rankDetail, i) => (
            <PrizeAmountListItem isTop={i === 0} key={i} rankDetail={rankDetail} index={i + 1} />
          ))}
        </PrizeAmountListBox>
      </PrizeAmountTopBox>
    </PrizeAmountListBlock>
  );
};

const PrizeAmountListBlock = styled.div``;

const PrizeAmountTopBox = styled.div`
  padding: 31px 20px 27px;
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 500;
  text-align: center;
  line-height: 24px;
  padding-bottom: 17px;
`;

const PrizeAmountListBox = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export default PrizeAmountList;
