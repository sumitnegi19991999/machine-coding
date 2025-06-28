import React, { useEffect, useState } from "react";

const InfiniteScroll = () => {
  const [proData, setProData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products/?limit=${page * 10}`
      );
      const data = await response.json();
      setProData(data);
      console.log(data);
      setPage(page + 1);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const myThrottle = (cb, d) => {
    let last = 0;
    return (...args) => {
      let now = new Date().getTime();
      if (now - last < d) return;
      last = now;
      return cb(...args);
    };
  };

  const handleScroll = myThrottle(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 500 >
        document.documentElement.offsetHeight &&
      !loading &&
      proData.limit < proData.total
    ) {
      fetchData();
    }
  }, 500);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  const { products: allproducts } = proData;
  console.log("prod", allproducts);

  return (
    <div>
      {allproducts?.length > 0 &&
        allproducts?.map((prod) => {
          return (
            <div key={prod.id}>
              <img src={prod.thumbnail} alt={prod.title} />
              <span>{prod.title}</span>
            </div>
          );
        })}
      {loading && <span>loading...</span>}
    </div>
  );
};

export default InfiniteScroll;
