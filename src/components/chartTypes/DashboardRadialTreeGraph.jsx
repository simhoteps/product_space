import React from "react";
import { RadialTreeGraph } from "@ant-design/graphs";
const data = {
    id: "DATAPARK",
    children: [
      
      {
        id: "Infrastructure",
        value: "Infrastructure",
        children: [
          {
            id: "SYSTEM",
            value: "Support ",
            children: [
              {
                id: "PRODUCTION1",
                value: "PRODUCTION1",
                children: [
                  { id: "P1/Virtual Servers", value: "P1/Virtual Servers" },
                  { id: "P1/Hosts", value: "P1/Hosts" },
                  { id: "P1/Storage", value: "P1/Storage" }
                ]
              },
              {
                id: "PRODUCTION2",
                value: "PRODUCTION2",
                children: [
                  { id: "P2/Hosts", value: "P2/Hosts" },
                  { id: "P2/Virtual Servers", value: "P2/Virtual Servers" }
                ]
              },
              {
                id: "BACKOFFICE",
                value: "BACKOFFICE",
                children: [
                  { id: "BO/Virtual Servers", value: "BO/Virtual Servers" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "Application",
        value: "Application",
        children: [
          { id: "API Service", value: "API Service" },
          {
            id: "Web Service",
            value: "Web Service",
            children: [
              {
                id: "Virtual Servers",
                value: "Virtual Servers",
                children: [
                  {
                    id: "P2 - VMs",
                    value: "P2 - VMs",
                    children: [
                      { id: "P2 - API1", value: "P2 - API1" },
                      { id: "P2 - API2", value: "P2 - API2" }
                    ]
                  }
                ]
              },
              { id: "ISS", value: "ISS" },
              { id: "MySQL", value: "MySQL" },
              { id: "Elasticsearch", value: "Elasticsearch" },
              {
                id: "MongoDB",
                value: "MongoDB",
                children: [
                  { id: "Mango Level", value: "Mango Level" },
                  { id: "Server Level", value: "Server Level" },
                  { id: "Elastic Level", value: "Elastic Level" }
                ]
              },
            
            ]
          },
          
        ]
      },
    ],
    value: "DATASPARK"
  };

const DashboardRadialTreeGraph = () => {

  const themeColor = "#1B8E65 " /*  "#454F9F"; */
  const themeColorDeactive ="#43AD87"/*  "#8E97FD" */ /* "#C0C5FF"; */
  const textColor="#FFFFFF"/* "var(--kt-text-gray-800) !important" */
  const config = {
    data,
    height:350,
    width: 350,

   
    
  /*   height:window.innerHeight-200,  */
   
    nodeCfg: {
      size: 40,
      padding: 5,
      collideStrength: 10,
      preventOverlap: true,
      type:'radial',
      label: {
        style: {
          fill: "#fff"
        }
      },
      //Çember ve çerçevelerin rengi
      title: {
        style: (cfg) => {
          return {
            fill: textColor,
            stroke:"#565674", 
            fontSize: cfg.id === "DATASPARK" ? 16 : 13,
            fontWeight: cfg.id === "DATASPARK" ? 900 : 600,
           
          }
        
        }
      },

      style: (cfg) => {
        return {
          fill: cfg.children?.length > 0 ? themeColor : themeColorDeactive,
          stroke: "#0E1155"
        };
      },
      //Çember ve çerçevelerin dıs rengi hover olayından sonra
      nodeStateStyles: {
        hover: {
          stroke: "#9CA0C6",
          lineWidth: 2,
          strokeOpacity: 1
        }
      }
    },
    //ara cizgiler
    edgeCfg: {
      style: {
        stroke: "#656565"
      },
      endArrow: {
        type: "triangle",
        fill: themeColor,
        d: 20,
        size: 10
      },
      //ara cizgilere hover olayı
      edgeStateStyles: {
        hover: {
          stroke: "#9CA0C6",
          lineWidth: 3
        }
      }
    },
    
    behaviors: ["drag-canvas","drag-node",/*  "zoom-canvas",  */],
  };

  return (
   
      <RadialTreeGraph   style={{backgroundColor:"transparent" , }}    {...config} />
  );
};

export default DashboardRadialTreeGraph;