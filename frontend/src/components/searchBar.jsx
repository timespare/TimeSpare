import React from "react";

const searchBar = ({ keyword, onChange }) => {
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
  //   Document.querySelector("#searchBar").addEventListener("keypress", function(
  //     e
  //   ) {
  //     let key = e.which || e.keyCode;
  //     if (key === 13) {
  //     }
  //   });
  return (
    <div style={SearchBarOuter}>
      {/* <form> */}
      <input
        //   type="submit"
        id="searchBar"
        value={keyword}
        style={searchInput}
        placeholder="Search Listings..."
        value={keyword}
        // onChange={onChange}
        //   onChange={this.form.submit()}
      />
      {/* <input type="submit" value="Submit" /> */}
      {/* </form> */}
    </div>
  );
};

export default searchBar;
