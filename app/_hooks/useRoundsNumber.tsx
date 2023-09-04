import instance from '@/_apis/core';
import { NumberResponseType, SortOption } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

type ParamsType = {
  startNo: number;
  endNo: number;
  sortOption?: SortOption;
};

const useRoundsNumber = ({ startNo, endNo, sortOption = 'asc' }: ParamsType) => {
  const params = {
    startNo,
    endNo,
    sortOption,
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
