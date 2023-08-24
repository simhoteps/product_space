import React from 'react';
import { Pie } from '@ant-design/plots';

export const PieInteractionChart = () => {
  const data = [
    {
      type: 'series 1',
      value: 27,
    },
    {
      type: 'series 2',
      value: 25,
    },
    {
      type: 'series 3',
      value: 18,
    },
    {
      type: 'series 4',
      value: 15,
    },
    {
      type: 'series 5',
      value: 10,
    },
    {
      type: 'series 6',
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: 'value',
    colorField: 'type',
    radius: 0.8,
    label: {
      type: 'outer',
      content: '{name} {percentage}',
    },
    interactions: [
      {
        type: 'pie-legend-active',
      },
      {
        type: 'element-active',
      },
    ],
  };
  return <Pie {...config} />;
};
