import type { HttpStatusCode } from 'axios';

export interface AuthResponse {
  id_token: string;
  refresh_token: string;
  nickname: string;
  email: string;
}

export type APIErrorResponse = {
  status: HttpStatusCode;
  statusText: string;
};
