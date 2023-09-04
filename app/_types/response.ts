import type { HttpStatusCode } from 'axios';

export interface AuthResponse {
  id_token: string;
  refresh_token: string;
  nickname: string;
  email: string;
}

export interface MemberResponse {
  user_id: string;
  email: string;
  nickname: string;
}

export interface ScrapResponse {
  user_id: string;
  store_id: string;
}

export type APIErrorResponse = {
  status: HttpStatusCode;
  statusText: string;
};
