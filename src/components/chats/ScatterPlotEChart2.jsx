import React, { useState, useEffect } from 'react';
import { Scatter } from '@ant-design/plots';
import { turkeySGKData } from "page/home/data/NewData";
import numeral from "numeral";

 

const ScatterPlotEChart2 = () => {
  const newData = turkeySGKData.map((item) => {
    return {
      city: item.name,
      div: numeral(item.div.replace(",", ".")).value() ,
      inOF: numeral(item.of.replace(",", ".")).value()  ,
      team:item.group
    };
  });


  const dataKB = [...newData].sort((a, b) => (a.div ) - (b.div ) );
  const data= [...dataKB].sort((a, b) => (b.AvgUbiq ) - (a.AvgUbiq ) );


  const config = {
    appendPadding: 30,
    data,
    sizeField: 'city',
    xField: 'div',
    yField: 'inOF',
    colorField: 'team',
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
    label: {
 /*      rotate: 45  , */
      style: {
        fontSize: 9,
        textAlign: 'center',
      },
        formatter: (item) => {
          return  item.city;
        }, 
       
      }, 

  };

  return <Scatter {...config} />;
};

export default ScatterPlotEChart2
