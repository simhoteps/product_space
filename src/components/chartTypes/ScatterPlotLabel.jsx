
import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/plots';
    
export const ScatterPlotLabel = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        asyncFetch();
      }, []);
    
      const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/3e4db10a-9da1-4b44-80d8-c128f42764a8.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };
      const config = {
        appendPadding: 30,
        data,
        minWidth:250,
        minHeight:300,
        
        xField: 'xG conceded',
        yField: 'Shot conceded',
        colorField: 'Result',
        size: 5,
        shape: 'circle',
        pointStyle: {
          fillOpacity: 1,
        },
        yAxis: {
          nice: true,
          line: {
            style: {
              stroke: '#aaa',
            },
          },
        },
        xAxis: {
          grid: {
            line: {
              style: {
                stroke: '#eee',
              },
            },
          },
          line: {
            style: {
              stroke: '#aaa',
            },
          },
        },
        label: {},
      };
    
      return <Scatter {...config} />;
    };
    