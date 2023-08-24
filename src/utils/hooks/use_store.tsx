import { useContext } from "react";
import { RootStore } from "store/_RootStore";
import { StoreContext } from "store/_RootStoreProvider";

export const useStores = (): RootStore => useContext(StoreContext);
