import palette from '@/_styles/palette';
import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

Chart.register(ArcElement);

type DoughnutChartWrapperProps = {};

const DoughnutChartWrapper: React.FC<DoughnutChartWrapperProps> = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 100, 100, 100, 100, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
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
                position: 'bottom', // You can adjust the position of the legend
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
