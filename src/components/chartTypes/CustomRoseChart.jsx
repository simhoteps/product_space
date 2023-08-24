import React, { useState, useEffect } from 'react';
import { Rose } from '@ant-design/plots';

const CustomRoseChart = () => {
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
    data,
    xField: 'type',
    yField: 'value',
    seriesField: 'type',
    radius: 0.9,
    label: {
      offset: -15,
    },
  };
  return <Rose {...config} />;
};


export default CustomRoseChart;