import instance from '@/_apis/core';
import { LatestNumberResponseType } from '@/_types/analysis';
import React from 'react';
import styled from 'styled-components';

type RoundSelectorProps = {
  lastestRound: number;
  setIsOpenScrapBottomSheet: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectNumbers: React.Dispatch<React.SetStateAction<LatestNumberResponseType | undefined>>;
};

const RoundSelector: React.FC<RoundSelectorProps> = ({
  lastestRound,
  setIsOpenScrapBottomSheet,
  setSelectNumbers,
}) => {
  const selectOptions = Array.from({ length: lastestRound }, (_, index) => lastestRound - index);

  const onSelect = async (drwtNo: number) => {
    try {
      const data = await instance.get<undefined, LatestNumberResponseType>(`/api/number`, {
        params: {
          drwtNo,
        },
      });

      setSelectNumbers(data);
    } catch (err) {
      console.log('err', err);
    }
    setIsOpenScrapBottomSheet(false);
  };

  return (
    <RoundSelectorBlock>
      {selectOptions.map(round => (
        <Item key={round} onClick={() => onSelect(round)}>
          {round}
        </Item>
      ))}
    </RoundSelectorBlock>
  );
};

const RoundSelectorBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

const Item = styled.button`
  text-align: center;
  font-size: 20px;
`;

export default RoundSelector;
