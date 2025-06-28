import React, { useEffect, useState } from "react";

const PageNo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17];
const TruncatePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [truncated, setTruncated] = useState();

  const trnlogic = () => {
    const start = Math.max(1, currentPage - 2);
    const end = Math.min(PageNo.length, currentPage + 2);
    const arr = [];
    for (let i = start; i <= end; i++) {
      arr.push(i);
    }
    setTruncated(arr);
  };
  useEffect(() => {
    trnlogic();
  }, [currentPage]);

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
      {truncated[0] > 1 && <span>...</span>}
      {truncated &&
        truncated.map((i) => (
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
      {truncated[truncated.length - 1] < PageNo.length && <span>....</span>}
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

export default TruncatePagination;
