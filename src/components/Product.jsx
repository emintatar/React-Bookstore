import React from "react";
import { moneyFormat } from "../helpers";

const Product = ({ product, basket, setBasket, total, money }) => {
  const basketItem = basket.find((item) => item.id === product.id);

  const addBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      const newBasket = basket.map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            amount: item.amount + 1,
          };
        } else {
          return item;
        }
      });
      setBasket(newBasket);
    } else {
      const newBasket = [...basket, { ...product, amount: 1 }];
      setBasket(newBasket);
    }
  };

  const deleteBasket = () => {
    const checkBasket = basket.find((item) => item.id === product.id);
    if (checkBasket) {
      const newBasket = basket.map((item) => {
        if (item.id === product.id) {
          const newAmount = item.amount - 1;
          if (newAmount >= 0) {
            return {
              ...item,
              amount: newAmount,
            };
          }
        }
        return item;
      });
      setBasket(newBasket);
    }
  };

  return (
    <div className="product">
      <img src={product.image} alt={product.title} />
      <h5>{product.title}</h5>
      <h6>{product.author}</h6>
      <div className="price">
        <span>{moneyFormat(product.price)}</span> TL
      </div>
      <div className="actions">
        <button
          className="removeBtn"
          disabled={!basketItem || basketItem.amount <= 0}
          onClick={deleteBasket}
        >
          Çıkar
        </button>
        <span className="amount">{basketItem ? basketItem.amount : 0}</span>
        <button
          className="addBtn"
          disabled={total + product.price > money}
          onClick={addBasket}
        >
          Ekle
        </button>
      </div>
    </div>
  );
};

export default Product;
