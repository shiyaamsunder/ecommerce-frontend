import React from 'react';
import { NavBar } from '../navbar';

export const Layout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};
