import React, { useState, useMemo, useEffect, useRef } from "react";
import orderBy from "lodash/orderBy";

interface Item {
  [key: string]: string | boolean | undefined;
}

type SortDir = "asc" | "desc";

const getStringValueForSort = (item: Item, property: string): string => {
  const value = item[property];
  return value ? value.toString().toLowerCase() : "";
};

const sortByString = (
  items: Item[],
  sortKey: string,
  sortDir: SortDir
): Item[] => {
  return orderBy(
    items,
    [(item) => getStringValueForSort(item, sortKey)],
    [sortDir]
  );
};

export const useSortedItems = (
  items: Item[],
  initial: { sortDir?: SortDir; sortKey?: string } = {},
  sortItems: (
    items: Item[],
    sortKey: string,
    sortDir: SortDir
  ) => Item[] = sortByString
) => {
  const sortItemsRef = useRef(sortItems);

  useEffect(() => {
    sortItemsRef.current = sortItems;
  }, [sortItems]);

  const [sort, setSort] = useState({
    sortDir: "asc" as SortDir,
    sortKey: "",
    ...initial,
  });

  const onSort = (newSortKey: string) => {
    const isAsc = sort.sortKey === newSortKey && sort.sortDir === "asc";
    console.log("isAsc:", isAsc, "newSortKey", newSortKey);
    setSort({
      sortKey: newSortKey,
      sortDir: isAsc ? "desc" : "asc",
    });
  };

  const sortedItems = useMemo(
    () => sortItemsRef.current(items, sort.sortKey, sort.sortDir),
    [items, sort]
  );

  return {
    sortedItems,
    onSort,
    ...sort,
  };
};

/* import { useState, useMemo, useEffect, useRef } from "react";
import orderBy from "lodash/orderBy";

interface Item {
  [key: string]: string | undefined;
}

type SortDir = "asc" | "desc";

const getStringValueForSort = (item: Item, property: string): string =>
  (item[property] || "").toLowerCase();

const sortByString = (
  items: Item[],
  sortKey: string,
  sortDir: SortDir
): Item[] => {
  return orderBy(
    items,
    [(item) => getStringValueForSort(item, sortKey)],
    [sortDir]
  );
};

export const useSortedItems = (
  items: Item[],
  initial: { sortDir?: SortDir; sortKey?: string } = {},
  sortItems: (
    items: Item[],
    sortKey: string,
    sortDir: SortDir
  ) => Item[] = sortByString
) => {
  const sortItemsRef = useRef(sortItems);

  useEffect(() => {
    sortItemsRef.current = sortItems;
  }, [sortItems]);

  const [sort, setSort] = useState({
    sortDir: "asc" as SortDir,
    sortKey: "",
    ...initial,
  });

  const onSort = (newSortKey: string) => {
    const isAsc = sort.sortKey === newSortKey && sort.sortDir === "asc";
    console.log("isAsc:", isAsc, "newSortKey", newSortKey);
    setSort({
      sortKey: newSortKey,
      sortDir: isAsc ? "desc" : "asc",
    });
  };
  const sortedItems = useMemo(
    () => sortItemsRef.current(items, sort.sortKey, sort.sortDir),
    [items, sort]
  );

  return {
    sortedItems,
    onSort,
    ...sort,
  };
};
 */
