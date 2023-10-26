import React, { useEffect, useState } from "react";
import axios from "axios";
import ForceLayoutGraph from "components/eCharts/ForceLayoutGraph";
import { ILinksPS, INodesPS } from "./type";
import { Graph, Edge } from "@dagrejs/graphlib";

const CHUNK_SIZE = 1000;

const ProductSpace = () => {
  const [graph, setGraph] = useState<Graph>(new Graph());

  const [customLinks, setLinks] = useState<ILinksPS[]>([]);
  const [customNodes, setNodes] = useState<INodesPS[]>([]);
  const [loadingLinks, setLoadingLinks] = useState<boolean>(true);
  const [loadingNodes, setLoadingNodes] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/productSpaceLinks.json")
      .then((response) => response.json())
      .then((data) => {
        /*  const filterData = data.filter((edge: ILinksPS) => edge.value > 0.6); */

        const filterData = data.map((edge: ILinksPS) =>
          setGraph(graph.setEdge(edge.source, edge.target, edge.value))
        );
        setLinks(filterData);
      })
      .then(() => {
        setLoadingLinks(false);
      })
      .catch((error) => console.error("Veri okuma hatası:", error));
  }, []);

  useEffect(() => {
    fetch("/data/productSpaceNodes.json")
      .then((response) => response.json())
      .then((data) => {
        /*   const filterData = data.filter(
          (node: INodesPS) => node.symbolSize > 80
        ); */
        data.map((node: INodesPS) =>
          setGraph(graph.setNode(node.id, node.category))
        );
        setNodes(data);
      })
      .then(() => {
        setLoadingNodes(false);
      })
      .catch((error) => console.error("Veri okuma hatası:", error));
  }, []);

  if (loadingLinks) {
    return <div>Loading...</div>;
  }
  console.log(graph.nodes());
  console.log(customNodes);
  return (
    <div>
      <ForceLayoutGraph
        categories={categories}
        nodes={customNodes}
        links={graph.edges()}
      />
    </div>
  );
};

export default ProductSpace;

const data1 = {
  links: [
    {
      source: "1",
      target: "7",
      value: 0.33,
    },
    {
      source: "2",
      target: "3",
      value: 0.5,
    },
    {
      source: "2",
      target: "4",
      value: 0.5,
    },
    {
      source: "2",
      target: "7",
      value: 0.33,
    },
    /*     {
      source: "2",
      target: "9",
      value: 0.5,
    }, */
    /*    {
      source: "3",
      target: "6",
      value: 0.5,
    }, */
    /*    {
      source: "3",
      target: "7",
      value: 0.67,
    }, */
    /*   {
      source: "3",
      target: "8",
      value: 0.5,
    }, */
    /*    {
      source: "3",
      target: "9",
      value: 0.5,
    }, */
    /*  {
      source: "4",
      target: "9",
      value: 0.5,
    }, */
    {
      source: "5",
      target: "7",
      value: 0.33,
    },
    {
      source: "6",
      target: "7",
      value: 0.33,
    },
    /*    {
      source: "6",
      target: "9",
      value: 0.5,
    }, */
    {
      source: "7",
      target: "8",
      value: 0.33,
    },
    {
      source: "7",
      target: "9",
      value: 0.33,
    },
    /*   {
      source: "8",
      target: "9",
      value: 0.5,
    }, */
  ],
  nodes: [
    {
      category: "B",
      id: "1",
      value: 22,
      name: 1,
      symbolSize: 100,
    },
    {
      category: "B",
      id: "2",
      value: 22,
      name: 2,
      symbolSize: 100,
    },
    {
      category: "C",
      id: "3",
      value: 22,
      name: 3,
      symbolSize: 100,
    },
    {
      category: "E",
      id: "4",
      value: 22,
      name: 4,
      symbolSize: 100,
    },
    {
      category: "E",
      id: "5",
      value: 22,
      name: 5,
      symbolSize: 100,
    },
    {
      category: "B",
      id: "6",
      value: 22,
      name: 6,
      symbolSize: 100,
    },
    {
      category: "D",
      id: "7",
      value: 22,
      name: 7,
      symbolSize: 100,
    },
    {
      category: "B",
      id: "8",
      value: 22,
      name: 8,
      symbolSize: 100,
    },
    {
      category: "B",
      id: "9",
      value: 22,
      name: 9,
      symbolSize: 100,
    },
  ],
  categories: [
    {
      name: "B",
      base: "B",
    },
    {
      name: "C",
      base: "C",
    },
    {
      name: "D",
      base: "D",
    },
    {
      name: "E",
      base: "E",
    },
  ],
};

