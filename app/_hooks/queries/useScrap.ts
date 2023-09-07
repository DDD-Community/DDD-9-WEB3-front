import { scrapApi } from '@apis/scrap';
import { getQueryKey } from '@lib/util/queryKey';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import type { ScrapData, ScrapResponse } from '@/_types/response/scrap';

const SCRAP_QUERYKEY = getQueryKey('scrap');

export const useGetScrap = (
  options?: UseQueryOptions<ScrapResponse['get'], AxiosError, ScrapData['get']>,
) =>
  useQuery<ScrapResponse['get'], AxiosError, ScrapData['get']>({
    queryKey: SCRAP_QUERYKEY.lists(),
    queryFn: scrapApi.getScrapStore,
    select: data =>
      data.map(scrap => ({
        storeId: scrap.store_id,
        storeName: scrap.store_name,
        si: scrap.address1,
        gu: scrap.address2,
        dong: scrap.address3,
        isGoodPlace: scrap.is_good_place,
        isScrap: scrap.is_scrap,
        latitude: scrap.latitude,
        longitude: scrap.longitude,
        address: scrap.new_address,
        phone: scrap.phone_no,
      })),
    ...options,
  });
