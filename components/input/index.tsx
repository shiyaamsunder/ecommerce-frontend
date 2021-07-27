import React from 'react';

import { StyledInput } from './styles';

type InputElement = React.FunctionComponent<
  React.InputHTMLAttributes<HTMLInputElement>
>;
export const Input: InputElement = ({ ...rest }) => {
  return <StyledInput {...rest} />;
};
