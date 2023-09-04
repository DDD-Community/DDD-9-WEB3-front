'use client';

import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import useGetMapList from '@hooks/useGetMapList';
import { styled } from 'styled-components';
import ZoomControl from '@components/map/button/ZoomControl';
import LocationInfo from '@components/map/LocationInfo';
// import PlaceChips from '@components/map/button/PlaceChips';
import GPSButton from '@components/map/button/GPSButton';
import MyLocation from '@assets/svg/myLocation.svg';

declare global {
  interface Window {
    kakao: any;
  }
}

const LAT_INIT = 33.450701;
const LNG_INIT = 126.570667;

export default function MapPage() {
  const [level, setLevel] = useState(3); //지도레벨
  const [latitude, setLatitude] = useState(LAT_INIT); //현재 위치 (위도)
  const [longitude, setLongitude] = useState(LNG_INIT); //현재 위치 (경도)
  // const [myAddr, setMyAddr] = useState(""); //현재 위치의 법정동
  const [myLocation, setMyLocation] = useState(false); //현위치 새로고침 여부

  const fnZoomIn = () => { setLevel(level+1) };
  const fnZoomOut = () => { setLevel(level-1) };
  const fnGPSRefresh = () => {
    //현위치 렌더링 여기서 재렌더링 시키기
    setMyLocation(true);
  };

  // 현재위치 세부 조정 옵션
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, //1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, //24 hour
  };

  // 최초 && 현 위치 바뀔 때마다 지도 렌더링
  useEffect(() => {
    // 주소-좌표 변환 객체 생성
    const geocoder = new kakao.maps.services.Geocoder();

    // 좌표로 법정동 상세 주소 정보 요청
    function fnCoord2Addr(lat: number, lng:number, callback: (result: Array<object>, status: string) => void) {
      geocoder.coord2Address(lat, lng, callback);
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error, geoOptions); //현재 위치 가져오기
    }

    function success(position: any) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      console.log(latitude, longitude);
    }

    function error() {
      setLatitude(LAT_INIT);
      setLongitude(LNG_INIT);
    }

    fnCoord2Addr(latitude, longitude, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        console.log(result[0]);
        // setMyAddr(result[0].address.address_name);
      }
    });
  }, [latitude, longitude]);

  const { data } = useGetMapList({ location: "서울", subLocation: "마포구", option: "0", sort: "0" });
  console.log(data);

  return (
    <Wrapper>
      <Map
        id="map"
        center={{ lat: latitude, lng: longitude }}
        style={{ width: '100%', height: '100%' }}
        level={3}
      >
        <MapMarker position={{ lat: latitude, lng: longitude }} />
        <MyLocation />
        {Array.isArray(data) && data.map(el => {
          return <MapMarker key={el.store_id} position={{ lat: el.latitude, lng: el.longitude }} />;
        })}
      </Map>
      <ZoomControl id="zoomControl" zoomIn={fnZoomIn} zoomOut={fnZoomOut} />
      <GPSButton isActivated={myLocation} onClick={fnGPSRefresh} />
      <LocationInfo address1={"서울"} address2={"마포구"} />
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
