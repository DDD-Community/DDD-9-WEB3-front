import type { MemberInfoParams, MemberResponse } from '@/_types/response/member';

import instance from './core';

const MEMBER_API_URL = '/api/member';

export const memberApi = {
  /**
   * @description 회원정보 조회
   */
  getMember: () => instance.get<unknown, MemberResponse>(MEMBER_API_URL),
  /**
   * @description 회원정보 등록
   */
  postMember: (info: MemberInfoParams) =>
    instance.post<MemberInfoParams, MemberResponse>(MEMBER_API_URL, info),

  /**
   * @description 회원정보 삭제
   */
  deleteMember: () => instance.delete(MEMBER_API_URL),
  /**
   * @description 회원정보 수정
   */
  patchMember: (info: MemberInfoParams) =>
    instance.patch<MemberInfoParams, MemberResponse>(MEMBER_API_URL, info),
};
