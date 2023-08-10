'use client';
// import { Skeleton } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

interface Props {
  name: string;
  width: number;
  height: number;
  borderRadius?: number | string;
}

/*
  2023-08-10 현재 chakra-ui, emotion 없어서 오류 발생함
  yarn add @chakra-ui/react @chakra-ui/next-js @emotion/react @emotion/styled framer-motion
* */

export default function Icon({ name, width, height, borderRadius = '8px' }: Props) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    import('' + `../../public/assets/svg/${name}.svg`).then(mod => {
      ref.current = mod.default;
      setIsLoading(false);
    });
  }, [name]);

  if (ref.current) {
    const { current: SVG } = ref;

    return (
      <Skeleton
        display="flex"
        alignItems="center"
        justifyContent="center"
        width={`${width}px`}
        height={`${height}px`}
        borderRadius={borderRadius || 'none'}
        isLoaded={!isLoading}
      >
        <SVG width={width} height={height} />
      </Skeleton>
    );
  }

  return (
    <Skeleton width={`${width}px`} height={`${height}px`} borderRadius={borderRadius || 'none'}>
      <div />
    </Skeleton>
  );
}
