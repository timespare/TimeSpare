import React from "react";
const searchBar = ({ keyword, onSubmit, onChange }) => {
  const SearchBarOuter = {
    // background: "pink",
    padding: "8px",
    width: "800px",
    marginBottom: "100px"
  };

  const searchInput = {
    fontSize: "16px",
    padding: "5px",
    // background: "lightBlue",
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

  //   const keydown = function(event) {
  //     if (event.keyCode === 13) {
  //       document.getElementById("btnSearch").click();
  //     }
  //   };

  window.onload = function() {
    document
      .getElementById("searchBar")
      .addEventListener("keypress", function(e) {
        var key = e.which || e.keyCode;
        if (key === 13) {
          onSubmit();
        }
      });
  };
  return (
    <div style={SearchBarOuter}>
      <input
        id="searchBar"
        value={keyword}
        style={searchInput}
        placeholder="Search Listings..."
        value={keyword}
        onChange={onChange}
      />
    </div>
  );
};

export default searchBar;
