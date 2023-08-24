import React, { useState, useEffect } from 'react';
import { Area } from '@ant-design/plots';

const StackedAreaPlot = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    asyncFetch();
  }, []);

  const asyncFetch = () => {
    fetch('https://gw.alipayobjects.com/os/bmw-prod/b21e7336-0b3e-486c-9070-612ede49284e.json')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => {
        console.log('fetch data failed', error);
      });
  };



  const config = {
    data,
    height:300,
    xField: 'date',
    yField: 'value',
    seriesField: 'country',
  };

  return <Area {...config} style={{ width: '100%' }} />;
};

export default StackedAreaPlot