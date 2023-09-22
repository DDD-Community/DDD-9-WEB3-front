import React from 'react';
import styled from 'styled-components';
import PrizeAmountListItem from './PrizeAmountListItem';
import useRankDetail from '@/_hooks/useRankDetail';
import { useSearchParams } from 'next/navigation';
import { SortOption } from '@/_types/analysis';
import { Box, CircularProgress } from '@mui/material';
import palette from '@/_styles/palette';

type PrizeAmountListProps = {};

const PrizeAmountList: React.FC<PrizeAmountListProps> = () => {
  const searchParams = useSearchParams();
  const { rankDetailData, isLoading } = useRankDetail({
    size: 5,
    sortOption: (searchParams.get('type') || 'desc') as SortOption,
  });

  return (
    <PrizeAmountListBlock>
      <PrizeAmountTopBox>
        <Title>
          당첨금이 가장 높은 순서대로
          <br />
          확인할 수 있어요.
        </Title>

        <PrizeAmountListBox>
          {isLoading ? (
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 380,
                color: palette.grey_60,
              }}
            >
              <CircularProgress color="inherit" />
            </Box>
          ) : (
            rankDetailData.map((rankDetail, i) => (
              <PrizeAmountListItem isTop={i === 0} key={i} rankDetail={rankDetail} index={i + 1} />
            ))
          )}
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
