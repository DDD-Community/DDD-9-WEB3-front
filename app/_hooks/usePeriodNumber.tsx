import instance from '@/_apis/core';
import { PeriodNumberResponseType } from '@/_types/analysis';
import { useQuery } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { format } from 'date-fns';
import { useSearchParams } from 'next/navigation';

type SortOption = 'asc' | 'desc';

type ParamType = {
  startDt: string;
  endDt: string;
  sortOption: SortOption;
};

type ParamsType = {
  month: ParamType;
  year: ParamType;
};

const usePeriodNumber = (type?: SortOption) => {
  const searchParams = useSearchParams();
  const monthFormatDate = format(new Date(), 'yyyyMM');
  const yearFormatDate = format(new Date(), 'yyyy');
  const category = (searchParams.get('category') || 'month') as 'year' | 'month';

  const params: ParamsType = {
    month: {
      startDt: searchParams.get('startDt') || searchParams.get('endDt') || monthFormatDate,
      endDt: searchParams.get('endDt') || monthFormatDate,
      sortOption: type || (searchParams.get('sortOption') as SortOption) || 'asc',
    },
    year: {
      startDt: `${searchParams.get('startDt') || searchParams.get('endDt') || yearFormatDate}01`,
      endDt: `${searchParams.get('endDt') || yearFormatDate}12`,
      sortOption: type || (searchParams.get('sortOption') as SortOption) || 'asc',
    },
  };

  const fetcher = async () => {
    try {
      const data = await instance.get<AxiosResponse, PeriodNumberResponseType[]>(
        `/api/statics/period`,
        {
          params: params[category],
        },
      );
      return data;
    } catch (err) {
      console.log('err', err);
    }
  };

  const { data, error, isFetching, isLoading } = useQuery(
    ['PeriodNumberData', params[category]],
    fetcher,
    {
      retry: 0,
    },
  );

  return { periodNumbers: data || [], isLoading, error, isFetching };
};

export default usePeriodNumber;
