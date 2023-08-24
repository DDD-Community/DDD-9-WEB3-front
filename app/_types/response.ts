export interface AuthResponse {
  id_token: string;
  refresh_token: string;
  nickname: string;
}

export interface MemberResponse {
  userId: string;
  email: string;
  nickname: string;
}
