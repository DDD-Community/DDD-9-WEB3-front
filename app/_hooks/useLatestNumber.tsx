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
      return null;
    }
  };

  const { data, error, isFetching, isLoading } = useQuery(['latestNumberData'], fetcher, {
    retry: 0,
  });

  const latestRoundsNumber = data && data.drwt_no;

  return { latestNumbers: data, latestRoundsNumber, isLoading, error, isFetching };
};

export default useLatestNumber;
