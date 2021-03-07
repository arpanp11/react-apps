import React from 'react';
import Animator from './Animator';
import { useSignupForm } from './SignupFormContext';

const Review = () => {
  const { social, profile } = useSignupForm();

  const submitHandler = (e) => {
    e.preventDefault();
    alert('Your are submitting your info!');
  };

  return (
    <Animator>
      <form onSubmit={submitHandler}>
        <h2>Review your info</h2>
        <p>
          <strong>Name</strong>: {profile.name}
        </p>
        <p>
          <strong>Email</strong>: {profile.email}
        </p>
        <p>
          <strong>Twitter</strong>: {social.twitter}
        </p>
        <p>
          <strong>Facebook</strong>: {social.facebook}
        </p>
        <input type='submit' value='submit all info' />
      </form>
    </Animator>
  );
};

export default Review;