const links = [
  {
    source: "51001" /* nace6_1 */,
    target: "51002" /* nace6_2 */,
    value: 1,
  },
  {
    source: "51001" /* nace6_1 */,
    target: "51003" /* nace6_2 */,
    value: 1,
  },
  {
    source: "51002" /* nace6_1 */,
    target: "51004" /* nace6_2 */,
    value: 1,
  },
  {
    source: "51001" /* nace6_1 */,
    target: "51004" /* nace6_2 */,
    value: 1,
  },
  {
    source: "51002" /* nace6_1 */,
    target: "51005" /* nace6_2 */,
    value: 1,
  },
  {
    source: "51003" /* nace6_1 */,
    target: "51005" /* nace6_2 */,
    value: 1,
  },
];
const nodes = [
  {
    category: "B",
    id: "51001",
    value: 22 /* proximity */,
    name: "bbbbb",
    symbolSize: 20 /* size */,
  },
  {
    category: "C",
    id: "51002",
    value: 28 /* proximity */,
    name: "cccccc",
    symbolSize: 30 /* size */,
  },
  {
    category: "D",
    id: "51003",
    value: 28 /* proximity */,
    name: "ddddd",
    symbolSize: 12 /* size */,
  },
  {
    category: "E",
    id: "51004",
    value: 28 /* proximity */,
    name: "eeeeee",
    symbolSize: 12 /* size */,
  },
  {
    category: "E",
    id: "51005",
    value: 28 /* proximity */,
    name: "ffffff",
    symbolSize: 12 /* size */,
  },
];
const categories = [
  {
    name: "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
    base: "B/C-Minarel ürünler, madencilik ve taş ocakçılığı",
  },
  {
    name: "C-Gıda ve tarım",
    base: "C-Gıda ve tarım",
  },
  {
    name: "C-Mobilya, kağıt ve diğer ağaç ürünleri",
    base: "C-Mobilya, kağıt ve diğer ağaç ürünleri",
  },
  {
    name: "Ticaret,ulaşım ve konaklama    ",
    base: "Ticaret,ulaşım ve konaklama    ",
  },
  {
    name: "C-Makine ve ekipman imalatı  ",
    base: "C-Makine ve ekipman imalatı  ",
  },
  {
    name: "C-Kimya ve Eczacılık   ",
    base: "C-Kimya ve Eczacılık   ",
  },
  {
    name: "Diğer Hizmet",
    base: "Diğer Hizmet",
  },
  {
    name: "C-Metal ürünler",
    base: "C-Metal ürünler",
  },
  {
    name: "C-Tekstil ve giyim",
    base: "C-Tekstil ve giyim",
  },
  {
    name: "C-Metal ürünler",
    base: "C-Metal ürünler",
  },
  {
    name: "C-Diğer    ",
    base: "C-Diğer    ",
  },
  {
    name: "Bilgi, İletişim, bilimsel ve teknik faaliyetler ",
    base: "Bilgi, İletişim, bilimsel ve teknik faaliyetler ",
  } /* ,
  {
    name: "P",
    base: "P",
  },
  {
    name: "R",
    base: "R",
  },
  {
    name: "Q",
    base: "Q",
  },
  {
    name: "S",
    base: "S",
  }, */,
];

const data = {
  links: [
    {
      source: "51001" /* nace6_1 */,
      target: "51002" /* nace6_2 */,
    },
    {
      source: "51001" /* nace6_1 */,
      target: "51003" /* nace6_2 */,
    },
    {
      source: "51002" /* nace6_1 */,
      target: "51004" /* nace6_2 */,
    },
    {
      source: "51001" /* nace6_1 */,
      target: "51004" /* nace6_2 */,
    },
    {
      source: "51002" /* nace6_1 */,
      target: "51005" /* nace6_2 */,
    },
    {
      source: "51003" /* nace6_1 */,
      target: "51005" /* nace6_2 */,
    },
  ],
  nodes: [
    {
      category: "B",
      id: "51001",
      value: 22 /* proximity */,
      name: 51001,
      symbolSize: 20 /* size */,
    },
    {
      category: "C",
      id: "51002",
      value: 28 /* proximity */,
      name: 51002,
      symbolSize: 30 /* size */,
    },
    {
      category: "D",
      id: "51003",
      value: 28 /* proximity */,
      name: 51003,
      symbolSize: 12 /* size */,
    },
    {
      category: "E",
      id: "51004",
      value: 28 /* proximity */,
      name: 51004,
      symbolSize: 12 /* size */,
    },
    {
      category: "E",
      id: "51005",
      value: 28 /* proximity */,
      name: 51005,
      symbolSize: 12 /* size */,
    },
  ],
  categories: [
    {
      name: "B",
      base: "B",
    },
    {
      name: "C",
      base: "C",
    },
    {
      name: "D",
      base: "D",
    },
    {
      name: "E",
      base: "E",
    },
  ],
};
