import instance from '@/_apis/core';
import { LatestNumberResponseType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useLatestNumber = () => {
  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, LatestNumberResponseType>(
        `/api/number/latest`,
      );
      return data;
    } catch (err) {
      console.log('err', err);
    }
  };

  const { data, error, isFetching, isLoading } = useQuery(['latestNumberData'], fetcher, {
    retry: 0,
  });

  return {
    latestNumbers: data,
    latestRoundsNumber: data?.drwt_no!!,
    isLoading,
    error,
    isFetching,
  };
};

export default useLatestNumber;
