import React, { useState } from "react";

const PageNo = [1, 2, 3, 4, 5];

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePre = () => {
    if (currentPage > 1) setCurrentPage((pre) => pre - 1);
  };
  const handleNext = () => {
    if (currentPage < PageNo.length) setCurrentPage((pre) => pre + 1);
  };
  return (
    <div
      style={{
        display: "flex",
        gap: "10px",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <button
        style={{ border: "solid 2px" }}
        onClick={handlePre}
        disabled={currentPage == 1}
      >
        back
      </button>
      {PageNo &&
        PageNo.map((i) => (
          <div
            onClick={() => setCurrentPage(i)}
            style={{
              border: "solid 2px",
              width: "25px",
              height: "25px",
              cursor: "pointer",
              backgroundColor: `${currentPage === i ? "grey" : ""}`,
            }}
          >
            {i}
          </div>
        ))}
      <button
        style={{ border: "solid 2px" }}
        onClick={handleNext}
        disabled={currentPage == PageNo.length}
      >
        next
      </button>
    </div>
  );
};

export default Pagination;
