import React, { useEffect, useState } from "react";
import { add } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../Store/productSlice";
import { Alert } from "react-bootstrap";

function Product() {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(getProducts());
  });

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return (
      <Alert key="danger" variant="danger">
        Something went Wrong ! Try again later
      </Alert>
    );
  }
  const addToCart = (product) => {
    // dispatch add action
    dispatch(add(product));
  };
  const cards = products.map((product) => (
    <div>
      <div key={product.id}>
        <image src={product.image} style={{ width: 100, height: 130 }} />
        <div>
          <h4>{product.title}</h4>
          <h4>Inr {product.price}</h4>
        </div>

        <div>
          <button
            onClick={() => {
              addToCart(product);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div>{cards}</div>
    </div>
  );
}

export default Product;
