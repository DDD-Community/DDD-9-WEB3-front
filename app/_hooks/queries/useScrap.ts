import { scrapApi } from '@apis/scrap';
import { getQueryKey } from '@lib/util/queryKey';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { ScrapResponse } from '@/_types/response';

const SCRAP_QUERYKEY = getQueryKey('scrap');

export const useGetScrap = (options?: UseQueryOptions<ScrapResponse, AxiosError>) =>
  useQuery({ queryKey: SCRAP_QUERYKEY.lists(), queryFn: scrapApi.getScrapStore, ...options });
