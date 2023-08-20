import MapPage from '@features/MapPage';
import Script from 'next/script';

const KAKAO_MAP_SDK_URL = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_KEY}&autoload=false`;

export default function Page() {
  return (
    <>
      {/* eslint-disable-next-line @next/next/no-before-interactive-script-outside-document */}
      <Script src={KAKAO_MAP_SDK_URL} strategy="beforeInteractive" />
      <MapPage />
    </>
  );
}
