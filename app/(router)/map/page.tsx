import MapPage from '@features/MapPage';
import Script from 'next/script';

const KAKAO_MAP_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;
const NAVER_MAP_SDK_URL = `https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_MAP_ID}&submodules=geocoder`;

export default function Page() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script src={NAVER_MAP_SDK_URL} strategy="beforeInteractive" />
      <MapPage />
    </>
  );
}
