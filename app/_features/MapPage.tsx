'use client';

import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { styled } from 'styled-components';
// import ControlButton from "@components/map/ControlButton";
// import PlaceChips from "@components/map/PlaceChips";
// import { PLACE_TYPE } from '@constants/map';

declare global {
  interface Window {
    kakao: never;
  }
}

const LAT_INIT = 33.450701;
const LNG_INIT = 126.570667;

const sampleData = [
  {
    title: '국회의사당',
    lat: 37.5318,
    lng: 126.9142,
  },
  {
    title: '영등포구청역',
    lat: 37.52497,
    lng: 126.895951,
  },
  {
    title: '영등포시장역',
    lat: 37.522669,
    lng: 126.905139,
  },
];

export default function MapPage() {
  // const [level, setLevel] = useState(3); //지도레벨
  const [latitude, setLatitude] = useState(LAT_INIT); //현재 위치 (위도)
  const [longitude, setLongitude] = useState(LNG_INIT); //현재 위치 (경도)

  /* 현재위치 세부 조정 옵션 */
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, //1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, //24 hour
  };

  /* 최초 && 현 위치 바뀔 때마다 지도 렌더링 */
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, geoOptions); //현재 위치 가져오기
    }

    function success(position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    }

    function error() {
      setLatitude(LAT_INIT);
      setLongitude(LNG_INIT);
    }
  }, [latitude, longitude]);

  return (
    <Wrapper>
      <Map
        id="map"
        center={{ lat: latitude, lng: longitude }}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
        {sampleData.map(el => {
          return <MapMarker key={el.title} position={{ lat: el.lat, lng: el.lng }} />;
        })}
      </Map>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  position: relative;
  display: flex;
  width: 100%;
  height: 100vh;
  min-height: calc(100vh - 22rem);
`;
