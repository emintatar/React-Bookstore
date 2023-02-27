import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products, total, setBasket }) => {
  const resetBasket = () => {
    setBasket([]);
  };

  return (
    <div className="basket">
      <div className="basketContainer container">
        <h3>Alışveriş Detayları</h3>
        <ul>
          {basket.map((item) => {
            return (
              <BasketItem
                key={item.id}
                item={item}
                product={products.find((product) => product.id === item.id)}
              />
            );
          })}
        </ul>

        <div className="total">Toplam: {total} TL</div>
        <button className="resetBtn" onClick={resetBasket}>
          Sepeti Sıfırla
        </button>
      </div>
    </div>
  );
};

export default Basket;
