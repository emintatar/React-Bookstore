import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Product from "./components/Product";
import Basket from "./components/Basket";
import products from "./products.json";

function App() {
  const [money, setMoney] = useState(1000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const calculateTotalPrice = () => {
    let totalPrice = 0;
    basket.forEach((item) => {
      totalPrice += item.price * item.amount;
    });
    setTotal(totalPrice);
  };

  useEffect(() => {
    calculateTotalPrice();
  }, [basket]);

  return (
    <div className="App">
      <Header total={total} money={money} />

      <div className="container">
        {products.map((product) => (
          <Product
            total={total}
            money={money}
            key={product.id}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>
      {total > 0 && (
        <Basket
          total={total}
          products={products}
          basket={basket}
          setBasket={setBasket}
        />
      )}
    </div>
  );
}

export default App;
