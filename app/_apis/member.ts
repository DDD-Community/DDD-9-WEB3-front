import { MemberResponse } from '@/_types/response';

import instance from './core';

export interface MemberInfoParams {
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
  registerMember: (info: MemberInfoParams) =>
    instance.post<MemberInfoParams, MemberResponse>(`/api/member`, info),

  /**
   * @description 회원정보 삭제
   */
  deleteMember: () => instance.delete(`/api/member`),
  /**
   * @description 회원정보 수정
   */
  updateMember: (info: MemberInfoParams) =>
    instance.patch<MemberInfoParams, MemberResponse>(`/api/member`, info),
};
