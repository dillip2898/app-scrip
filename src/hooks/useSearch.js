import { useState } from "react";
import Fuse from "fuse.js";

function search({ fuse, data, term }) {
  console.log(data, fuse, term);
  const results = fuse.search(term);
  return term ? results : data;
}

function useSearch({ data = [], options }) {
  console.log(data, options);
  const [searchTerm, setSearchTerm] = useState("");
  const fuse = new Fuse(data, options);
  const results = search({ fuse, data, term: searchTerm });
  const reset = () => setSearchTerm("");
  console.log(results);
  return { results, search: setSearchTerm, searchTerm, reset };
}

export default useSearch;
