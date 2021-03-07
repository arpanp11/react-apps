import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Animator from './Animator';

import { useSignupForm } from './SignupFormContext';

const ProfileForm = () => {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const { profile, setProfile } = useSignupForm();

  const onSubmit = (data) => {
    setProfile(data);
    history.push('/social');
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>Tell us about yourself</h2>

        <input
          type='text'
          name='name'
          placeholder='Your Name'
          defaultValue={profile.name}
          ref={register({ required: true })}
        />
        <p>{errors.name && 'Name is required.'}</p>

        <input
          type='email'
          name='email'
          placeholder='Your Email'
          defaultValue={profile.email}
          ref={register({
            required: true,
            pattern: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
          })}
        />
        <p>{errors.email && 'Please enter valid email.'}</p>
        <input type='submit' value='next' />
      </form>
    </Animator>
  );
};

export default ProfileForm;
