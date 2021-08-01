import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import { Button, Input } from '@components';
import { useFetch, useInput } from '@hooks';
import { useAppDispatch } from '@redux/hooks';
import { setUser } from '@redux/slices';
import { Form, FormControl, Wrapper } from '@styles/login.styles';

import { emailRegEx } from '../../utils';

function SignInPage() {
  const { sendRequest, error, isLoading } = useFetch();
  // const [redirect, setRedirect] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    value: email,
    valueChangeHandler: emailChangeHandler,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => emailRegEx.test(value.trim()));

  const {
    value: password,
    valueChangeHandler: passwordChangeHandler,
    hasError: passwordInputHasError,
    isValid: passwordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length >= 6);

  const myToast = toast;
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    myToast.loading('Logging in...', { position: 'top-left' });
    const data = await sendRequest(
      'https://morioh-backend.herokuapp.com/api/users/login',
      {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    resetEmail();
    resetPassword();
    myToast.dismiss();

    if (data) {
      myToast.success('Success... redirecting in 2s', {
        position: 'top-left',
        duration: 2000,
      });
      dispatch(setUser({ tokens: data }));
      setTimeout(() => router.replace('/'), 2000);
    } else {
      myToast.error(error, { position: 'top-left' });
    }
  };

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Wrapper>
      <Toaster />
      <Form onSubmit={onSubmitHandler}>
        <h1>Login</h1>
        <FormControl>
          {emailInputHasError && (
            <div className="input__error">Email is badly formatted</div>
          )}
          <Input
            placeholder="Email"
            type="email"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={email}
          />
        </FormControl>
        <FormControl>
          {passwordInputHasError && (
            <div className="input__error">
              Password must be greater than 6 characters
            </div>
          )}

          <Input
            placeholder="Password"
            type="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            value={password}
          />
        </FormControl>
        <Button disabled={isLoading || !formIsValid}>Submit</Button>
      </Form>

      <p>
        Not an user?
        <Link href="/register" passHref>
          <a href="register">Register Here</a>
        </Link>
      </p>
    </Wrapper>
  );
}

export default SignInPage;
