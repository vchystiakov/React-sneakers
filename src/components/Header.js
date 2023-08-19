//import React
import React from 'react';
// import Link liabray
import { Link } from 'react-router-dom';
//import custom hook useCart
import { useCart } from '../hooks/useCart';

function Header(props) {
  const { totalPrice } = useCart();

  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to="/">
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="logo" />
          <div className="headerInfo">
            <h3 classname="text-uppercase">React Sneakers</h3>
            <p className="opacity-5"> Best Sneakers Shop</p>
          </div>
        </div>
      </Link>

      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.png" alt="Корзина" />
          <span>{totalPrice} USD</span>
        </li>
        <li className="cu-p mr-20">
          <Link to="/favorites">
            <img
              style={{ marginLeft: 10, marginRight: 10 }}
              height={18}
              weight={18}
              src="img/favorite.png"
              alt="favorites"
            />
          </Link>
        </li>
        <li className="cu-p mr-20">
          <Link to="/orders">
            <img width={18} height={18} src="img/user.png" alt="user" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
