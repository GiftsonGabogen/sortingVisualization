import { useState } from "react";

const useSorting = () => {
  const [sorting, setSorting] = useState(
    localStorage.getItem("sorting") !== null ? localStorage.getItem("sorting") : "MergeSort"
  );

  const sortingValueChange = e => {
    localStorage.setItem("sorting", e.target.value);
    setSorting(e.target.value);
  };

  return { sorting, sortingValueChange };
};
export default useSorting;
