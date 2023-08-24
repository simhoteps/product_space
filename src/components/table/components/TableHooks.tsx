import { useFilteredItemsByText } from "../hooks/useFilteredItems";
import { usePagedItems } from "../hooks/usePaging";
import { useSortedItems } from "../hooks/useSorting";

export function useTable(
  allItems: any[],
  { filterKeys = [], sortKey, sortDir, pageSize = 5 }: TableOptions
) {
  const { filteredItems, ...filtering } = useFilteredItemsByText(
    allItems,
    filterKeys
  );
  const { sortedItems, ...sorting } = useSortedItems(filteredItems, {
    sortKey,
    sortDir,
  });

  const { items, paging } = usePagedItems(sortedItems, pageSize);

  const stats = {
    totalItems: allItems.length,
    start: (paging.currentPage - 1) * pageSize + 1,
    end: Math.min(paging.currentPage * pageSize, allItems.length),
  };

  return {
    items,
    filtering,
    sorting,
    paging,
    stats,
  };
}

interface Item {
  id: number;
  name: string;
}

interface TableOptions {
  filterKeys: string[];
  sortKey: string;
  sortDir: "asc" | "desc";
  pageSize: number;
}
