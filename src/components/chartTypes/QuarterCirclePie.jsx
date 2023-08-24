import React, { useState, useEffect } from 'react';
import { Pie } from '@ant-design/plots';
    
export const QuarterCirclePie = () => {
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
          value: 15,
        },
      ];
      const config = {
        appendPadding: 10,
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        // 设置圆弧起始角度
        startAngle: Math.PI,
        endAngle: Math.PI * 1.5,
        label: {
          type: 'inner',
          offset: '-8%',
          content: '{name}',
          style: {
            fontSize: 18,
          },
        },
        interactions: [
          {
            type: 'element-active',
          },
        ],
        pieStyle: {
          lineWidth: 0,
        },
      };
      return <Pie {...config} />;
    };
    
