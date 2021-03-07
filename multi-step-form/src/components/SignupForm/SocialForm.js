import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Animator from './Animator';
import { useSignupForm } from './SignupFormContext';

const SocialForm = () => {
  const { register, handleSubmit, errors } = useForm();

  const history = useHistory();
  const { social, setSocial } = useSignupForm();

  const onSubmit = (data) => {
    setSocial(data);
    history.push('/review');
  };

  return (
    <Animator>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h2>How can we find you on social?</h2>

        <input
          type='text'
          name='twitter'
          placeholder='Your Twitter'
          defaultValue={social.twitter}
          ref={register({ required: true })}
        />
        <p>{errors.twitter && 'Twitter is required.'}</p>

        <input
          type='text'
          name='facebook'
          placeholder='Your Facebook'
          defaultValue={social.facebook}
          ref={register({
            required: true,
          })}
        />
        <p>{errors.facebook && 'Facebook is required.'}</p>
        <input type='submit' value='next' />
      </form>
    </Animator>
  );
};

export default SocialForm;
