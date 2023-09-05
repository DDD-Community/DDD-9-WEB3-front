export interface LatestNumberResponseType {
  drwt_no: number;
  drwt_date: string;
  drwt_no1: number;
  drwt_no2: number;
  drwt_no3: number;
  drwt_no4: number;
  drwt_no5: number;
  drwt_no6: number;
  bnus_no: number;
  tot_sell_amount: number;
  first_win_amount: number;
  first_win_count: number;
  first_tot_amount: number;
}
export interface NumberResponseType {
  no: number;
  count: number;
}

export type SortOption = 'asc' | 'desc'; //? 정렬옵션

export type SortType = 'NO' | 'COUNT'; //? 정렬구분

export interface PeriodParamType {
  startDt: string;
  endDt: string;
  sortOption: SortOption;
  sortType?: SortType;
}

export interface PeriodNumbersParamsType {
  month: PeriodParamType;
  year: PeriodParamType;
}

export interface RankNumbersParamsType {
  startRank: number; //? 시작 등수
  size: number; //? 조회 개수
  rankSortOption?: SortOption; //? 랭크 정렬옵션
  sortOption?: SortOption;
  sortType?: SortType;
}

export interface RoundNumbersParamsType {
  startNo: number;
  endNo: number;
  sortType?: SortType;
  sortOption?: SortOption;
}
