import { ScrapResponse } from '@/_types/response';

import instance from './core';

export const scrapApi = {
  /**
   * @description 판매점 스크랩 조회
   */
  getScrapStore: () => instance.get<unknown, ScrapResponse>(`/api/scrap/store`),
};
