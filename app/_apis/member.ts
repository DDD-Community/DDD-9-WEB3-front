import { MemberResponse } from '@/_types/response';

import instance from './core';

export interface MemberInfo {
  email: string;
  nickName: string;
}

export const memberApi = {
  /**
   * @description 회원정보 조회
   */
  getMember: () => instance.get<unknown, MemberResponse>(`/api/member`),
  /**
   * @description 회원정보 등록
   */
  updateMember: (info: MemberInfo) =>
    instance.post<MemberInfo, MemberResponse>(`/api/member`, info),
};
