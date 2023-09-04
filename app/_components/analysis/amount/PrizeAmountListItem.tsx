import palette from '@/_styles/palette';
import React from 'react';
import styled from 'styled-components';

type PrizeAmountListItemProps = {
  isTop?: boolean;
  index: number;
};

const PrizeAmountListItem: React.FC<PrizeAmountListItemProps> = ({ isTop = false, index }) => {
  return (
    <PrizeAmountListItemBlock isTop={isTop}>
      <OrderBox>
        <OrderNum isTop={isTop}>{index}</OrderNum>
        <RoundNum isTop={isTop}>1074회</RoundNum>
      </OrderBox>
      <AmountBox>
        <BeforeTaxAmount isTop={isTop}>{(25797503633).toLocaleString()}원</BeforeTaxAmount>
        <AfterTaxAmount isTop={isTop}>{(25797503633).toLocaleString()}원</AfterTaxAmount>
      </AmountBox>
    </PrizeAmountListItemBlock>
  );
};

const PrizeAmountListItemBlock = styled.li<{ isTop: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  background: ${({ isTop }) =>
    isTop ? 'linear-gradient(134deg, #1666ef 32.36%, #6ca7ff 98.43%)' : palette.blue_ligth};
  padding: 19px 20px 15px;
`;

const OrderBox = styled.div`
  display: flex;
  gap: 16px;
`;

const OrderNum = styled.p<{ isTop: boolean }>`
  font-weight: 700;
  color: ${({ isTop }) => isTop && palette.white};
`;

const RoundNum = styled.p<{ isTop: boolean }>`
  color: ${({ isTop }) => isTop && palette.white};
`;

const AmountBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  align-items: flex-end;
`;

const BeforeTaxAmount = styled.p<{ isTop: boolean }>`
  font-size: 14px;
  color: ${({ isTop }) => isTop && palette.white};
`;

const AfterTaxAmount = styled.p<{ isTop: boolean }>`
  font-size: 12px;
  color: ${({ isTop }) => (isTop ? '#A0C3FF' : '#979da6')};
`;

export default PrizeAmountListItem;
