import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

import { Button, GenericLink, Input } from '@components';
import { useFetch, useInput } from '@hooks';
import { useAppDispatch } from '@redux/hooks';
import { setUser } from '@redux/slices';
import { Form, FormControl, Wrapper } from '@styles/login.styles';
import { User } from '@types';

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
    const data: User = await sendRequest(
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
      dispatch(setUser({ ...data }));
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
    <>
      <Head>
        <title>Ecommerce - Login</title>
        <meta name="title" content="Login page Ecommerce Next JS" />
        <meta
          name="description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder. Login Page"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ecommerce-frontend-sigma.vercel.app/login"
        />
        <meta property="og:title" content="Ecommerce Next JS" />
        <meta
          property="og:description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder."
        />
        <meta
          property="og:image"
          content="https://ecommerce-frontend-sigma.vercel.app/login.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ecommerce-frontend-sigma.vercel.app/login"
        />
        <meta property="twitter:title" content="Ecommerce Next JS" />
        <meta
          property="twitter:description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder."
        />
        <meta
          property="twitter:image"
          content="https://ecommerce-frontend-sigma.vercel.app/login.jpg"
        />
      </Head>
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
          <GenericLink href="/register" passHref>
            Register Here
          </GenericLink>
        </p>
      </Wrapper>
    </>
  );
}

export default SignInPage;
