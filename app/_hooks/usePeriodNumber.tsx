import instance from '@/_apis/core';
import { NumberResponseType, SortOption, SortType, PeriodParamType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';

const usePeriodNumber = ({
  sortOption,
  sortType,
}: Pick<PeriodParamType, 'sortOption' | 'sortType'>) => {
  const searchParams = useSearchParams();
  const monthFormatDate = format(new Date(), 'yyyyMM');
  const yearFormatDate = format(new Date(), 'yyyy');
  const category = (searchParams.get('category') || 'month') as 'year' | 'month';
  const startDt = searchParams.get('startDt');
  const endDt = searchParams.get('endDt');

  const params = {
    month: {
      startDt: startDt || endDt || monthFormatDate,
      endDt: endDt || monthFormatDate,
    },
    year: {
      startDt: `${startDt || endDt || yearFormatDate}01`,
      endDt: `${endDt || yearFormatDate}12`,
    },
  };

  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, NumberResponseType[]>(`/api/statics/period`, {
        params: {
          ...params[category],
          sortOption: sortOption || (searchParams.get('sortOption') as SortOption) || 'asc',
          sortType: sortType || (searchParams.get('sortType') as SortType) || 'NO',
        },
      });
      return data;
    } catch (err) {
      console.log('err', err);
    }
  };

  const { data, error, isFetching, isLoading } = useQuery(
    ['PeriodNumberData', { category, sortOption, startDt, endDt, sortType }],
    fetcher,
    {
      retry: 0,
    },
  );

  return { periodNumbers: data || [], isLoading, error, isFetching };
};

export default usePeriodNumber;
