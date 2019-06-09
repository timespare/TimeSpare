import React from "react";
const searchBar = ({ keyword, onSubmit, onChange }) => {
  const SearchBarOuter = {
    padding: "8px",
    width: "800px",
    marginBottom: "100px"
  };

  const searchInput = {
    fontSize: "16px",
    padding: "5px",
    borderRadius: "5px",
    boxSizing: "border-box",
    width: "100%",
    height: "50px",
    outlineWidth: "0",
    fontFamily: "Montserrat",
    fontweight: "bold",
    boxShadow: "0 0 50px #d2b274",
    zIndex: "3"
  };

  return (
    <div style={SearchBarOuter}>
      <input
        id="searchBar"
        value={keyword}
        style={searchInput}
        placeholder="Search Listings..."
        value={keyword}
        onKeyDown={onSubmit}
        onChange={onChange}
      />
    </div>
  );
};

export default searchBar;
