import React from 'react';
import CartItem from './CartItem';
import { itemType } from './App';
import styled from 'styled-components';

const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;
`;

type Props = {
  cartItems: itemType[];
  addToCart: (clickedItem: itemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  // const calculateTotal = (items: CartItemType[]) => {
  //   return items.reduce((ack: number, item) => {
  //     return (ack + item.amount) * item.price;
  //   }, 0);
  // };

  return (
    <Wrapper>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart</p> : null}
      {cartItems.map((item) => {
        return (
          <CartItem
            key={item.id}
            item={item}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
          />
        );
      })}
      {/* <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2> */}
    </Wrapper>
  );
};

export default Cart;
