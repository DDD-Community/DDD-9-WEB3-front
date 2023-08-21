import instance from './core';

export interface MemberInfo {
  email: string;
  nickName: string;
}

export const memberApi = {
  /**
   * @description 회원정보 조회
   */
  getMember: () => instance.get(`/api/member`),
  /**
   * @description 회원정보 등록
   */
  updateMember: (info: MemberInfo) => instance.post(`/api/member`, info),
};
