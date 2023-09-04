import React from 'react';
import styled from 'styled-components';
import PrizeAmountListItem from './PrizeAmountListItem';

type PrizeAmountListProps = {
  type?: 'asc' | 'desc';
};

const PrizeAmountList: React.FC<PrizeAmountListProps> = ({ type = 'desc' }) => {
  return (
    <PrizeAmountListBlock>
      <PrizeAmountTopBox>
        <Title>
          당첨금이 가장 높은 순서대로
          <br />
          확인할 수 있어요.
        </Title>

        <PrizeAmountListBox>
          {Array(5)
            .fill('')
            .map((test, i) => (
              <PrizeAmountListItem isTop={i === 0} key={i} index={i + 1} />
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
