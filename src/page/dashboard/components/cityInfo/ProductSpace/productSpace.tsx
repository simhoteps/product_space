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
  /*   console.log(graph.nodes());
  console.log(customNodes); */
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
    name: "Ticaret,ulaşım ve konaklama",
    base: "Ticaret,ulaşım ve konaklama",
  },
  {
    name: "C-Makine ve ekipman imalatı",
    base: "C-Makine ve ekipman imalatı",
  },
  {
    name: "C-Kimya ve Eczacılık",
    base: "C-Kimya ve Eczacılık",
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
    name: "C-Diğer",
    base: "C-Diğer",
  },
  {
    name: "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
    base: "Bilgi, İletişim, bilimsel ve teknik faaliyetler",
  },
];
