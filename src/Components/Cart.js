import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../Store/cartSlice";

function Cart() {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const removeToCart = (id) => {
    // dispatch a remove funtion

    dispatch(remove(id));
  };

  const cards = products.map((product) => (
    <div style={{ marginBottom: 10 }}>
      <div style={{ width: "18rem" }} key={product.id} className="h-100">
        <div className="text-center">
          <image src={product.image} style={{ width: 100, height: 130 }} />
        </div>
        <div>
          <h3>{product.title}</h3>
          <h2>Inr {product.price}</h2>
        </div>

        <div>
          <button
            variant="primary"
            onClick={() => {
              removeToCart(product.id);
            }}
          >
            Remove Item
          </button>
        </div>
      </div>
    </div>
  ));

  return <div>{cards}</div>;
}

export default Cart;
