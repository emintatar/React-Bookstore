import React from "react";

const BasketItem = ({ item, product }) => {
  return (
    <li className="basketItem">
      {product.title} X {item.amount}
    </li>
  );
};

export default BasketItem;
