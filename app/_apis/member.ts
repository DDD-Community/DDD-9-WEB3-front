import { MemberResponse } from '@/_types/response';

import instance from './core';

export interface MemberInfo {
  email: string;
  nickname: string;
}

export const memberApi = {
  /**
   * @description 회원정보 조회
   */
  getMember: () => instance.get<unknown, MemberResponse>(`/api/member`),
  /**
   * @description 회원정보 등록
   */
  registerMember: (info: MemberInfo) =>
    instance.post<MemberInfo, MemberResponse>(`/api/member`, info),

  /**
   * @description 회원정보 삭제
   */
  deleteMember: () => instance.delete(`/api/member`),
  /**
   * @description 회원정보 수정
   */
  updateMember: (info: MemberInfo) =>
    instance.patch<MemberInfo, MemberResponse>(`/api/member`, info),
};
