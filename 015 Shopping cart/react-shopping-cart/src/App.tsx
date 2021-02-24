import React, { useEffect, useState } from 'react';
import Item from './Item';
import Cart from './Cart';
// matieral ui
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// styles
import { Wrapper, StyleButton } from './App.styles';

export type itemType = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const App = () => {
  const [items, setItems] = useState<itemType[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<itemType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async (): Promise<void> => {
    return await (await fetch('https://fakestoreapi.com/products'))
      .json()
      .then((response) => {
        setItems(response);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(true);
      });
  };
  const getTotalItems = (items: itemType[]) => {
    return items.reduce((ack: number, item) => ack + item.amount, 0);
  };

  const handleAddToCart = (clickedItem: itemType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) => {
          return item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
      }
      return [...prev, { ...clickedItem, amount: 1 }];
    });
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) => {
      return prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) {
            return acc;
          }
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as itemType[]);
    });
  };

  return (
    <Wrapper>
      {loading ? (
        <LinearProgress />
      ) : (
        <>
          <Drawer
            anchor="right"
            open={cartOpen}
            onClose={() => setCartOpen(false)}
          >
            <Cart
              cartItems={cartItems}
              addToCart={handleAddToCart}
              removeFromCart={handleRemoveFromCart}
            />
          </Drawer>
          <StyleButton onClick={() => setCartOpen(true)}>
            <Badge badgeContent={getTotalItems(cartItems)} color="error">
              <AddShoppingCartIcon />
            </Badge>
          </StyleButton>
          <Grid container spacing={3}>
            {items.map((item) => {
              return (
                <Grid item key={item.id} xs={12} sm={4}>
                  <Item item={item} handleAddToCart={handleAddToCart} />
                </Grid>
              );
            })}
          </Grid>
        </>
      )}
    </Wrapper>
  );
};

export default App;
