import React from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <div className="headerContainer">
      {total > 0 && money - total !== 0 && (
        <div className="header">
          Harcayacak <span>{moneyFormat(money - total)}</span> TL paranız kaldı!
        </div>
      )}

      {total === 0 && (
        <div className="header">
          Harcamak için <span>{moneyFormat(money)}</span> TL paranız var!
        </div>
      )}

      {money - total === 0 && (
        <div className="header">Harcamak için paranız kalmadı!</div>
      )}
    </div>
  );
};

export default Header;
