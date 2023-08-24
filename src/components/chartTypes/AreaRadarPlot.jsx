

    import React, { useState, useEffect } from 'react';
    import { Radar } from '@ant-design/plots';
    
    export const AreaRadarPlot = () => {
      const [data, setData] = useState([]);
    
      useEffect(() => {
        asyncFetch();
      }, []);
    
      const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json')
          .then((response) => response.json())
          .then((json) => setData(json))
          .catch((error) => {
            console.log('fetch data failed', error);
          });
      };
      const config = {
        data,
        xField: 'item',
        yField: 'score',
        seriesField: 'user',
        meta: {
          score: {
            alias: '分数',
            min: 0,
            max: 80,
          },
        },
        xAxis: {
          line: null,
          tickLine: null,
          grid: {
            line: {
              style: {
                lineDash: null,
              },
            },
          },
        },
        // 开启面积
        area: {},
        // 开启辅助点
        point: {
          size: 2,
        },
      };
    
      return <Radar  style={{minHeight:"300px", minWidth:"250px", width: '100%' }} {...config} />;
    };
    
   