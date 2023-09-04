import instance from '@/_apis/core';
import { NumberResponseType, SortOption } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type ParamsType = {
  startRank: number;
  size: number;
  isDesc?: SortOption;
  sortOption?: SortOption;
};

const useRankNumber = ({ startRank, size, isDesc = 'asc', sortOption = 'asc' }: ParamsType) => {
  const params = {
    startRank,
    size,
    isDesc,
    sortOption,
  };

  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, NumberResponseType[]>(`/api/statics/rank`, {
        params,
      });
      return data;
    } catch (err) {
      console.log('err', err);
      return null;
    }
  };

  const { data, isLoading } = useQuery([`rankNumbersData_${sortOption}`, params], fetcher);

  return { rankNumbersData: data || [], isLoading };
};

export default useRankNumber;
