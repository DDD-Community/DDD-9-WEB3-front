import { memberApi } from '@apis/member';
import { useQuery, type UseQueryOptions } from '@tanstack/react-query';
import type { AxiosError } from 'axios';

import { MemberResponse } from '@/_types/response';

export const useGetMember = (options?: UseQueryOptions<MemberResponse, AxiosError>) =>
  useQuery({ queryKey: ['getMember'], queryFn: memberApi.getMember, ...options });
