import React, { useRef, useState } from "react";
import { useDimensions } from "webrix/hooks";
import  "./CustomLineChartsSytle.scss"
import { Stack, Typography ,Divider} from "@mui/material";

const DATA = [
/*  [100, 540, 900, 600, 700, 400, 800, 2000, 2900, 3200, 2400,3500], */
[1131, 1604, 1240, 1731, 1304, 2101, 3501]
];

const COLORS = ["#00baf0", "#5637f4"];
const LABELS = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL"];

const Line = ({ path, color }) => {
  const dx = 100 / (path.length - 1);
  const d = `M0,${path[0]} ${path
    .slice(1)
    .map(
      (p, i) =>
        `C${dx * i + dx / 2},${path[i]} ` +
        `${dx * (i + 1) - dx / 2},${path[i + 1]} ` +
        `${dx * (i + 1)},${path[i + 1]} `
    )
    .join(" ")}`;
  return (
    <>
      <path stroke={color} d={d} fill="none" className="stroke" />
      <path
        d={d + ` V0 H0 Z`}
        fill={`url(#gradient-${color})`}
        className="gradient"
      />
      <defs>
        <linearGradient id={`gradient-${color}`} x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity={0} />
          <stop offset="100%" stopColor={color} stopOpacity={0.15} />
        </linearGradient>
      </defs>
    </>
  );
};

const Points = ({ data, width, height, setActive, range }) => {
  const timeout = useRef();
  const dr = Math.abs(range[1] - range[0]);
  const activate = (path, point) => {
    clearTimeout(timeout.current);
    setActive({ path, point });
  };
  const deactivate = (path, point) => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      setActive((cur) => {
        if (cur.path === path && cur.point === point) {
          return null;
        }
        return cur;
      });
    }, 200);
  };
  return (
    <div className="points">
      {data.map((row, r) =>
        row.map((y, i) => (
          <div
            style={{
              "--x": `${(i * width) / (row.length - 1)}px`,
              "--y": `${height - y * (height / dr)}px`,
            }}
            onMouseEnter={() => activate(r, i)}
            onMouseLeave={() => deactivate(r, i)}
          />
        ))
      )}
    </div>
  );
};



const Marker = ({ colors, labels, data, active, width, height, range }) => {
  const { path, point } = active || {};
  const value = data[path]?.[point];
  const dr = Math.abs(range[1] - range[0]);
  return (
    <div
      className="marker"
      style={{
        opacity: active ? 1 : 0,
        "--color": colors[path],
        "--x": `${(point * width) / (data[path]?.length - 1)}px`,
        "--y": `${height - value * (height / dr)}px`,
      }}
    >
      <div className="tooltip">
        <span>{labels[point]}</span>
        <span>${value?.toLocaleString?.()}</span>
      </div>
      <div className="line" />
      <div className="circle" />
    </div>
  );
};

const Graph = ({ data, colors, range, labels }) => {
  const [active, setActive] = useState({ path: 1, point: 2 });
  const graph = useRef();
  const { width, height } = useDimensions(graph);
  return (
  <Stack  width={"100%"} alignItems={"center"}> 
    <div className="graph" ref={graph}>
      <Marker
        colors={colors}
        data={data}
        active={active}
        labels={labels}
        width={width}
        height={height}
        range={range}
         /> 
            <svg
            
            style={{transform: "scaleY(-1)" }}
            viewBox={`0 ${range[0]} 100 ${range[1]}`} preserveAspectRatio="none">
              {data.map((path, i) => (
               <Line key={i} path={path} color={colors[i]} />
                ))}
            </svg>

      <Points
          data={data}
           width={width}
           height={height}
           setActive={setActive}
           range={range}
          /> 
    </div>
  </Stack>
  );
};

const CustomLineCharts = ({ data, colors, range, labels, title, subtitle,value1,value2,value3,valueText1,valueText2,valueText3 }) => (
  <Stack width={"100%"} alignItems={"center"}> 
    <Typography variant="caption" >{title}</Typography>
    <Typography fontWeight={700} variant="h4" >{subtitle}</Typography>
      <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
        <Typography variant="subtitle2" >{ value1}</Typography>
        <Typography variant="body1" > {value2} </Typography>
        <Typography variant="subtitle2" >{value3}</Typography>
      </Stack>
  <Stack direction={"row"} width={"100%"}>
     <Divider orientation="vertical" flexItem/>
     <Graph
        data={data}
        colors={colors}
        range={range}
        labels={LABELS}
     
      />
      <Divider width="4px" orientation="vertical" flexItem/>
  </Stack>
  <Stack width={"100%"} direction={"row"} alignItems={"center"} justifyContent={"space-between"}>
      <Typography fontWeight={400} variant="subtitle2" > {valueText1} </Typography>
      <Typography variant="body1" > {valueText2} </Typography>
      <Typography fontWeight={400}  variant="subtitle2" > {valueText3} </Typography>
  </Stack>
 </Stack>
);

export default CustomLineCharts;
