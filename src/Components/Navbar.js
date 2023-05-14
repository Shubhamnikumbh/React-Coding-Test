import React from "react";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function NavBar() {
  const cartProducts = useSelector((state) => state.cart);

  return (
    <div>
      <Link to="/" as={Link}>
        Products{" "}
      </Link>
      <Link to="/cart" as={Link}>
        MY Bag :{cartProducts.length}
      </Link>
    </div>
  );
}

export default NavBar;
