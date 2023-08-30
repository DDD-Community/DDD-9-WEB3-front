import { memberApi } from '@apis/member';
import { getQueryKey } from '@lib/util/queryKey';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { MemberResponse } from '@/_types/response';

const MEMBER_QUERYKEY = getQueryKey('member');

export const useGetMember = (options?: UseQueryOptions<MemberResponse, AxiosError>) =>
  useQuery({ queryKey: MEMBER_QUERYKEY.all, queryFn: memberApi.getMember, ...options });
