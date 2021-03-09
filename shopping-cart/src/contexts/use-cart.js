import React, { createContext, useContext, useReducer } from 'react';
import products from '../products';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: [] };

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'ADD':
      return {
        ...state,
        cart: [...state.cart, products.find((p) => p.sku === payload)],
      };
    case 'REMOVE':
      const indexInCart = state.cart.findIndex((p) => p.sku === payload);
      const newCart = [...state.cart];
      newCart.splice(indexInCart, 1);
      return { ...state, cart: newCart };
    case 'EMPTY':
      return { cart: [] };
    default:
      return state;
  }
};

// cart context for the provider
export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku) => {
    dispatch({ type: 'ADD', payload: sku });
  };
  const removeItem = (sku) => {
    dispatch({ type: 'REMOVE', payload: sku });
  };
  const emptyCart = () => {
    dispatch({ type: 'EMPTY' });
  };

  const countItemsInCart = (sku) => {
    const itemsInCart =
      state.cart.filter((product) => product.sku === sku) ?? [];
    return itemsInCart.length;
  };

  const totalPrice = () => {
    return groupCartItems().reduce((totalPrice, product) => {
      return totalPrice + product.price * product.quantity;
    }, 0);
  };

  const groupCartItems = () => {
    return state.cart.reduce((newCart, product) => {
      const indexInCart = newCart.findIndex((p) => p.sku === product.sku);
      const isInCart = indexInCart !== -1;

      // increment the quantity,if a product in the array
      if (isInCart) {
        newCart[indexInCart].quantity = newCart[indexInCart].quantity + 1;
        return newCart;
      }

      //  add it to the array,if a product is not in the array
      newCart.push({ ...product, quantity: 1 });
      return newCart;
    }, []);
  };

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        emptyCart,
        cart: state.cart,
        cartGroupedByItems: groupCartItems(),
        countItemsInCart,
        totalPrice: totalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
