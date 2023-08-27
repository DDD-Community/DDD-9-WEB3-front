import instance from '@apis/core';
import {useQuery} from "@tanstack/react-query";
import {Response} from "@types/common";
import {MapListParamType, StoreListType} from "@types/map/index.d.ts";

export const MAP_LIST_QUERY_KEY = 'mapList';

interface MapListResponseType extends Response {
  data: StoreListType[];
}

export const fetchMapList = (body: MapListParamType): Promise<MapListResponseType> =>
  instance.get(`/api/store?location=${body.location}&subLocation=${body.subLocation}&sort=${body.sort}&option=${body.option}`);

const useGetMapList = ({ body }: MapListParamType) => {
  const { data } = useQuery(
    [MAP_LIST_QUERY_KEY, body], () => fetchMapList(body).then((res) => res.data),
  );

  return { data };
};

export default useGetMapList;