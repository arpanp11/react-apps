import React from 'react';
import { NavLink } from 'react-router-dom';

import { useSignupForm } from './SignupFormContext';

const isEmpty = (obj) => {
  return Object.keys(obj).length === 0;
};

const StepLinks = () => {
  const { profile, social } = useSignupForm();

  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);

  return (
    <div className='step-links'>
      <NavLink to='/' exact>
        {isProfileDone ? '👍' : '👎'} Profile <span />
      </NavLink>

      {isProfileDone ? (
        <NavLink to='/social'>
          {' '}
          {isSocialDone ? '👍' : '👎'} Social <span />{' '}
        </NavLink>
      ) : (
        <a href='#'>
          Social <span />{' '}
        </a>
      )}

      {isSocialDone ? (
        <NavLink to='/review' style={{ float: 'right' }}>
          Review <span />
        </NavLink>
      ) : (
        <a href='#' style={{ float: 'right' }}>
          Review
        </a>
      )}
    </div>
  );
};

export default StepLinks;
