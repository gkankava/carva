import React, { useRef, useEffect } from "react";
import axios from "axios";

import { useInfiniteQuery } from "react-query";
import useIntersectionObserver from "../hooks/useIntersectionObserver";

import ProductGrid from "../components/ProductGrid";

import set from "../components/shset";

function CatalogHomePage() {
  const loadMoreButtonRef = useRef();

  const {
    status,
    data,
    error,
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
  } = useInfiniteQuery(
    "products",
    async (key, nextId = 1) => {
      const { data } = await axios.get(
        "/api/products?page=" + nextId + "&limit=10"
      );
      return data;
    },
    {
      getFetchMore: ({ currentPage, totalPages }) => {
        if (currentPage < totalPages) {
          return currentPage + 1;
        } else {
          return null;
        }
      },
    }
  );

  useEffect(() => {
    if (!isFetching) {
      set();
    }
  }, [isFetching]);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  });

  // console.log(data);

  return (
    <ProductGrid
      header="ყველა პროდუქტი"
      status={status}
      error={error}
      data={data}
      refer={loadMoreButtonRef}
      fetchMoreFunc={fetchMore}
      canFetchMore={canFetchMore}
      isFetchingMore={isFetchingMore}
    />
  );
}

export default CatalogHomePage;
