import React, { useEffect, useState } from "react";
import axios from "axios";
import ForceLayoutGraph from "components/eCharts/ForceLayoutGraph";
import { ILinksPS, INodesPS } from "./type";

const CHUNK_SIZE = 1000;

const ProductSpace = () => {
  /*   const [customLinks, setLinks] = useState<ILinksPS[]>([]);
  const [customNodes, setNodes] = useState<INodesPS[]>([]);
  const [loadingLinks, setLoadingLinks] = useState<boolean>(true);
  const [loadingNodes, setLoadingNodes] = useState<boolean>(true);

  useEffect(() => {
    fetch("/data/productSpaceLinks.json")
      .then((response) => response.json())
      .then((data) => {
        const filterData = data.filter((edge: ILinksPS) => edge.value > 0.6);
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
          const filterData = data.filter(
          (node: INodesPS) => node.symbolSize > 80
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
  } */

  return (
    <div>
      <ForceLayoutGraph
        categories={data1.categories}
        nodes={data1.nodes}
        links={data1.links}
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
      symbolSize: 200,
    },
    {
      category: "B",
      id: "2",
      value: 22,
      name: 2,
      symbolSize: 200,
    },
    {
      category: "C",
      id: "3",
      value: 22,
      name: 3,
      symbolSize: 200,
    },
    {
      category: "E",
      id: "4",
      value: 22,
      name: 4,
      symbolSize: 200,
    },
    {
      category: "E",
      id: "5",
      value: 22,
      name: 5,
      symbolSize: 200,
    },
    {
      category: "B",
      id: "6",
      value: 22,
      name: 6,
      symbolSize: 150,
    },
    {
      category: "D",
      id: "7",
      value: 22,
      name: 7,
      symbolSize: 200,
    },
    {
      category: "B",
      id: "8",
      value: 22,
      name: 8,
      symbolSize: 200,
    },
    {
      category: "B",
      id: "9",
      value: 22,
      name: 9,
      symbolSize: 200,
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
  {
    name: "F",
    base: "F",
  },
  {
    name: "G",
    base: "G",
  },
  {
    name: "H",
    base: "H",
  },
  {
    name: "I",
    base: "I",
  },
  {
    name: "J",
    base: "J",
  },
  {
    name: "L",
    base: "L",
  },
  {
    name: "M",
    base: "M",
  },
  {
    name: "N",
    base: "N",
  },
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
  },
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
