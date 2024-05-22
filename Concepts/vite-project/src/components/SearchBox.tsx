import React, { useRef } from "react";

const SearchBox = ({ filterData }) => {
  const searchRef = useRef();
  return (
    <div className="form-group">
      <input type="text" className="form-control myCustomCss" ref={searchRef} />
      <button
        onClick={(e) => {
          let text = searchRef.current.value;
          console.log("type of " + typeof filterData + " & text = " + text);
          filterData(text);
        }}
      >
        Filter
      </button>
    </div>
  );
};

export default SearchBox;
