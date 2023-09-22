import instance from '@/_apis/core';
import { NumberResponseType, RankNumbersParamsType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useRankNumber = ({
  startRank,
  size,
  rankSortOption = 'desc',
  sortOption = 'asc',
  sortType = 'NO',
}: RankNumbersParamsType) => {
  const params = {
    startRank,
    size,
    rankSortOption,
    sortOption,
    sortType,
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
