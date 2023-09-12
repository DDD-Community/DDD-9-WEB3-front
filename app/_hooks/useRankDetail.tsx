import instance from '@/_apis/core';
import { RankDeatilResponseType, RankDetailParamsType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';

const useRankDetail = ({ size, sortOption = 'desc' }: RankDetailParamsType) => {
  const params = {
    size,
    sortOption,
  };

  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, RankDeatilResponseType[]>(
        `/api/statics/rank/detail`,
        {
          params,
        },
      );
      return data;
    } catch (err) {
      console.log('err', err);
      return null;
    }
  };

  const { data, isLoading } = useQuery([`rankDetailData_${sortOption}`, sortOption], fetcher);

  return { rankDetailData: data || [], isLoading };
};

export default useRankDetail;
