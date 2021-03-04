import { NavLink } from 'react-router-dom';

import Tab from './Tab';

const Header = () => {
  return (
    <div className='tabs'>
      <Tab>
        <NavLink to='/' activeClassName='is-active' exact>
          Home
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/about' activeClassName='is-active'>
          About
        </NavLink>
      </Tab>
      <Tab>
        <NavLink to='/features' activeClassName='is-active'>
          Features
        </NavLink>
      </Tab>
    </div>
  );
};

export default Header;
