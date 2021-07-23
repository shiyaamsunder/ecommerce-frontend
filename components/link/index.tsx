import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { StyledLink } from './styles';

export const GoBackLink: React.FunctionComponent = ({ ...rest }) => {
  const router = useRouter();
  return (
    <StyledLink onClick={() => router.back()} {...rest}>
      Go Back
    </StyledLink>
  );
};
