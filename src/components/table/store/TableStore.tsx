import React from "react";
import { makeAutoObservable } from "mobx";
import { RootStore } from "store/_RootStore";

export default class TableStore {
  private rootStore: RootStore;
  filterText: string = "";
  allItems: any[] = [];
  properties: string[] = [];
  debouncedValue: any;
  filteredItems: any[] = [];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  useDebouncedValue(delay: number) {
    const handler = setTimeout(() => {
      this.debouncedValue = this.filterText;
    }, delay);
    clearTimeout(handler);
    return this.debouncedValue;
  }

  /* useDebouncedEffect(
    effectFn: (value: any) => void,
    value: any,
    delay = 350
  ) {
    const effectRef = useRef(effectFn);
    const updatedValue = this.useDebouncedValue(delay);

    effectRef.current = effectFn;

    if (effectRef.current) {
        return effectRef.current(updatedValue);
      }
  } */

  /*   useFilteredItemsByText = (
    allItems: any[],
    properties: string[] = []
  ) => {
    const debouncedFilterText = this.useDebouncedValue(250);
    const propertiesKey = (properties || []).join(",");
    this.filteredItems = useMemo(() => {
      if (allItems && allItems.length) {
        const items = matchSorter(allItems, debouncedFilterText, {
          keys: properties,
          threshold: matchSorter.rankings.CONTAINS,
        });
        return items;
      }
  
      return [];
    }, [allItems, debouncedFilterText, propertiesKey]);
  };
 */
}
