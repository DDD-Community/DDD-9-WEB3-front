import React from 'react';
import { Bar } from 'react-chartjs-2';
import styled from 'styled-components';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import palette from '@/_styles/palette';

const BarChartWrapperBlock = styled.div``;

type BarChartWrapperProps = {};

const BarChartWrapper: React.FC<BarChartWrapperProps> = () => {
  ChartJS.register(ArcElement, Tooltip);

  const data = {
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false, // x축의 그리드 라인 제거
        },
      },
      y: {
        beginAtZero: true,
      },
    },
    indexAxis: 'y',
  };

  return (
    <BarChartWrapperBlock>
      {/* <Bar
        data={data}
        options={{
          scales: {
            x: {
              display: false, // x축의 그리드 제거
              beginAtZero: true,
            },
            y: {
              // display: false, // x축의 그리드 제거
              beginAtZero: true,
            },
          },
          indexAxis: 'y', // y축을 기준으로 차트를 그림
        }}
      /> */}
    </BarChartWrapperBlock>
  );
};

export default BarChartWrapper;
