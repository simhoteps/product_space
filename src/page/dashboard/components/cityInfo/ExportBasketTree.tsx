import TreemapDrillDown from "components/eCharts/TreemapDrillDown";
import CustomLoading from "components/loading/CustomLoading";
import { turkeySGKData } from "page/dashboard/data/NewData";
import React, { useEffect, useState } from "react";

interface TreeNode {
  name: string;
  value: number[];
  children?: TreeNode[];
}
interface ITreeNode {
  name: string;
  value: number;
  children?: ITreeNode[];
}

const ExportBasketTree = ({ id }: { id: string | undefined }) => {
  const [treeData, setTreeData] = useState<ITreeNode[]>([]);
  const [treeLoading, setTreeLoading] = useState<boolean>(false);
  const selected = turkeySGKData.find((option) => option.city === id);

  useEffect(() => {
    setTreeLoading(true);
    fetch("/data/exportBasket.json")
      .then((response) => response.json())
      .then((rawData) => {
        if (id) {
          const cityData = rawData.find(
            (item: any) => item.Ad === selected?.name
          );

          setTreeData(cityData.data);
        }
      })
      .then(() => {
        setTreeLoading(false);
      });
  }, []);

  return (
    <>
      {treeLoading === true ? (
        <CustomLoading />
      ) : (
        id && <TreemapDrillDown cityName={selected?.name} cityData={treeData} />
      )}
    </>
  );
};

export default ExportBasketTree;
