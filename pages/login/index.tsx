import Link from 'next/link';
import { Button, Input } from '@components';
import React from 'react';
import { useFetch, useInput } from '@hooks';
import { Form, FormControl, Wrapper } from '@styles/login.styles';
import { emailRegEx } from '../../utils';

function SignInPage() {
  const { sendRequest, error, isLoading } = useFetch();

  const {
    value: email,
    valueChangeHandler: emailChangehandler,
    hasError: emailInputHasError,
    isValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => emailRegEx.test(value.trim()));

  const {
    value: password,
    valueChangeHandler: passwordChangehandler,
    hasError: passwordInputHasError,
    isValid: passwordIsValid,
    inputBlurHandler: passwordBlurHandler,
    reset: resetPassword,
  } = useInput((value) => value.trim().length >= 6);

  const onSubmitHandler = async (e: React.FormEvent) => {
    e.preventDefault();
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

    console.log(data);
  };

  let formIsValid = false;

  if (emailIsValid && passwordIsValid) {
    formIsValid = true;
  }

  return (
    <Wrapper>
      {isLoading && <h4>Logging in...</h4>}

      {error && <h4>{error}</h4>}
      <Form onSubmit={onSubmitHandler}>
        <h1>Login</h1>
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
        <Button disabled={isLoading || !formIsValid}>Submit</Button>
      </Form>

      <p>
        Not an user?
        <Link href="/register">
          <a>Register Here</a>
        </Link>
      </p>
    </Wrapper>
  );
}

export default SignInPage;
