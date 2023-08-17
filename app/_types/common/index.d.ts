// SVG 컴포넌트 사용을 위한 type declaration
declare module '*.svg' {
  import React from 'react';
  const svg: React.FC<React.SVGProps<SVGSVGElement>>;
  export default svg;
}

export interface Response {
  data: never; //any
  message: string;
}
