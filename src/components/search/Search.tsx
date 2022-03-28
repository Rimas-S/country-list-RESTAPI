import React from "react";
import { SearchType } from "../../types/types";

function Search({handleChange, className }: SearchType) {
  return (
    <div className={className}>
      <input
        type="text"
        placeholder="Search..."
    
        onChange={handleChange}
      />
    </div>
  );
}

export default Search;
