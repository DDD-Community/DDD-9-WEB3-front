'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { styled } from 'styled-components';
import { Latitude, Longitude, NaverMap } from "@types/map/index.d.ts";
import { getMyLocation } from '@lib/util/map';
import LocationInfo from '@components/map/LocationInfo';

const LAT_INIT = 33.450701;
const LNG_INIT = 126.570667;

export default function MapPage() {
  const [latitude, setLatitude] = useState<Latitude>(LAT_INIT); //현재 위치 (위도)
  const [longitude, setLongitude] = useState<Longitude>(LNG_INIT); //현재 위치 (경도)
  const [level, setLevel] = useState<number>(10); //zoom
  const [myAddress, setMyAddress] = useState<string>("");

  const mapRef = useRef<NaverMap | null | naver.maps.Marker>(null);

  // 현재 위치 가져오기
  const goToMyLocation = async () => {
    const { coords } = await getMyLocation();
    return coords;
  };

  // 좌표 -> 주소 변환
  const searchCoord2Addr = (lat: Latitude, lng: Longitude) => {
    naver.maps.Service.reverseGeocode({
      coords: new naver.maps.LatLng(lat, lng),
    }, function(status, response) {
      if (status !== naver.maps.Service.Status.OK) {
        return;
      }

      const result = response.v2; // 검색 결과의 컨테이너
      // const items = result.results; // 검색 결과의 배열

      setMyAddress(result.address.jibunAddress); // 검색 결과로 만든 지번 주소
    });
  };

  // 지도 렌더링 & 현위치 표시
  useEffect(() => {
    const location = new naver.maps.LatLng(latitude, longitude);

    //지도 그리기
    const map = (mapRef.current = new naver.maps.Map('map', {
      center: location,
      zoomControl: true,
      zoom: level,
      zoomControlOptions: {
        style: naver.maps.ZoomControlStyle.SMALL,
        position: naver.maps.Position.TOP_RIGHT,
      },
    }));

    searchCoord2Addr(latitude, longitude);

    goToMyLocation().then(
      (coords) => {
        setLatitude(coords.latitude);
        setLongitude(coords.longitude);}
    );

    setLevel(16);
    map.setCenter(location);
    map.setZoom(level, true);

    //마커 설정
    mapRef.current = new naver.maps.Marker({
      map,
      position: location, //마커 좌표
    });
  }, [latitude, longitude, level]);

  return (
    <MapContainer id="map">
      <LocationInfo address={myAddress} />
    </MapContainer>
  );
}

const MapContainer = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - 22rem);
  z-index: 0;
`;
