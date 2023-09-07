import type { ScrapParams, ScrapResponse } from '@/_types/response/scrap';

import instance from './core';

const SCRAP_API_URL = '/api/scrap/store';

export const scrapApi = {
  /**
   * @description 판매점 스크랩 조회
   */
  getScrapStore: () => instance.get<unknown, ScrapResponse['get']>(SCRAP_API_URL),
  /**
   * @description 판매점 스크랩 등록
   */
  postScrapStore: (storeId: ScrapParams) => instance.post<ScrapParams>(SCRAP_API_URL, { storeId }),
  /**
   * @description 판매점 스크랩 삭제
   */
  deleteScrapStore: (storeId: ScrapParams) =>
    instance.delete(SCRAP_API_URL, {
      params: {
        storeId,
      },
    }),
};
