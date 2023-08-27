export interface LocationType {
  address1: string;
  address2: string;
}

export interface MapListParamType {
  location: string;
  subLocation: string;
  sort: string;
  option: string;
}

export interface StoreListType {
  store_id: string;
  latitude: number;
  longitude: number;
  address1: string;
  address2: string;
  address3: string;
  address4: string;
  new_address: string;
  old_address: string;
  phone_no: string;
  store_name: string;
  drwt_infos: string[];
}
