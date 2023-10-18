import { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import { ButtonsContainer, FormContainer } from './sign-in-form.styles';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import {
  signInWithGooglePopup,
  signInAuthUserWithEmailAndPassword,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  email: '',
  password: '',
};

const SignInForm = () => {
  const [formFields, setformFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const resetFormFields = () => setformFields(defaultFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setformFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case 'auth/invalid-login-credentials':
          alert(
            'Invalid login credentials. Please check your email and password and try again.'
          );
          break;
        case 'auth/wrong-password':
          alert('incorrect password for email');
          break;
        case 'auth/user-not-found':
          alert('no user associated with this email');
          break;
        default:
          console.log(error);
      }
    }
  };

  return (
    <FormContainer>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          htmlFor="existingEmail"
          label="Email"
          type="email"
          id="existingEmail"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />

        <FormInput
          htmlFor="existingPassword"
          label="Password"
          type="password"
          id="existingPassword"
          name="password"
          value={password}
          onChange={handleChange}
          required
        />

        <ButtonsContainer>
          <Button type="submit">Sign In</Button>
          <Button
            buttonType={BUTTON_TYPE_CLASSES.google}
            type="button"
            onClick={signInWithGoogle}
          >
            Google sign in
          </Button>
        </ButtonsContainer>
      </form>
    </FormContainer>
  );
};

export default SignInForm;
