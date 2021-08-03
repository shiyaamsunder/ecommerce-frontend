import React from 'react';

import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';

import { StyledLink } from './styles';

export const GoBackLink: React.FunctionComponent = ({ ...rest }) => {
  const router = useRouter();
  return (
    <StyledLink onClick={() => router.back()} {...rest}>
      Go Back
    </StyledLink>
  );
};

interface GenericLinkProps {
  href: string;
}
export const GenericLink: React.FunctionComponent<
  GenericLinkProps & Omit<LinkProps, 'href'>
> = ({ children, href, ...rest }) => {
  return (
    <Link href={href} {...rest}>
      <a href={href}>{children}</a>
    </Link>
  );
};
