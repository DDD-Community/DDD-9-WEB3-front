import { HTTP_RESPONSE_ERROR_MESSAGE } from '@constants/http';

export const isExpiredAccessToken = (token: string) => {
  return token.trim().length > 0;
};

export const isNotRegisteredMember = (message: string) => {
  return message.includes(HTTP_RESPONSE_ERROR_MESSAGE.NOT_REGISTERED_MEMBER);
};

export const isNotExistAuthHeader = (message: string) => {
  return message.includes(HTTP_RESPONSE_ERROR_MESSAGE.NOT_EXIST_AUTH);
};
