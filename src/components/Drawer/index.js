import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(
        'https://64ccf645bb31a268409a2e02.mockapi.io/orders',
        {
          items: cartItems,
        }
      );
      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      for (let i = 0; i < cartItems.length; i++) {
        const item = cartItems[i];
        await axios.delete(
          'https://64d4f565b592423e4694f306.mockapi.io/cart/' + item.id
        );
        await delay(1000);
      }
    } catch (error) {
      alert('Error while making request:(');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2 className="d-flex justify-between mb-30">
          Cart{' '}
          <img
            width={18}
            height={18}
            onClick={onClose}
            className="cu-p"
            src="img/btn-remove.png"
            alt="Close"
          />
        </h2>

        {items.length > 0 ? (
          <div className="d-flex flex-column flex">
            <div className="items flex">
              {items.map((obj) => (
                <div
                  key={obj.id}
                  className="cartItem d-flex align-center mb-20"
                >
                  <div className="cartItemImg">
                    <img
                      height={100}
                      width={100}
                      src={obj.imageUrl}
                      alt="Sneakers"
                      style={{ marginRight: 18 }}
                    />
                  </div>

                  <div className="mr-20 flex">
                    <p className="mb-5">{obj.title}</p>
                    <b>{obj.price} USD </b>
                  </div>
                  <img
                    style={{ cursor: 'pointer' }}
                    height={18}
                    width={18}
                    onClick={() => onRemove(obj.id)}
                    className="removeBtn"
                    src="img/btn-remove.png"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul>
                <li>
                  <span>Summary:</span>
                  <div></div>
                  <b>{totalPrice} USD </b>
                </li>
                <li>
                  <span>Taxes 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} USD </b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Make an Order{' '}
                <img height={20} width={20} src="img/arrow.png" alt="Arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'The order is complete' : 'Cart is empty'}
            description={
              isOrderComplete
                ? `Your order #${orderId} is given to courier services`
                : 'Add at least one pair of sneakers to create an order.'
            }
            image={
              isOrderComplete ? 'img/order-complete.png' : 'img/empty-cart.jpg'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
