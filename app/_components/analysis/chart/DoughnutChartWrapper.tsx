import palette from '@styles/palette';
import React from 'react';
import styled from 'styled-components';
import { Doughnut } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

type DoughnutChartWrapperProps = {
  numbers: { no: number; count: number }[];
};

const DoughnutChartWrapper: React.FC<DoughnutChartWrapperProps> = ({ numbers }) => {
  const mostNumbersList = numbers.slice(0, 6);

  const data = {
    labels: mostNumbersList.map(num => num.no),
    datasets: [
      {
        label: 'My First Dataset',
        data: mostNumbersList.map(num => num.count),
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
    <DoughnutChartWrapperBlock className="doughnut-chart">
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
                  boxHeight: 5,
                  boxWidth: 2,
                  usePointStyle: true,
                  font: {
                    weight: '700',
                  },
                },
              },
              tooltip: {
                xAlign: 'center',
                yAlign: 'bottom',
                cornerRadius: 13,
                padding: {
                  top: 6,
                  bottom: 5,
                  right: 15,
                  left: 15,
                },
                backgroundColor: palette.grey_20,
                displayColors: false,
                usePointStyle: true,
                callbacks: {
                  title: () => {
                    let title = ``;
                    return title;
                  },
                  label: function (context) {
                    let label = `${context.raw}회 출현`;
                    return label;
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
