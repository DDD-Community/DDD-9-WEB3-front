import NavTabs from '@/_components/common/NavTabs';
import React from 'react';
import styled from 'styled-components';
import PrizeAmountList from './PrizeAmountList';
import { useSearchParams } from 'next/navigation';
import PrizeRankAnalysisWrapper from './PrizeRankAnalysisWrapper';

type AmountAnalysisWrapperProps = {};

const AmountAnalysisWrapper: React.FC<AmountAnalysisWrapperProps> = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get('type');

  const tabOptions = [
    {
      label: '당첨금액 높은 순',
      value: '/analysis/amount?type=desc',
    },
    {
      label: '당첨금액 낮은 순',
      value: '/analysis/amount?type=asc',
    },
  ];

  return (
    <AmountAnalysisWrapperBlock>
      <NavTabs tabOptions={tabOptions} />
      <PrizeAmountList type={type} />
      <Line />
      <PrizeRankAnalysisWrapper />
    </AmountAnalysisWrapperBlock>
  );
};

const AmountAnalysisWrapperBlock = styled.div``;

const Line = styled.div`
  width: 100%;
  background-color: #eff3f8;
  height: 10px;
`;

export default AmountAnalysisWrapper;
