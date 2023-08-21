import palette from '@styles/palette';
import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
type DoughnutChartWrapperProps = {};

const DoughnutChartWrapper: React.FC<DoughnutChartWrapperProps> = () => {
  // ChartJS.register(ArcElement, Tooltip, Legend);
  // Chart.register(CategoryScale);

  const data = {
    labels: [10, 20, 30, 40, 50, 60],
    datasets: [
      {
        label: 'My First Dataset',
        data: [300, 50, 100, 100, 100, 100],
        backgroundColor: [
          palette.blue_15,
          palette.green_30,
          palette.green_40,
          palette.green_20,
          palette.yellow_10,
          palette.blue_5,
        ],
        hoverOffset: 4,
        borderColor: 'transparent',
      },
    ],
  };

  return (
    <DoughnutChartWrapperBlock>
      <PieChartTitle>
        가장 많이 출현한
        <br />
        6개의 번호를 확인해보세요.
      </PieChartTitle>

      <DoughnutBox>
        <Doughnut
          data={data}
          options={{
            plugins: {
              legend: {
                display: true,
                position: 'bottom',
                labels: {
                  usePointStyle: true,
                  font: {
                    weight: '700',
                  },
                },
              },
            },
          }}
        />
      </DoughnutBox>
    </DoughnutChartWrapperBlock>
  );
};

const DoughnutBox = styled.div`
  width: 200px;
  height: 200px;
`;

const DoughnutChartWrapperBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 24px 10px;
  border-radius: 16px;
  background-color: ${palette.blue_ligth};
`;

const PieChartTitle = styled.p`
  color: ${palette.grey_10};
  font-weight: bold;
  text-align: center;
  line-height: 28px;
  font-size: 20px;
  margin-bottom: 20px;
`;

export default DoughnutChartWrapper;
