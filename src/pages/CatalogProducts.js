import React, { useRef, useEffect } from "react";
import axios from "axios";

import ProductGrid from "../components/ProductGrid";

import { useInfiniteQuery } from "react-query";

import useIntersectionObserver from "../hooks/useIntersectionObserver";
import set from "../components/shset";

function CatalogProducts({ match }) {
  const loadMoreButtonRef = useRef();

  let url = match.params.cat_name;

  const {
    status,
    data,
    error,
    // eslint-disable-next-line
    isFetching,
    isFetchingMore,
    fetchMore,
    canFetchMore,
    refetch,
  } = useInfiniteQuery(
    "cat_products",
    async (key, nextId = 1) => {
      const { data } = await axios.get(`/api/products/${url}`, {
        params: {
          page: nextId,
          limit: 10,
        },
      });
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
    refetch();
    set();
    //eslint-disable-next-line
  }, [url]);

  useEffect(() => {
    if (status === "success") {
      set();
    }
  }, [status]);

  useIntersectionObserver({
    target: loadMoreButtonRef,
    onIntersect: fetchMore,
    enabled: canFetchMore,
  });

  return (
    <ProductGrid
      header=""
      status={status}
      error={error}
      data={data}
      refer={loadMoreButtonRef}
      isFetching={isFetching}
      fetchMoreFunc={fetchMore}
      canFetchMore={canFetchMore}
      isFetchingMore={isFetchingMore}
    />
  );
}

export default CatalogProducts;
