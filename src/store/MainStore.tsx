import { action, makeAutoObservable, runInAction } from "mobx";
import { RootStore } from "./_RootStore";
import { Connection, Edge, EdgeProps, Node } from "reactflow";
import { IDataNode } from "page/workflow/types/nodeTypes";
import { useCallback } from "react";

export default class MainStore {
  private rootStore: RootStore;
  topbarTitle: string = "";
  mobileIsOpen: boolean = false;
  sidebarIsOpen: boolean;
  nodeFormValues: any = {};
  nodeObj: any = {};
  nodeFormArray: any = [];
  initialEdges: Edge[] = [];
  initialNodes: Node[] = [
    {
      id: "1",
      type: "input",
      data: { label: "Start" },
      position: { x: 250, y: 5 },
    },
  ];
  edgesId: string = "";
  selectNode: IDataNode = {
    id: "",
    type: "",
    name: "",
    data: {},
  };

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    this.sidebarIsOpen = true;

    makeAutoObservable(this);
  }

  extractPathFromURL(url: string): string {
    const baseUrl = "http://localhost:3000/";
    const path = url.replace(baseUrl, "");
    return path;
  }
  setMobileOpen(data: boolean) {
    runInAction(() => {
      this.mobileIsOpen = data;
      this.sidebarIsOpen = true;
    });
  }

  setSidebarIsOpen() {
    runInAction(() => {
      this.sidebarIsOpen = !this.sidebarIsOpen;
    });
  }

  setTopbarTitle(data: string) {
    runInAction(() => {
      this.topbarTitle = data;
      sessionStorage.setItem("topbarTitle", data);
    });
  }

  setInitialEdges(data: any) {
    runInAction(() => {
      this.initialEdges = data;
    });
  }

  setInitialNode(data: any) {
    runInAction(() => {
      this.initialNodes = this.initialNodes.concat(data);
    });
  }

  setSelectNode(data: IDataNode) {
    runInAction(() => {
      this.selectNode = data;
    });
  }
  setNodeFormValues(data: any) {
    runInAction(() => {
      const oldValue = this.nodeFormValues;
      console.log("this.data", data);
      console.log("this.nodeFormValues", this.nodeFormValues);
      this.nodeFormValues = { ...data, oldValue };
    });
  }

  setEdgesId(data: string) {
    runInAction(() => {
      this.edgesId = data;
    });
  }
}
