import { useState } from "react";

const useSorting = () => {
  const [sorting, setSorting] = useState(
    localStorage.getItem("sorting") !== null ? localStorage.getItem("sorting") : "MergeSort"
  );

  const sortingValueChange = Algo => {
    localStorage.setItem("sorting", Algo);
    setSorting(Algo);
  };

  return { sorting, sortingValueChange };
};
export default useSorting;
