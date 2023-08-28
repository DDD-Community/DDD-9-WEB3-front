export const HTTP_STATUS_CODE = {
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOTFOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;

export const HTTP_RESPONSE_ERROR_MESSAGE = {
  NOT_REGISTERED_MEMBER: '등록된 회원이 아닙니다',
  NOT_EXIST_AUTH: 'Authorization 헤더가 존재하지 않습니다',
};
