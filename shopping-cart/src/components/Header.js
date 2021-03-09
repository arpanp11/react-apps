import React, { useState, useRef } from 'react';

import CartIcon from '../supermarket.svg';
import useOnClickOutside from 'use-onclickoutside';
import { useCart } from '../contexts/use-cart';
import Cart from './Cart';

const Header = () => {
  const { cart } = useCart();

  const modalRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  //  if we click outside of it,close the modal
  useOnClickOutside(modalRef, () => setIsOpen(false));

  return (
    <header>
      <div className='container'>
        <div className='cart-button'>
          <button onClick={() => setIsOpen((isOpen) => !isOpen)}>
            <img src={CartIcon} width='30' alt='' />({cart.length})
          </button>

          <div
            ref={modalRef}
            className='cart-modal'
            style={{ display: isOpen ? 'block' : 'none' }}
          >
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
