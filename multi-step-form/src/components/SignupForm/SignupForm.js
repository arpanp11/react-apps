import React from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import ProfileForm from './ProfileForm';
import Review from './Review';
import { SignupFormProvider } from './SignupFormContext';
import SocialForm from './SocialForm';
import StepLinks from './StepLinks';

const SignupForm = () => {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className='signup-form'>
        <StepLinks />

        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route path='/' exact component={ProfileForm} />
            <Route path='/social' component={SocialForm} />
            <Route path='/review' component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
};

export default SignupForm;
