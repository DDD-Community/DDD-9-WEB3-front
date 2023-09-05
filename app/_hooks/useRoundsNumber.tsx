import instance from '@/_apis/core';
import { NumberResponseType, RoundNumbersParamsType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useRoundsNumber = ({
  startNo,
  endNo,
  sortOption = 'asc',
  sortType = 'NO',
}: RoundNumbersParamsType) => {
  const params = {
    startNo,
    endNo,
    sortOption,
    sortType,
  };

  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, NumberResponseType[]>(`/api/statics/number`, {
        params,
      });
      return data;
    } catch (err) {
      console.log('err', err);
      return null;
    }
  };

  const { data, isLoading } = useQuery([`roundNumbersData_${sortOption}`, params], fetcher);

  return { roundNumbersData: data || [], isLoading };
};

export default useRoundsNumber;
