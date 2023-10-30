import TreemapDrillDownUniq from "components/eCharts/TreemapDrillDownUniq";
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
const ExportComplexityTree = ({ id }: { id: string | undefined }) => {
  const selected = turkeySGKData.find((option) => option.city === id);
  const [treeLoading, setTreeLoading] = useState<boolean>(false);
  const [treeColorData, setTreeColorData] = useState<TreeNode[]>([]);

  useEffect(() => {
    setTreeLoading(true);
    fetch("/data/exportBasket.json")
      .then((response) => response.json())
      .then((rawData) => {
        const cityData = rawData.find(
          (item: any) => item.Ad === selected?.name
        );

        function mergeValues(arr: any) {
          arr.forEach((item: any) => {
            if (item.children) {
              mergeValues(item.children);
            }

            if (
              typeof item.value === "number" &&
              typeof item.value2 === "number"
            ) {
              item.value = [item.value, item.value2];
              delete item.value2;
            }
          });
        }
        mergeValues(cityData.data);
        setTreeColorData(cityData.data);
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
        id && (
          <TreemapDrillDownUniq
            cityName={selected?.name}
            cityData={treeColorData}
            max={4}
            min={-1}
          />
        )
      )}
    </>
  );
};

export default ExportComplexityTree;
