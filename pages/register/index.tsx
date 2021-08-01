import React from 'react';

import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { toast, Toaster } from 'react-hot-toast';

import { Button, Input } from '@components';
import { useFetch, useInput } from '@hooks';
import { Form, FormControl, Wrapper } from '@styles/login.styles';

import { emailRegEx } from '../../utils';

function SignUpPage() {
  const { sendRequest, error, isLoading } = useFetch();
  const router = useRouter();

  const {
    value: email,
    valueChangeHandler: emailChangehandler,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => emailRegEx.test(value.trim()));

  const {
    value: userName,
    valueChangeHandler: userNameChangehandler,
    hasError: userNameInputHasError,
    isValid: userNameIsValid,
    inputBlurHandler: userNameBlurHandler,
    reset: resetUserName,
  } = useInput((value) => value.trim() !== '');

  const {
    value: password,
    valueChangeHandler: passwordChangehandler,
    hasError: passwordInputHasError,
    isValid: passwordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length >= 6);

  const {
    value: confirmPassword,
    valueChangeHandler: confirmPasswordChangehandler,
    hasError: confirmPasswordInputHasError,
    isValid: confirmPasswordIsValid,
    inputBlurHandler: confirmPasswordBlurHandler,
    reset: resetconfirmPassword,
  } = useInput((value) => value.trim() === password);

  const myToast = toast;
  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    myToast.loading('Creating an account...');
    const data = await sendRequest(
      'https://morioh-backend.herokuapp.com/api/users/register',
      {
        method: 'POST',
        body: JSON.stringify({ email, name: userName, password }),
        headers: {
          'Content-type': 'application/json',
        },
      }
    );

    resetEmail();
    resetPassword();
    resetUserName();
    resetconfirmPassword();
    myToast.dismiss();
    if (data) {
      myToast.success('Account created. Please login. Redirecting in 2s', {
        duration: 2000,
      });
      setTimeout(() => router.replace('/login'), 2000);
    } else {
      myToast.error(error);
    }
  };

  let formIsValid = false;

  if (
    emailIsValid &&
    userNameIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }

  return (
    <>
      <Head>
        <title>Ecommerce - Register</title>
        <meta name="title" content="Register page Ecommerce Next JS" />
        <meta
          name="description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder. Register Page"
        />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://ecommerce-frontend-sigma.vercel.app/register"
        />
        <meta property="og:title" content="Ecommerce Next JS" />
        <meta
          property="og:description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder."
        />
        <meta
          property="og:image"
          content="https://ecommerce-frontend-sigma.vercel.app/register.jpg"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta
          property="twitter:url"
          content="https://ecommerce-frontend-sigma.vercel.app/register"
        />
        <meta property="twitter:title" content="Ecommerce Next JS" />
        <meta
          property="twitter:description"
          content="Ecommerce website built using Next JS by Shiyaam Sunder."
        />
        <meta
          property="twitter:image"
          content="https://ecommerce-frontend-sigma.vercel.app/register.jpg"
        />
      </Head>
      <Wrapper>
        <Toaster toastOptions={{ position: 'top-left' }} />
        <Form onSubmit={onSubmitHandler}>
          <h1>Register</h1>
          <FormControl>
            {emailInputHasError && (
              <div className="input__error">Email is badly formatted</div>
            )}
            <Input
              placeholder="Email"
              type="email"
              onChange={emailChangehandler}
              onBlur={emailBlurHandler}
              value={email}
            />
          </FormControl>
          <FormControl>
            {userNameInputHasError && (
              <div className="input__error">Name must not be empty</div>
            )}
            <Input
              placeholder="Name"
              type="text"
              onChange={userNameChangehandler}
              onBlur={userNameBlurHandler}
              value={userName}
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
              onChange={passwordChangehandler}
              onBlur={passwordBlurHandler}
              value={password}
            />
          </FormControl>
          <FormControl>
            {confirmPasswordInputHasError && (
              <div className="input__error">Passwords dont match</div>
            )}

            <Input
              placeholder="Confirm Password"
              type="password"
              onChange={confirmPasswordChangehandler}
              onBlur={confirmPasswordBlurHandler}
              value={confirmPassword}
            />
          </FormControl>
          <Button disabled={isLoading || !formIsValid}>Submit</Button>
        </Form>

        <p>
          Already an user?
          <Link href="/login" passHref>
            <a href="login">Login Here</a>
          </Link>
        </p>
      </Wrapper>
    </>
  );
}

export default SignUpPage;
