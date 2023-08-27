import instance from '@/_apis/core';
import { LatestNumberResponseType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';

const useLatestNumber = () => {
  const fetcher = async () => {
    try {
      const res = await instance.get<LatestNumberResponseType>(`/api/number/latest`);
      return res;
    } catch (err) {
      console.log('err', err);
      return null;
    }
  };

  const { data, error, isFetching, isLoading } = useQuery(['latestNumberData'], fetcher, {
    retry: 0,
  });

  return { latestNumbers: data, isLoading, error, isFetching };
};

export default useLatestNumber;
