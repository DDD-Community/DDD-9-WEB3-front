interface MemberInfo {
  email: string;
  nickname: string;
}

export type MemberInfoParams = MemberInfo;

export interface MemberResponse extends MemberInfo {
  user_id: string;
}
