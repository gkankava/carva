import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

function ProductItem({ id, catId, img, name }) {
  return (
    <div className="product-item" key={id}>
      <Link to={`/კატალოგი/${catId}/${id}`}>
        <Fade triggerOnce>
          <img src={img} alt="" />
          <h3>{name}</h3>
        </Fade>
      </Link>
    </div>
  );
}

export default ProductItem;
