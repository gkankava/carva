import React, { Fragment } from "react";

import ProductItem from "../components/ProductItem";
import Loader from "../components/Loader";

function ProductGrid({
  header,
  status,
  error,
  data = [],
  refer,
  isFetching,
  fetchMoreFunc,
  canFetchMore,
  isFetchingMore,
}) {
  if (!isFetching && header !== "ყველა პროდუქტი") {
    header = data[0].catName.categoryName;
  }
  return (
    <>
      <h3 className="catalog-main-header" style={{ margin: "25px 0" }}>
        {header}
      </h3>
      {/* <hr /> */}
      <div className="wrapper">
        {status === "loading" ? (
          <Loader cl="cat-loader-top" />
        ) : status === "error" ? (
          <span>Error: {error.msg}</span> // failed status instead of text
        ) : (
          <>
            {data.map((page, i) => (
              <Fragment key={i}>
                {page.list.map((p) => (
                  <ProductItem
                    key={p._id}
                    id={p._id}
                    catId={p.category}
                    img={p.productImage.filter((i) => i.main === true)[0].img}
                    name={p.productName}
                  />
                ))}
              </Fragment>
            ))}
          </>
        )}
      </div>

      <div className="pagin-wrapper">
        {status !== "loading" && (
          <button
            ref={refer}
            onClick={() => fetchMoreFunc()}
            disabled={!canFetchMore || isFetchingMore}
          >
            {isFetchingMore
              ? "იტვირთება"
              : canFetchMore
              ? "მეტის ნახვა"
              : "მეტი არაფერია"}
          </button>
        )}
        {isFetchingMore && <Loader className="cat-loader-bot" />}
      </div>
    </>
  );
}

export default ProductGrid;
