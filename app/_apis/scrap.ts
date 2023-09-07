import type { LottoStore, ScrapResponse } from '@/_types/response/scrap';

import instance from './core';

export const scrapApi = {
  /**
   * @description 판매점 스크랩 조회
   */
  getScrapStore: () => instance.get<unknown, ScrapResponse['get']>('/api/scrap/store'),
  /**
   * @description 판매점 스크랩 삭제
   */
  deleteScrapStore: (storeId: LottoStore['storeId']) =>
    instance.delete('/api/scrap/store', {
      params: {
        storeId,
      },
    }),
};
