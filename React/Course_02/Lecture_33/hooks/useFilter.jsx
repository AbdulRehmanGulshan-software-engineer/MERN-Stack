import { useState } from "react";
import { useLOcalStorage } from "./useLocalStorage";

export function useFilter(dataList, callBack) {
  const [query, setQuery] = useLOcalStorage("query", "");
  const filteredData = dataList.filter((data) =>
    callBack(data).toLowerCase().includes(query),
  );

  return [filteredData,query, setQuery];
}
