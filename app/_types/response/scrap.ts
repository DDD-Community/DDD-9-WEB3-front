export interface LottoStore {
  storeId: string;
  storeName: string;
  si: string;
  gu: string;
  dong: string;
  isGoodPlace: boolean;
  isScrap: boolean;
  latitude: number;
  longitude: number;
  address: string;
  phone: string;
}

export interface ScrapData {
  get: LottoStore[];
}

export interface ScrapResponse {
  get: {
    store_id: string;
    store_name: string;
    address1: string;
    address2: string;
    address3: string;
    is_good_place: boolean;
    is_scrap: boolean;
    latitude: number;
    longitude: number;
    new_address: string;
    phone_no: string;
  }[];
}
