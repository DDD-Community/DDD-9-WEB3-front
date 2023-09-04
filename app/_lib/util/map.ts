declare global {
  interface Window {
    naver: any;
  }
}

export const getNavermapSDK = () => {
  if (window.naver && window.naver.maps) {
    return window.naver.maps;
  }

  return undefined;
};

export const getMyLocation = () => {
  // 현재위치 세부 조정 옵션
  const geoOptions = {
    enableHighAccuracy: true,
    timeout: 1000 * 60, //1 min (1000 ms * 60 sec * 1 minute = 60 000ms)
    maximumAge: 1000 * 3600 * 24, //24 hour
  };

  return new Promise<GeolocationPosition>((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions)
  });
};
